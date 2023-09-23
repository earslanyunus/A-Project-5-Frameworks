import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { getSearchResult } from "../utils/tmdb";
import { onSearch } from "../store/searchstore";

export const InfoCard = () => {
    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.searchstore.searchResult)
    const selectedCategory = useSelector(state=> state.searchstore.searchCategory)
    const {text,category} = useParams()
   
    useEffect(()=>{
        console.log(text,selectedCategory);
     getSearchResult(text,category)
     .then(elm=>{
        dispatch(onSearch(elm.results))
     })

    },[])

    const controltype = ()=>{
        return selectedCategory === 'tv' ? 'series':selectedCategory
      }
    return (
        <>
                            <div className="flex container gap-12 flex-wrap justify-center mt-12">

            {searchResult?.map((card) => {
                return (
                    <Link to={`/detail/${controltype()}/${card.id}`} key={card.id} className="flex">
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
