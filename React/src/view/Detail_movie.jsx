import {useEffect} from "react";
import {getMovieCredits, getMovieDetails, getSimilarMovies} from "../utils/tmdb.js";
import {useParams} from "react-router-dom";

const Detail_movie = () => {
    const {movieid} = useParams()
    useEffect(()=>{
        const getData = async ()=>{
            await getMovieDetails(movieid)
            await getMovieCredits(movieid)
            await getSimilarMovies(movieid)
        }
        getData()

    },[])


    return(
        <p>Detail Movie</p>
    )

}

export default Detail_movie;