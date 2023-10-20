<script>
    import { Link } from "svelte-routing";
    import { getSearchResult } from "../utils/tmdb";
    import { onMount } from "svelte";
    import Navbar from "./common/Navbar.svelte";
    import Footer from "./common/Footer.svelte";

    let queryParams = new URLSearchParams(window.location.search);
    let category = queryParams.get('category');
    let searchvalue = queryParams.get('val');
    let searchresult =[]


    console.log(category, searchvalue);

   onMount(async()=>{
    const searchresultdata = await getSearchResult(searchvalue,category)
    searchresult= searchresultdata.results
   })
</script>



                            <div class="flex container gap-12 flex-wrap justify-center mt-12">
    {#each searchresult as card (card.id) }
        
    
            
                    <Link to={`/detail/${category}/${card.id}`} key={card.id} class="flex">
                        <div class="card h-100 w-56 bg-base-100  shadow-xl">
                            <figure style="height:100%">
                                <img
                                    class="object-cover "
                                    style="height:100%"
                                    src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.profile_path}`}
                                    alt="{card.title}"
                                />
                            </figure>
                            <div class="card-body ">
                                <p class="card-title whitespace-nowrap text-ellipsis overflow-hidden inline-block">{card.title || card.name}</p>
                            </div>
                        </div>
                        </Link>
            
                        {/each}    
                    </div>

      


