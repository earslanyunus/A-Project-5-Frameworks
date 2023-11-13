import { getSeriesCredits, getSeriesDetails, getSeriesSimilar } from "../utils/tmdb.js";
import { SwiperPart } from "../components/SwiperPart.jsx";
import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";

const imagePath = 'https://image.tmdb.org/t/p/original'

const Detail_series = () => {
    const params = useParams()
    const [seriesDetail] = createResource(() => params.id, async () => {
        return await getSeriesDetails(params.id)
    })
    const [seriesCrew] = createResource(() => params.id, async () => {
        const seriescrewdata = await getSeriesCredits(params.id)
        const data = seriescrewdata.cast.reduce((accumulator, current) => {
            let exists = accumulator.find(item => {
                return item.id === current.id;
            });
            if (!exists) {
                accumulator = accumulator.concat(current);
            }
            return accumulator;
        }, []);
        data.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1
            }
            if (a.popularity < b.popularity) {
                return 1
            }
            return 0
        })
        // elm = elm.filter(elm =>{
        //     //             return elm.known_for_department ==="Acting"
        //     //         })
        return data
    })
    const [seriesSimilar] = createResource(() => params.id, async () => {
        const seriessimilardata = await getSeriesSimilar(params.id)

        seriessimilardata.results.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1
            }
            if (a.popularity < b.popularity) {
                return 1
            }
            return 0
        })
        return seriessimilardata.results


    })
    

    return (
        <main className={'container mt-8'}>
            {seriesDetail() && (
            <div className="flex flex-col lg:flex-row mt-4 mb-4">
            <img className='w-full max-w-md  lg:w-1/3  rounded self-center' src={imagePath + seriesDetail()?.poster_path} alt="" />
            <div className="lg:ms-12 mt-8 lg:mt-0 w-full">
                <p className="text-5xl ">{seriesDetail().name}</p>
                 <div className="badge badge-outline badge-sm me-3">{seriesDetail().status}</div>
                 <div className="badge badge-outline badge-sm">Last live on  {new Date(seriesDetail().last_air_date).toLocaleDateString('tr')}</div>
                 <p className="mt-4 mb-4">{seriesDetail()?.overview}</p>
                {seriesDetail()?.genres?.map(elm => {
                    return <a key={elm.id} href=""><div className="badge badge-neutral me-2">{elm.name}</div></a>
                })} 
                <br />
                <div className="stats stats-vertical lg:stats-horizontal    shadow mt-8  w-full">

                    <div className="stat place-items-center mx-auto ">
                        <div className="stat-title">Number Of Seasons</div>
                        <div className="stat-value">{seriesDetail().number_of_seasons}</div>
                    </div>
                    <div className="stat place-items-center mx-auto">
                        <div className="stat-title">Number Of Episodes</div>
                        <div className="stat-value">{seriesDetail().number_of_episodes}</div>
                    </div>
                    

                  

                  

                </div>
            </div>
        </div>
        )}
        {seriesCrew()&&        <SwiperPart head={"Actors"} movies={seriesCrew}  /> }
        {seriesSimilar()&&        <SwiperPart head={"Similar Series"} movies={seriesSimilar}  /> }

        </main>
    )

}

export default Detail_series