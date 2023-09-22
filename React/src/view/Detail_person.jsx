import {useEffect, useState} from "react";
import {
    getPersonDetails,
    getPersonMovies,
    getPersonSeries,
} from "../utils/tmdb.js";
import {useParams} from "react-router-dom";
import { SwiperPart } from "../components/SwiperPart.jsx";
const imagePath = 'https://image.tmdb.org/t/p/original'

const Detail_person = () => {
    const {id} = useParams()
    
    const [personDetail,setPersonDetail] = useState([])
    const [personMovies,setPersonMovies] = useState([])
    const [personSeries,setPersonSeries] = useState([])
    useEffect(()=>{
       getPersonDetails(id)
       .then(elm=>{
            setPersonDetail(elm)
       })
       getPersonMovies(id)
       .then(elm=>{
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
            setPersonMovies(elm)
       })

       getPersonSeries(id)
       .then(elm=>{
        elm =  elm.crew.reduce((accumulator, current) => {
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
            setPersonSeries(elm)
       })
    },[])


    return(
        <main className="container">
            <div className="flex mt-4 mb-4">
            <img className={'w-1/5 rounded '} src={imagePath + personDetail.profile_path} alt="" />
            <div className="ms-12">
                    <p className="text-5xl upp">{personDetail?.name}</p>
                    <div className="badge badge-outline badge-sm">Born on {new Date(personDetail.birthday).toLocaleDateString('tr')}</div>
                    <p className="mt-4 mb-4">{personDetail?.biography}</p>

                      

                      
                </div>
            </div>
            {personMovies.length>0 && <SwiperPart head={'Movies'} cards={personMovies} type={'movie'}/>
        }
            {personSeries.length>0 && <SwiperPart head={'Series'} cards={personSeries} type={'series'}/>}
        </main>
    )

}

export default Detail_person;