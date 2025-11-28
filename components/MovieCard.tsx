import Image from "next/image";
import Link from "next/link";
import { Movie } from "../data/types";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative w-48 cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10">
        <Image
          src={movie.poster_path}
          alt={movie.title}
          width={192}
          height={288}
          className="rounded-lg"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
