import { Pagination } from "swiper/modules";
import { register } from 'swiper/element/bundle';
register()


import "swiper/css";
import { A } from "@solidjs/router";
import { For, createEffect } from "solid-js";
export const SwiperPerView = ({ movies,image}) => {


const controlTypeofData = (data)=>{
  if(data.poster_path){
    if (data.first_air_date) {
      return `/detail/tv/${data.id}`
    }
    else{
      return `/detail/movie/${data.id}`
    }
  }else {
    return `/detail/person/${data.id}`

  }
}

  return (
    <>
      <swiper-container
        modules={[Pagination]}
        class="container mx-auto "
        space-between={24}
        slides-per-view={'auto'}
      >
        {movies.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
        {movies()&& (
        <For each={movies()}>
          {(movie)=>(
            <swiper-slide key={movie.id} className="max-w-[200px] pb-20">
            <A href={controlTypeofData(movie)}>
              <div className="card  bg-base-100 w-full   shadow-xl">
                <figure>
                  <img
                    className="object-contain w-[100%] h-auto"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.profile_path}`}
                    alt="{movie.title}"
                  />
                </figure>
                <div className="card-body h-full">
                  <p className="card-title whitespace-nowrap text-ellipsis overflow-hidden block">{movie.title||movie.name}</p>
                </div>
              </div>
            </A>
          </swiper-slide>
          )}
          </For>
          )}
      </swiper-container>
    </>
  );
};
