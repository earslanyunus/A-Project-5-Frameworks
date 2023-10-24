import {
    getPersonDetails,
    getPersonMovies,
    getPersonSeries,
} from "../utils/tmdb.js";
import { SwiperPart } from "../components/SwiperPart.jsx";
import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
const imagePath = 'https://image.tmdb.org/t/p/original'

const Detail_person = () => {
    const params = useParams()
    const [personDetail] = createResource(() => params.id, async () => {
        return await getPersonDetails(params.id)
    })
    const [personMovies] = createResource(() => params.id, async () => {
        const personmoviedata = await getPersonMovies(params.id)
        const data = personmoviedata.cast.reduce((accumulator, current) => {
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
        return data




    })
    const [personSeries] = createResource(() => params.id, async () => {
        const personseriesdata = await getPersonSeries(params.id)
        const data = personseriesdata.cast.reduce((accumulator, current) => {
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
        return data
    })




    return (
        <main className="container mx-auto">
            {personDetail.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
            {personDetail.error && <div>{personDetail.error.message}</div>}
            {personDetail() && (
                <div className="flex mt-4 mb-4">
                    <img className={'w-1/5 rounded '} src={imagePath + personDetail().profile_path} alt="" />
                    <div className="ms-12">
                        <p className="text-5xl upp">{personDetail()?.name}</p>
                        <div className="badge badge-outline badge-sm">Born on {new Date(personDetail().birthday).toLocaleDateString('tr')}</div>
                        <p className="mt-4 mb-4">{personDetail()?.biography}</p>




                    </div>
                </div>
            )}

            {personMovies.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
            {personMovies.error && <div>{personMovies.error.message}</div>}
            {personMovies() && <SwiperPart head={'Movies'} movies={personMovies} />}
            {personSeries.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
            {personSeries.error && <div>{personSeries.error.message}</div>}
            {personSeries() && <SwiperPart head={'Series'} movies={personSeries} />}
        </main>
    )

}

export default Detail_person;