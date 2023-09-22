import { useEffect, useState } from "react";
import { getMovieCredits, getMovieDetails, getSimilarMovies } from "../utils/tmdb.js";
import { useParams } from "react-router-dom";
import { SwiperPart } from "../components/SwiperPart.jsx";
const imagePath = 'https://image.tmdb.org/t/p/original'
const Detail_movie = () => {
    const { id } = useParams()
    const [loading,setLoading]=useState(true)
    const [movieDetail, setMovieDetail] = useState([])
    const [movieCrew, setMovieCrew] = useState([])
    const [moviesimilar, setMoviesimilar] = useState([])
    useEffect(() => {

        getMovieDetails(id).then(elm => {
            setMovieDetail(elm)
            setLoading(false)
        })
        getMovieCredits(id).then(elm => {
            const cast = elm.cast.reduce((accumulator, current) => {
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
            setMovieCrew(cast)
        })
        getSimilarMovies(id).then(elm => {
            elm.results.sort((a, b) => {
                if (a.popularity > b.popularity) {
                    return -1
                }
                if (a.popularity < b.popularity) {
                    return 1
                }
                return 0
            })

            setMoviesimilar(elm.results)
        })


    }, [id])
    const netPrice= (budget,revenue)=>{
        const total = revenue-budget
        if (total>0) {
            return  <div className="stat-value text-green-300">${Intl.NumberFormat().format(total)}</div>

        }else{
            return <div className="stat-value text-red-500">${Intl.NumberFormat().format(total)}</div>

        }
    }

    return (
        <main className={'container'}>
            <div className="flex mt-4 mb-4">
                <img className={'w-1/5 rounded '} src={imagePath + movieDetail?.poster_path} alt="" />
                <div className="ms-12">
                    <p className="text-5xl ">{movieDetail.title}</p>
                    <div className="badge badge-outline badge-sm">{movieDetail.status}  {new Date(movieDetail.release_date).toLocaleDateString('tr')}</div>
                    <p className="mt-4 mb-4">{movieDetail?.overview}</p>
                    {movieDetail?.genres?.map(elm => {
                        return <a key={elm.id} href=""><div className="badge badge-neutral me-2">{elm.name}</div></a>
                    })}
                    <br />
                    <div className="stats shadow mt-8">

                        <div className="stat place-items-center ">
                            <div className="stat-title">Budget</div>
                            {loading?<p>Loading</p>:<div className="stat-value">${new Intl.NumberFormat().format(movieDetail.budget)}</div>}
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Revenue</div>
                            {loading?<p>Loading</p>:<div className="stat-value">${new Intl.NumberFormat().format(movieDetail.revenue)}</div>}
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title">Total</div>
                            {loading?<p>Loading</p>:<div className="stat-value">{netPrice(movieDetail.budget,movieDetail.revenue)}</div>}
                        </div>

                      

                      

                    </div>
                </div>
            </div>

            <SwiperPart head={"Actors"} cards={movieCrew} type={'person'} />
            <SwiperPart head={"Similar Movies"} cards={moviesimilar} type={'movie'} />

        </main>
    )

}

export default Detail_movie;