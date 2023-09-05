import {useEffect} from "react";

import {useParams} from "react-router-dom";
import {getSeriesCredits, getSeriesDetails, getSeriesSimilar} from "../utils/tmdb.js";

const Detail_series = () => {
    const {id} = useParams()
    useEffect(()=>{
        const getData = async ()=>{
            getSeriesDetails(id)
            getSeriesCredits(id)
            getSeriesSimilar(id)
        }
        getData()

    },[])


    return(
        <p>Detail Series</p>
    )

}

export default Detail_series