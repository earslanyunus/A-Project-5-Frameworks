import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import { getSearchResult } from "../utils/tmdb";
import { useParams } from "react-router-dom";

export const InfoCard = () => {
    const [searchResult,setSearchResult] = useState([])
    const location = useLocation()
    const {category,text} = useParams()
    console.log(category,text);
    
    useEffect(()=>{
     getSearchResult(text,category)
     .then(elm=>{
        
        setSearchResult(elm)
     })

    },[])


    return (
        <>
                            <div className="flex container gap-12 flex-wrap justify-center mt-12">

            {searchResult?.map((card) => {
                return (
                    <Link to={`/detail/${category}/${card.id}`} key={card.id} className="flex">
                        <div className="card h-100 w-56 bg-base-100  shadow-xl">
                            <figure style={{"height":"100%"}}>
                                <img
                                    className="object-cover "
                                    style={{"height":"100%"}}
                                    src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.profile_path}`}
                                    alt="{movie.title}"
                                />
                            </figure>
                            <div className="card-body ">
                                <p className="card-title whitespace-nowrap text-ellipsis overflow-hidden inline-block">{card.title || card.name}</p>
                            </div>
                        </div>
                        </Link>
                )
            }
            )
            }
                                </div>

        </>
    )

}
