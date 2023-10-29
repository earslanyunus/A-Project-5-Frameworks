<script setup>


import { useRoute } from "vue-router";
import SwiperPart from "../components/SwiperPart.vue";
import { getSeriesCredits, getSeriesDetails, getSeriesSimilar } from "../utils/tmdb.js";
import { onMounted, ref, watch } from "vue";

const imagePath = 'https://image.tmdb.org/t/p/original'


    const id = location.pathname.split('/')[location.pathname.split('/').length-1]
    const seriesDetail = ref([])
    const seriesDetailGenres = ref([])
    const seriesCrew = ref([])
    const seriesSimilar = ref([])
    const route = useRoute()
    watch(route,async()=>{
        const seriesdetailsdata = await getSeriesDetails(route.params.id)
        
        seriesDetail.value = seriesdetailsdata
        seriesDetailGenres.value = seriesdetailsdata.genres

        let seriescreditsdata = await getSeriesCredits(route.params.id)
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
            
            seriesCrew.value = seriescreditsdata
            const similardata = await getSeriesSimilar(route.params.id)
            similardata.results.sort((a,b)=>{
                if(a.popularity > b.popularity ){
                    return -1
                }
                if(a.popularity <  b.popularity ){
                    return 1
                }
                return 0 
            })
            seriesSimilar.value = similardata.results
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    })
    onMounted(async ()=>{
        const seriesdetailsdata = await getSeriesDetails(id)
        
        seriesDetail.value = seriesdetailsdata
        seriesDetailGenres.value = seriesdetailsdata.genres

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
            
            seriesCrew.value = seriescreditsdata
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
            seriesSimilar.value = similardata.results
            

    })
  
</script>

        <template>
        <main class='container'>
        <div class="flex mt-4 mb-4">
            <img class='w-1/5 rounded ' :src="imagePath + seriesDetail?.poster_path" alt="" />
            <div class="ms-12">
                <p class="text-5xl ">{{seriesDetail?.name}}</p>
                 <div class="badge badge-outline badge-sm me-3">{{seriesDetail?.status}}</div>
                 <div class="badge badge-outline badge-sm">Last live on  {{new Date(seriesDetail?.last_air_date).toLocaleDateString('tr')}}</div>
                 <p class="mt-4 mb-4">{{seriesDetail?.overview}}</p>
                
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a  href="" v-for="elm in seriesDetailGenres"><div class="badge badge-neutral me-2">{{elm?.name}}</div></a>

               
                
                <br />
                <div class="stats shadow mt-8">

                    <div class="stat place-items-center ">
                        <div class="stat-title">Number Of Seasons</div>
                     
                        <div class="stat-value">{{seriesDetail?.number_of_seasons}}</div>
                        
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Number Of Episodes</div>
                            <div class="stat-value">{{seriesDetail?.number_of_episodes}}</div>
                        
                    </div>
                    

                  

                  

                </div>
            </div>
        </div>
        <SwiperPart head="Actors" :movies='seriesCrew' /> 
        <SwiperPart head="Similar Series" :movies='seriesSimilar'/> 

    </main>
</template>