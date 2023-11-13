import { getMovieCredits, getMovieDetails, getSimilarMovies } from "../utils/tmdb.js";
import { SwiperPart } from "../components/SwiperPart.jsx";
import { useParams } from "@solidjs/router";
import { createEffect, createResource } from "solid-js";
const imagePath = 'https://image.tmdb.org/t/p/original'
const Detail_movie = () => {
    const params = useParams()
    const [movieDetail] = createResource(() => params.id, async () => {
        return await getMovieDetails(params.id)
    },)
    const [movieCrew] = createResource(() => params.id, async () => {
        const creditsdata = await getMovieCredits(params.id)
        const cast = creditsdata.cast.reduce((accumulator, current) => {
            let exists = accumulator.find(item => {
                return item.id === current.id;
            });
            if (!exists) {
                accumulator = accumulator.concat(current);
            }
            return accumulator;
        }, []);
        cast.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1
            }
            if (a.popularity < b.popularity) {
                return 1
            }
            return 0
        })
        return cast
    },)
    const [moviesimilar] = createResource(() => params.id, async () => {
        const similardata = await getSimilarMovies(params.id)
        const data = similardata.results.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1
            }
            if (a.popularity < b.popularity) {
                return 1
            }
            return 0
        })

        return data

    },)


    const netPrice = (budget, revenue) => {
        const total = revenue - budget
        if (total > 0) {
            return <div className="stat-value text-green-300">${Intl.NumberFormat().format(total)}</div>

        } else {
            return <div className="stat-value text-red-500">${Intl.NumberFormat().format(total)}</div>

        }
    }

    return (

        <main className={'container mt-8'}>
            {movieDetail.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
            {movieDetail.error && <div>{movieDetail.error.message}</div>}
            {movieDetail() && (
                <div className="flex flex-col lg:flex-row mt-4 mb-4">
                    <img className={'w-full max-w-md  lg:w-1/3  rounded self-center '} src={imagePath + movieDetail()?.poster_path} alt="" />
                    <div className="lg:ms-12 mt-8 lg:mt-0 w-full">
                        <p className="text-5xl ">{movieDetail()?.title}</p>
                        <div className="badge badge-outline badge-sm">{movieDetail()?.status}  {new Date(movieDetail()?.release_date).toLocaleDateString('tr')}</div>
                        <p className="mt-4 mb-4">{movieDetail()?.overview}</p>
                        {movieDetail()?.genres?.map(elm => {
                            return <a key={elm.id} href=""><div className="badge badge-neutral me-2">{elm.name}</div></a>
                        })}
                        <br />
                        <div className="stats stats-vertical lg:stats-horizontal    shadow mt-8  w-full">

                            <div className="stat place-items-center mx-auto ">
                                <div className="stat-title">Budget</div>
                                <div className="stat-value">${new Intl.NumberFormat().format(movieDetail()?.budget)}</div>
                            </div>
                            <div className="stat place-items-center mx-auto">
                                <div className="stat-title">Revenue</div>
                                <div className="stat-value">${new Intl.NumberFormat().format(movieDetail()?.revenue)}</div>
                            </div>
                            <div className="stat place-items-center mx-auto">
                                <div className="stat-title">Total</div>
                                <div className="stat-value">{netPrice(movieDetail()?.budget, movieDetail()?.revenue)}</div>
                            </div>





                        </div>
                    </div>
                </div>)
            }

            {movieCrew.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
            {movieCrew.error && <div>{movieCrew.error.message}</div>}
            {movieCrew() && <SwiperPart head={"Actors"} movies={movieCrew} />}

            {moviesimilar.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
            {moviesimilar.error && <div>{moviesimilar.error.message}</div>}
            {moviesimilar() && <SwiperPart head={"Similar Movies"} movies={moviesimilar} />}

        </main>
    )

}

export default Detail_movie;