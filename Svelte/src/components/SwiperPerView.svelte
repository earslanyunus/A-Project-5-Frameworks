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
        return `detail/series/${data.id}`;
      } else {
        return `detail/movie/${data.id}`;
      }
    } else {
      return `detail/person/${data.id}`;
    }
  };
</script>

<swiper-container
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  class="container mx-auto"
  space-between={48}
  slides-per-view={5}
>
{#each movies as movie}
  <swiper-slide class="h-full pb-4">
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
          <p class="card-title whitespace-nowrap text-ellipsis overflow-hidden block">{movie.title || movie.name}</p>
        </div>
      </div>
    </Link>
  </swiper-slide>
{/each}
</swiper-container>

