import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TrailerModal({ movieId, onClose }: { movieId: number | null, onClose: ()=>void }) {
  const [key, setKey] = useState<string | null>(null)

  useEffect(() => {
    if (!movieId) return
    const fetch = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_TMDB_BASE_URL || 'https://api.themoviedb.org/3'
        const keyApi = process.env.NEXT_PUBLIC_TMDB_KEY_CLIENT || process.env.TMDB_API_KEY
        const res = await axios.get(`${base}/movie/${movieId}/videos?api_key=${keyApi}`)
        const vids = res.data.results
        const trailer = vids.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube')
        setKey(trailer?.key || null)
      } catch (err) {
        console.error(err)
      }
    }
    fetch()
  }, [movieId])

  if (!movieId) return null

  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
      <div className='bg-black max-w-3xl w-full aspect-video'>
        <button onClick={onClose} className='text-white p-2'>Close</button>
        {key ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${key}?autoplay=1`}
            title="Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className='p-6 text-center'>No trailer found</div>
        )}
      </div>
    </div>
  )
}
