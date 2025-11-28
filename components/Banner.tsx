import Image from "next/image";
import { Movie } from '../data/types'

type Props = {
  movie: Movie;
};

const Banner = ({ movie }: Props) => {
  if (!movie) return null;

  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src={movie.backdrop_path || movie.poster_path} // dùng trực tiếp URL
        alt={movie.title || "Banner"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-10 left-10 text-white max-w-xl">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="mt-2 text-sm line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
