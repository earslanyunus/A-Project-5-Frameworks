<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { getMovieCredits, getMovieDetails, getSimilarMovies } from '../utils/tmdb';
    import SwiperPart from '../components/SwiperPart.svelte';
    import Navbar from '../components/common/Navbar.svelte';
    import Footer from '../components/common/Footer.svelte';
    import Netprice from '../components/Netprice.svelte';


    const imagePath = 'https://image.tmdb.org/t/p/original';
    let movieDetail = [];
    let detailgenres = []
    let movieCrew = [];
    let moviesimilar = [];
    let id
    export let params = {}
 
    const getdata = async(id)=>{
      const moviedata = await getMovieDetails(id)
      movieDetail =  moviedata
      detailgenres = moviedata.genres

     
        
 
  
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
      movieCrew = cast;

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
      moviesimilar = elm2.results;
    }

    onMount( async () => {
      id = params.id
      await getdata(params.id)
      
    });
    $: if(params.id){
      if (id !==undefined &&id !== params.id) {
        getdata(params.id)
      window.scrollTo(0, 0);
      }
  
    }

  
    
  </script>
  <Navbar/>
  <main class="container mt-8">
    <div class="flex flex-col lg:flex-row mt-4 mb-4">
      <img class="w-full max-w-md  lg:w-1/3  rounded self-center" src="{imagePath + movieDetail?.poster_path}" alt="" />
      <div class="lg:ms-12 mt-8 lg:mt-0 w-full">
        <p class="text-5xl ">{movieDetail.title}</p>
        <div class="badge badge-outline badge-sm">{movieDetail.status} {new Date(movieDetail.release_date).toLocaleDateString('tr')}</div>
        <p class="mt-4 mb-4">{movieDetail?.overview}</p>
        {#each detailgenres as {name,id} }
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>
            <div class="badge badge-neutral me-2">{name}</div>
          </a>
        {/each}
        <br />
        <div class="stats stats-vertical lg:stats-horizontal    shadow mt-8  w-full ">
          <div class="stat place-items-center mx-auto ">
            <div class="stat-title">Budget</div>
         
             
        
              <div class="stat-value">${new Intl.NumberFormat('en-GB',{notation:'compact',compactDisplay:'short'}).format(movieDetail.budget)}</div>
           
          </div>
          <div class="stat place-items-center mx-auto">
            <div class="stat-title">Revenue</div>
          
              <div class="stat-value">${new Intl.NumberFormat('en-GB',{notation:'compact',compactDisplay:'short'}).format(movieDetail.revenue)}</div>
          
          </div>
          <div class="stat place-items-center mx-auto">
            <div class="stat-title">Total</div>
        
              <div class="stat-value"><Netprice revenue={movieDetail.revenue} budget={movieDetail.budget}/></div>
           
          </div>
        </div>
      </div>
    </div>
  
    <SwiperPart head="Actors" movies="{movieCrew}" />
    <SwiperPart head="Similar Movies" movies="{moviesimilar}" />
  </main>
  <Footer/>  
