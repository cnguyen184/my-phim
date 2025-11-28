import { PrismaClient } from "@prisma/client";
import MovieRow from "../components/MovieRow";
import Banner from "../components/Banner";

export default function Home({ popular, topRated, upcoming }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="px-6 py-4">
        <h1 className="text-2xl font-bold">MyFlix</h1>
      </header>

      <Banner movie={popular[0]} />

      <main className="px-6 space-y-8">
        <MovieRow title="Popular" movies={popular} />
        <MovieRow title="Top Rated" movies={topRated} />
        <MovieRow title="Upcoming" movies={upcoming} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const popular = await prisma.movie.findMany({
    where: { category: "popular" },   // category bạn đặt trong seed
  });

  const topRated = await prisma.movie.findMany({
    where: { category: "top_rated" },
  });

  const upcoming = await prisma.movie.findMany({
    where: { category: "upcoming" },
  });

  return {
    props: {
      popular,
      topRated,
      upcoming,
    },
  };
}
