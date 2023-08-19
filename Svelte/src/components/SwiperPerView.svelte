<script>
  import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
  import { register } from 'swiper/element/bundle';
  import { Link } from "svelte-routing";
  import "swiper/css";
  register();

  export let movies = [];
  const controlTypeofData = (data) => {
    if (data.poster_path) {
      if (data.first_air_date) {
        return `series/${data.id}`;
      } else {
        return `movie/${data.id}`;
      }
    } else {
      return `actor/${data.id}`;
    }
  };
</script>

<swiper-container
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  class="container mx-auto"
  space-between={24}
  slides-per-view={5}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log("slide change")}
  pagination="true"
>
{#each movies as movie}
  <swiper-slide class="h-full">
    <Link to={controlTypeofData(movie)}>
      <div class="card w-56 bg-base-100 shadow-xl">
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
          <h2 class="card-title">{movie.title || movie.name}</h2>
        </div>
      </div>
    </Link>
  </swiper-slide>
{/each}
</swiper-container>

