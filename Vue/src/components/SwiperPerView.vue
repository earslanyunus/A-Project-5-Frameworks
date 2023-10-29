<script setup>
  import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
  import { register } from 'swiper/element/bundle';
  import "swiper/css";
import { ref, watchEffect } from "vue";
import { RouterLink } from "vue-router";
  register();
  const props = defineProps(['movies'])
  
  const controlTypeofData = (data) => {
    if (data.poster_path) {
      if (data.first_air_date) {
        return `/detail/tv/${data.id}`;
      } else {
        return `/detail/movie/${data.id}`;
      }
    } else {
      return `/detail/person/${data.id}`;
    }
  };
</script>
<template>
<swiper-container
  class="container mx-auto"
  space-between='48'
  slides-per-view='5'
>

  <swiper-slide class="h-full pb-4" v-for="movie in movies">
    <RouterLink :to='controlTypeofData(movie)'>
      <div class="card w-56 bg-base-100 shadow-xl">
        <figure>
          <img
            class="object-contain w-[100%] h-auto"
            :src='`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.profile_path}`'
          />
        </figure>
        
        <div class="card-body h-full">
          <p class="card-title whitespace-nowrap text-ellipsis overflow-hidden block">{{movie.title || movie.name}}</p>
        </div>
      </div>
    </RouterLink>
  </swiper-slide>
</swiper-container>

</template>