<script setup>

    import { onMounted, ref, watch } from 'vue';
import Swiperpart from '../components/swiperpart.vue';
    import {getMovieDetails,getMovieCredits,getSimilarMovies} from '../utils/tmdb'
import { useRoute } from 'vue-router';
    
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
        return Intl.NumberFormat().format(total)
        

    }
    const unformatPrice = (budget,revenue)=> {
      let cleanString = netPrice(budget,revenue).replace(/[\s,]+/g, '');
      return Number(cleanString);
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
  <main class="container">
    <div class="flex mt-4 mb-4">
      <img class="w-1/5 rounded" :src="imagePath + movieDetail?.poster_path" alt="" />
      <div class="ms-12">
        <p class="text-5xl ">{{movieDetail.title}}</p>
        <div class="badge badge-outline badge-sm">{{movieDetail.status}} {{new Date(movieDetail.release_date).toLocaleDateString('tr')}}</div>
        <p class="mt-4 mb-4">{{movieDetail?.overview}}</p>
        
          <a v-for="{name} in detailgenres">
            <div class="badge badge-neutral me-2">{{name}}</div>
          </a>
        
        <br />
        <div class="stats shadow mt-8">
          <div class="stat place-items-center ">
            <div class="stat-title">Budget</div>
        
              <div class="stat-value">{{new Intl.NumberFormat().format(movieDetail.budget)}}</div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Revenue</div>
            
              <div class="stat-value">{{new Intl.NumberFormat().format(movieDetail.revenue)}}</div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Total</div>
           
              <div class="stat-value"><div class="stat-value " :class="unformatPrice(movieDetail.budget,movieDetail.revenue) > 0 ? 'text-green-300':'text-red-500'">{{ netPrice(movieDetail.budget,movieDetail.revenue) }}</div></div>
          </div>
        </div>
      </div>
    </div>
  
    <Swiperpart head="Actors" :movies="movieCrew" />
    <Swiperpart head="Similar Movies" :movies="moviesimilar" />
  </main>
</template>