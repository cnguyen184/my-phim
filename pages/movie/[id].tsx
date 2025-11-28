import { GetServerSideProps } from "next";
import Image from "next/image";
import { prisma } from "../../lib/prisma";

export default function MovieDetail({ movie, suggestions }: any) {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button onClick={() => history.back()} className="mb-4 underline">
        ← Back
      </button>

      {/* Main detail */}
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={movie.poster_path}
          width={400}
          height={600}
          alt={movie.title}
          className="rounded"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="mt-4 text-gray-300">{movie.overview}</p>
          <p className="mt-4 text-pink-300 font-semibold">
            Category: {movie.category}
          </p>
        </div>
      </div>

      {/* Suggestion section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">You may also like</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {suggestions.map((m: any) => (
          <div key={m.id} className="w-40">
            <a href={`/movie/${m.id}`}>
              <Image
                src={m.poster_path}
                width={160}
                height={240}
                alt={m.title}
                className="rounded hover:scale-105 transition"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.id);

  // 1. Lấy phim theo ID
  const movie = await prisma.movie.findUnique({ where: { id } });

  if (!movie) {
    return { notFound: true };
  }

  // 2. Suggest phim cùng category, trừ chính phim đó
  const suggestions = await prisma.movie.findMany({
    where: {
      category: movie.category,
      NOT: { id: movie.id },
    },
    take: 10,
  });

  return {
    props: {
      movie,
      suggestions,
    },
  };
};
