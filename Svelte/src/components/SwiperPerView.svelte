<script>
  import { Pagination} from "swiper/modules";
  import { register } from 'swiper/element/bundle';
  import {link} from 'svelte-spa-router'

  import "swiper/css";
  register();

  export let movies = [];
  const controlTypeofData = (data) => {
    if (data.poster_path) {
      if (data.first_air_date) {
        return `#/detail/tv/${data.id}`;
      } else {
        return `#/detail/movie/${data.id}`;
      }
    } else {
      return `#/detail/person/${data.id}`;
    }
  };
</script>

<swiper-container
  pagination = 'true'
  class="container mx-auto pl-5"
  space-between='24'
  slides-per-view='auto'
>
{#each movies as movie}
  <swiper-slide class="max-w-[200px] pb-20">
    <a  href={controlTypeofData(movie)} >
      <div class="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            class="object-contain w-[100%] h-auto"
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.profile_path
            }`}
            alt={movie.title}
          />
        </figure>
        
        <div class="card-body h-full">
          <p class="card-title whitespace-nowrap text-ellipsis overflow-hidden block">{movie.title || movie.name}</p>
        </div>
      </div>
    </a>
  </swiper-slide>
{/each}
</swiper-container>

