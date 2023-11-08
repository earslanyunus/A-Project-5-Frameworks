<script setup>

    import { onMounted, ref, watch } from 'vue';
    import {getMovieDetails,getMovieCredits,getSimilarMovies} from '../utils/tmdb'
import { useRoute } from 'vue-router';
import Swiperpart from "../components/SwiperPart.vue";

    
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const movieDetail = ref([]);
    const detailgenres = ref([])
    const movieCrew = ref([]);
    const moviesimilar = ref([]);
    const route = useRoute()
    const id = location.pathname.split('/')[location.pathname.split('/').length-1]
    watch(route,async()=>{
      const moviedata = await getMovieDetails(route.params.id)
      console.log(moviedata);
      movieDetail.value =  moviedata
      detailgenres.value = moviedata.genres

     
        
 
  
      const elm1 = await getMovieCredits(route.params.id);
      const cast = elm1.cast.reduce((accumulator, current) => {
        let exists = accumulator.find(item => {
          return item.id === current.id;
        });
        if (!exists) {
          accumulator = accumulator.concat(current);
        }
        return accumulator;
      }, []);
      cast.sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      });
      movieCrew.value = cast;

      const elm2 = await getSimilarMovies(route.params.id);
      elm2.results.sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      });
      moviesimilar.value = elm2.results;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    })
    const netPrice= (budget,revenue)=>{
        const total = revenue-budget
        const formattedtotal =  Intl.NumberFormat('en-GB',{notation:'compact',compactDisplay:'short'}).format(total)
        return formattedtotal        

    }

    onMounted(async()=>{
      const moviedata = await getMovieDetails(id)
      movieDetail.value =  moviedata
      detailgenres.value = moviedata.genres

     
        
 
  
      const elm1 = await getMovieCredits(id);
      const cast = elm1.cast.reduce((accumulator, current) => {
        let exists = accumulator.find(item => {
          return item.id === current.id;
        });
        if (!exists) {
          accumulator = accumulator.concat(current);
        }
        return accumulator;
      }, []);
      cast.sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      });
      movieCrew.value = cast;

      const elm2 = await getSimilarMovies(id);
      elm2.results.sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      });
      moviesimilar.value = elm2.results;
    })
      
  
    
  </script>
  <template>
  <main class="container mt-8">
    <div class="flex flex-col lg:flex-row mt-4 mb-4">
      <img class="w-full max-w-md  lg:w-1/3  rounded self-center " :src="imagePath + movieDetail?.poster_path" alt="" />
      <div class="lg:ms-12 mt-8 lg:mt-0 w-full">
        <p class="text-5xl ">{{movieDetail.title}}</p>
        <div class="badge badge-outline badge-sm">{{movieDetail.status}} {{new Date(movieDetail.release_date).toLocaleDateString('tr')}}</div>
        <p class="mt-4 mb-4">{{movieDetail?.overview}}</p>
        
          <a v-for="{name} in detailgenres">
            <div class="badge badge-neutral me-2">{{name}}</div>
          </a>
        
        <br />
        <div class="stats stats-vertical lg:stats-horizontal    shadow mt-8  w-full ">
          <div class="stat place-items-center mx-auto ">
            <div class="stat-title">Budget</div>
        
              <div class="stat-value">{{new Intl.NumberFormat('en-GB',{notation:'compact',compactDisplay:'short'}).format(movieDetail.budget)}}</div>
          </div>
          <div class="stat place-items-center mx-auto">
            <div class="stat-title">Revenue</div>
            
              <div class="stat-value">{{new Intl.NumberFormat('en-GB',{notation:'compact',compactDisplay:'short'}).format(movieDetail.revenue)}}</div>
          </div>
          <div class="stat place-items-center mx-auto">
            <div class="stat-title">Total</div>
           
              <div class="stat-value"><div class="stat-value "  :class="(movieDetail.revenue-movieDetail.budget) > 0 ? 'text-green-300':'text-red-500'">{{ netPrice(movieDetail.budget,movieDetail.revenue) }}</div></div>
          </div>
        </div>
      </div>
    </div>
  
    <Swiperpart head="Actors" :movies="movieCrew" />
    <Swiperpart head="Similar Movies" :movies="moviesimilar" />
  </main>
</template>