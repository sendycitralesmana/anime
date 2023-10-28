import Image from 'next/image'
import AnimeList from './components/AnimeList'
import Link from 'next/link'
import Header from './components/AnimeList/Header'

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  topAnime.data

  return (
    <>
      {/* Anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Page