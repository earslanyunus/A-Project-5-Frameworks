import { A, useLocation } from "@solidjs/router";
import { getSearchResult } from "../utils/tmdb";
import { For, createResource } from "solid-js";

export const InfoCard = () => {
  
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const text = queryParams.get('val');
    
    const [searchResult] = createResource(async()=>{
        const data = await getSearchResult(text,category)
        return data.results

    })


    return (
        
                            <div className="flex container gap-12 flex-wrap justify-center mt-12">

           
                <For each={searchResult()}>{(card)=>{
                    return(
                    <A href={`/detail/${category}/${card.id}`} key={card.id} className="flex">
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
                        </A>
                        )
                }}
                        </For>
            
            
                                </div>

        
    )

}
