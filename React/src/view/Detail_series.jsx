import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSeriesCredits, getSeriesDetails, getSeriesSimilar } from "../utils/tmdb.js";
import { useState } from "react";
import { SwiperPart } from "../components/SwiperPart.jsx";

const imagePath = 'https://image.tmdb.org/t/p/original'

const Detail_series = () => {
    const { id } = useParams()
    const [loading,setLoading]=useState(true)
    const [seriesDetail, setSeriesDetail] = useState([])
    const [seriesCrew, setSeriesCrew] = useState([])
    const [seriesSimilar, setSeriesSimilar] = useState([])
    useEffect(() => {
        getSeriesDetails(id).then(elm => {
            setSeriesDetail(elm)
            setLoading(false)

        }
        )
        getSeriesCredits(id).then(elm => {
            console.log(elm);
            elm =  elm.cast.reduce((accumulator, current) => {
                let exists = accumulator.find(item => {
                    return item.id === current.id;
                });
                if (!exists) {
                    accumulator = accumulator.concat(current);
                }
                return accumulator;
            }, []);
            elm.sort((a, b) => {
                if (a.popularity > b.popularity) {
                    return -1
                }
                if (a.popularity < b.popularity) {
                    return 1
                }
                return 0
            })
            elm = elm.filter(elm =>{
                return elm.known_for_department ==="Acting"
            })
            console.log(elm);
            setSeriesCrew(elm)
            
        })
        getSeriesSimilar(id).then(elm => {
            elm = elm.results
            elm.sort((a,b)=>{
                if(a.popularity > b.popularity ){
                    return -1
                }
                if(a.popularity <  b.popularity ){
                    return 1
                }
                return 0 
            })
            console.log(elm);
            setSeriesSimilar(elm)
        })


    }, [])


    return (
        <main className={'container'}>
        <div className="flex mt-4 mb-4">
            <img className={'w-1/5 rounded '} src={imagePath + seriesDetail?.poster_path} alt="" />
            <div className="ms-12">
                <p className="text-5xl ">{seriesDetail.name}</p>
                 <div className="badge badge-outline badge-sm me-3">{seriesDetail.status}</div>
                 <div className="badge badge-outline badge-sm">Last live on  {new Date(seriesDetail.last_air_date).toLocaleDateString('tr')}</div>
                 <p className="mt-4 mb-4">{seriesDetail?.overview}</p>
                {seriesDetail?.genres?.map(elm => {
                    return <a key={elm.id} href=""><div className="badge badge-neutral me-2">{elm.name}</div></a>
                })} 
                <br />
                <div className="stats shadow mt-8">

                    <div className="stat place-items-center ">
                        <div className="stat-title">Number Of Seasons</div>
                        {loading?<p>Loading</p>:<div className="stat-value">{seriesDetail.number_of_seasons}</div>}
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Number Of Episodes</div>
                        {loading?<p>Loading</p>:<div className="stat-value">{seriesDetail.number_of_episodes}</div>}
                    </div>
                    

                  

                  

                </div>
            </div>
        </div>
        <SwiperPart head={"Actors"} cards={seriesCrew} type={'person'} /> 
        <SwiperPart head={"Similar Series"} cards={seriesSimilar} type={'series'} /> 

    </main>
    )

}

export default Detail_series