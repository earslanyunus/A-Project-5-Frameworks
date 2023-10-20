<script>
    import { getPopularMovies,getPopularPeople,getPopularSeries } from "../utils/tmdb";
    import SwiperPart from "../components/SwiperPart.svelte";
    import Navbar from "../components/common/Navbar.svelte";
    import Footer from "../components/common/Footer.svelte";
    let popularMovies 
    let popularPeoples 
    let popularSeries 
    getPopularMovies().then((data) => {
      popularMovies = data;
    });
    getPopularPeople().then((data) => {
      popularPeoples = data;
    });
    getPopularSeries().then(data=>{
      popularSeries = data
    })


</script>

<div class=" min-h-screen flex flex-col">
    <Navbar/>
    <!-- <Navbar /> -->
    <div class="flex flex-col mt-8">
        <SwiperPart head="Popular Movies" movies={popularMovies} />
        <SwiperPart head="Popular Actors" movies={popularPeoples} />
        <SwiperPart head="Popular Series" movies={popularSeries} />
    </div>
    </div>
    <Footer />




