<script setup>
    import { onMounted, ref, watch } from "vue";
import { getSearchResult } from "../utils/tmdb";
import { RouterLink, useRoute } from "vue-router";

    let queryParams = new URLSearchParams(window.location.search);
    let category = queryParams.get('category');
    let searchvalue = queryParams.get('val');
    const searchresult =ref([])
    const route = useRoute()



   watch(route,async()=>{
     queryParams = new URLSearchParams(window.location.search);
     category = queryParams.get('category');
     searchvalue = queryParams.get('val');
    const searchresultdata = await getSearchResult(searchvalue,category)
    searchresult.value = searchresultdata.results
   })
   onMounted(async()=>{
    const searchresultdata = await getSearchResult(searchvalue,category)
    searchresult.value = searchresultdata.results
   })
</script>

<template>

                            <div class="flex container gap-12 flex-wrap justify-center mt-12 mb-12">
                    <RouterLink v-for="card in searchresult" :to='`/detail/${category}/${card.id}`' :key='card.id' class="flex">
                        <div class="card h-100 w-56 bg-base-100  shadow-xl">
                            <figure style="height:100%">
                                <img
                                    class="object-cover "
                                    style="height:100%"
                                    :src="`https://image.tmdb.org/t/p/original/${card.poster_path || card.profile_path}`"
                                    :alt="card.title"
                                />
                            </figure>
                            <div class="card-body ">
                                <p class="card-title whitespace-nowrap text-ellipsis overflow-hidden inline-block">{{card.title || card.name}}</p>
                            </div>
                        </div>
                    </RouterLink>
            
                        
                    </div>

                </template>    


