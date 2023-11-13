<script>
// @ts-nocheck

import { getSeriesCredits, getSeriesDetails, getSeriesSimilar } from "../utils/tmdb.js";
import SwiperPart from '../components/SwiperPart.svelte';
import { onMount } from "svelte";
    import Navbar from "../components/common/Navbar.svelte";
    import Footer from "../components/common/Footer.svelte";

const imagePath = 'https://image.tmdb.org/t/p/original'


    let loading = true
    let seriesDetail = []
    let seriesDetailGenres = []
    let seriesCrew = []
    let seriesSimilar = []
    let id
    export let params = {}

    const getdata = async(id)=>{
        const seriesdetailsdata = await getSeriesDetails(id)
        seriesDetail = seriesdetailsdata
        seriesDetailGenres = seriesdetailsdata.genres
        loading = false

        let seriescreditsdata = await getSeriesCredits(id)
        seriescreditsdata = seriescreditsdata.cast.reduce((accumulator, current) => {
                let exists = accumulator.find(item => {
                    return item.id === current.id;
                });
                if (!exists) {
                    accumulator = accumulator.concat(current);
                }
                return accumulator;
            }, []);
            seriescreditsdata.sort((a, b) => {
                if (a.popularity > b.popularity) {
                    return -1
                }
                if (a.popularity < b.popularity) {
                    return 1
                }
                return 0
            })
            seriescreditsdata = seriescreditsdata.filter(elm =>{
                return elm.known_for_department ==="Acting"
            })
            
            seriesCrew = seriescreditsdata
            const similardata = await getSeriesSimilar(id)
            similardata.results.sort((a,b)=>{
                if(a.popularity > b.popularity ){
                    return -1
                }
                if(a.popularity <  b.popularity ){
                    return 1
                }
                return 0 
            })
            seriesSimilar = similardata.results
            

    }
    onMount(async ()=>{
        id = params.id
        await getdata(params.id)
            

    })
    $: if (params.id) {
        if (id !== undefined && id !== params.id) {
            getdata(params.id)
            window.scrollTo(0, 0);
        }

      
    }
    

    
  
</script>

        <Navbar/>
        <main class={'container mt-8'}>
        <div class="flex flex-col lg:flex-row mt-4 mb-4">
            <img class={'w-full max-w-md  lg:w-1/3  rounded self-center  '} src={imagePath + seriesDetail?.poster_path} alt="" />
            <div class="lg:ms-12 mt-8 lg:mt-0 w-full">
                <p class="text-5xl ">{seriesDetail.name}</p>
                 <div class="badge badge-outline badge-sm me-3">{seriesDetail.status}</div>
                 <div class="badge badge-outline badge-sm">Last live on  {new Date(seriesDetail.last_air_date).toLocaleDateString('tr')}</div>
                 <p class="mt-4 mb-4">{seriesDetail?.overview}</p>
                {#each seriesDetailGenres as elm (elm.id)}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a  href=""><div class="badge badge-neutral me-2">{elm.name}</div></a>

                {/each}
                
                <br />
                <div class="stats stats-vertical lg:stats-horizontal    shadow mt-8  w-full">

                    <div class="stat place-items-center mx-auto ">
                        <div class="stat-title">Number Of Seasons</div>
                        {#if loading}
                        <p>Loading</p>
                        {:else}
                        <div class="stat-value">{seriesDetail.number_of_seasons}</div>
                        {/if}
                        
                    </div>
                    <div class="stat place-items-center mx-auto">
                        <div class="stat-title">Number Of Episodes</div>
                        {#if loading}
                        <p>Loading</p>
                            {:else}
                            <div class="stat-value">{seriesDetail.number_of_episodes}</div>
                        {/if}
                        
                    </div>
                    

                  

                  

                </div>
            </div>
        </div>
        <SwiperPart head={"Actors"} movies={seriesCrew} /> 
        <SwiperPart head={"Similar Series"} movies={seriesSimilar}/> 

    </main>
    <Footer/>