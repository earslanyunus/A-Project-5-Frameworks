<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { getMovieCredits, getMovieDetails, getSimilarMovies } from '../utils/tmdb';
    import SwiperPart from '../components/SwiperPart.svelte';
    import Navbar from '../components/common/Navbar.svelte';
    import Footer from '../components/common/Footer.svelte';
    import Netprice from '../components/Netprice.svelte';
  
    const imagePath = 'https://image.tmdb.org/t/p/original';
    let loading = true;
    let movieDetail = [];
    let detailgenres = []
    let movieCrew = [];
    let moviesimilar = [];
    const id = location.pathname.split('/')[location.pathname.split('/').length-1]
    onMount( async () => {
      const moviedata = await getMovieDetails(id)
      movieDetail =  moviedata
      detailgenres = moviedata.genres
      loading = false;

     
        
 
  
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
    });
  
    
  </script>
  <Navbar/>
  <main class="container">
    <div class="flex mt-4 mb-4">
      <img class="w-1/5 rounded" src="{imagePath + movieDetail?.poster_path}" alt="" />
      <div class="ms-12">
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
        <div class="stats shadow mt-8">
          <div class="stat place-items-center ">
            <div class="stat-title">Budget</div>
            {#if loading}
              <p>Loading</p>
            {:else}
              <div class="stat-value">${new Intl.NumberFormat().format(movieDetail.budget)}</div>
            {/if}
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Revenue</div>
            {#if loading}
              <p>Loading</p>
            {:else}
              <div class="stat-value">${new Intl.NumberFormat().format(movieDetail.revenue)}</div>
            {/if}
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Total</div>
            {#if loading}
              <p>Loading</p>
            {:else}
              <div class="stat-value"><Netprice revenue={movieDetail.revenue} budget={movieDetail.budget}/></div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  
    <SwiperPart head="Actors" movies="{movieCrew}" />
    <SwiperPart head="Similar Movies" movies="{moviesimilar}" />
  </main>
  <Footer/>  
