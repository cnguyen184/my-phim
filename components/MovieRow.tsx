import MovieCard from './MovieCard'

type Movie = {
  id: number
  title?: string
  name?: string
  poster_path?: string
}

export default function MovieRow({ title, movies }: { title: string, movies: Movie[] }) {
  return (
    <section>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <div className='flex space-x-3 overflow-x-auto pb-2'>
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </section>
  )
}
