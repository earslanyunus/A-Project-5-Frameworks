<script setup>
import { onMounted, ref } from 'vue';
import {getPopularMovies,getPopularPeople,getPopularSeries} from '../utils/tmdb'
import Swiperpart from '../components/swiperpart.vue';
const popularmovies = ref([])
const popularpeople = ref([])
const popularseries = ref([])
onMounted(async()=>{
    const popularmoviesdata = await  getPopularMovies()
    console.log(popularmoviesdata);
    popularmovies.value = popularmoviesdata
    const popularpeopledata = await getPopularPeople()
    popularpeople.value = popularpeopledata
    const popularseriesdata  = await getPopularSeries()
    popularseries.value = popularseriesdata
})
</script>
<template>
    <Swiperpart head="Popular Movies" :movies="popularmovies"/>
    <Swiperpart head="Popular Actors" :movies="popularpeople"/>
    <Swiperpart head="Popular Series" :movies="popularseries"/>
</template>