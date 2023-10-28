import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/Header"


const Page = async ({params}: any) => {

    const {keyword} = params
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
    )
    const searchAnime = await response.json()
    searchAnime.data

    return (
        <>
            {/* Anime terpopuler */}
            <section>
                <Header
                    title={`Pencarian untuk ${keyword}...`}
                />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page