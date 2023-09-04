import {useEffect} from "react";
import {getMovieCredits, getMovieDetails, getSimilarMovies} from "../utils/tmdb.js";
import {useParams} from "react-router-dom";

const Detail_movie = () => {
    const {id} = useParams()
    useEffect(()=>{
        const getData = async ()=>{
            await getMovieDetails(id)
            await getMovieCredits(id)
            await getSimilarMovies(id)
        }
        getData()

    },[])


    return(
        <p>Detail Movie</p>
    )

}

export default Detail_movie;