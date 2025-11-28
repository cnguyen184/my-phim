import { PrismaClient } from "@prisma/client";
import { popularMovies, topRatedMovies, upcomingMovies } from "./movies-data";

const prisma = new PrismaClient();

async function main() {
  const movies = [
    ...popularMovies,
    ...topRatedMovies,
    ...upcomingMovies,
  ];

  for (const movie of movies) {
    await prisma.movie.upsert({
      where: { title: movie.title },
      update: {},
      create: movie,
    });
  }

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
