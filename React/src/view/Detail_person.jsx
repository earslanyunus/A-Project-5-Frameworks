import {useEffect} from "react";
import {
    getMovieCredits,
    getMovieDetails,
    getPersonDetails,
    getPersonMovies,
    getPersonSeries,
    getSimilarMovies
} from "../utils/tmdb.js";
import {useParams} from "react-router-dom";

const Detail_person = () => {
    const {id} = useParams()
    useEffect(()=>{
        const getData = async ()=>{
            await getPersonDetails(id)
            await getPersonMovies(id)
            await getPersonSeries(id)
        }
        getData()

    },[])


    return(
        <p>Detail Person</p>
    )

}

export default Detail_person;