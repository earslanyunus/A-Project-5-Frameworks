<script setup>
import { onMounted, ref } from 'vue';
import {getPopularMovies,getPopularPeople,getPopularSeries} from '../utils/tmdb'
import Swiperpart from '../components/SwiperPart.vue';
const popularmovies = ref([])
const popularpeople = ref([])
const popularseries = ref([])
onMounted(async()=>{
    const popularmoviesdata = await  getPopularMovies()
    popularmovies.value = popularmoviesdata
    const popularpeopledata = await getPopularPeople()
    popularpeople.value = popularpeopledata
    const popularseriesdata  = await getPopularSeries()
    popularseries.value = popularseriesdata
})
</script>
<template>
    <div class="mt-8">
    <Swiperpart head="Popular Movies" :movies="popularmovies"/>
    <Swiperpart head="Popular Actors" :movies="popularpeople"/>
    <Swiperpart head="Popular Series" :movies="popularseries"/>
    </div>
</template>