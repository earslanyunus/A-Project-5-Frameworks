import { getMovieCredits, getMovieDetails, getSimilarMovies } from "../utils/tmdb.js";
import { SwiperPart } from "../components/SwiperPart.jsx";
import { useParams } from "@solidjs/router";
import {  createEffect, createResource } from "solid-js";
const imagePath = 'https://image.tmdb.org/t/p/original'
const Detail_movie = () => {
    const params = useParams()
    const [movieDetail] = createResource(()=>params.id,async () => {
        return await getMovieDetails(params.id)
    },)
    const [movieCrew] = createResource(()=>params.id,async () => {
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
    const [moviesimilar] = createResource(()=>params.id,async () => {
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
   
   
    const netPrice= (budget,revenue)=>{
        const total = revenue-budget
        if (total>0) {
            return  <div className="stat-value text-green-300">${Intl.NumberFormat().format(total)}</div>

        }else{
            return <div className="stat-value text-red-500">${Intl.NumberFormat().format(total)}</div>

        }
    }

    return (
        
        <main className={'container mx-auto'}>
            { movieDetail() &&(
            <div className="flex mt-4 mb-4">
                <img className={'w-1/5 rounded '} src={imagePath + movieDetail()?.poster_path} alt="" />
                <div className="ms-12">
                    <p className="text-5xl ">{movieDetail()?.title}</p>
                    <div className="badge badge-outline badge-sm">{movieDetail()?.status}  {new Date(movieDetail()?.release_date).toLocaleDateString('tr')}</div>
                    <p className="mt-4 mb-4">{movieDetail()?.overview}</p>
                    {movieDetail()?.genres?.map(elm => {
                        return <a key={elm.id} href=""><div className="badge badge-neutral me-2">{elm.name}</div></a>
                    })}
                    <br />
                    <div className="stats shadow mt-8">

                        <div className="stat place-items-center ">
                            <div className="stat-title">Budget</div>
                       <div className="stat-value">${new Intl.NumberFormat().format(movieDetail()?.budget)}</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Revenue</div>
                         <div className="stat-value">${new Intl.NumberFormat().format(movieDetail()?.revenue)}</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Total</div>
                           <div className="stat-value">{netPrice(movieDetail()?.budget,movieDetail()?.revenue)}</div>
                        </div>

                      

                      

                    </div>
                </div>
            </div>)
        }
            {movieCrew() &&<SwiperPart head={"Actors"} movies={movieCrew} />}
            {moviesimilar() &&<SwiperPart head={"Similar Movies"} movies={moviesimilar} />}

        </main>
    )

}

export default Detail_movie;