import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { register } from 'swiper/element/bundle';
register()


import "swiper/css";
import { A } from "@solidjs/router";
import { For, createEffect } from "solid-js";
export const SwiperPerView = ({ movies,image}) => {


const controlTypeofData = (data)=>{
  if(data.poster_path){
    if (data.first_air_date) {
      return `series/${data.id}`
    }
    else{
      return `movie/${data.id}`
    }
  }else {
    return `actor/${data.id}`

  }
}

  return (
    <>
      <swiper-container
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        class="container mx-auto"
        space-between={24}
        slides-per-view={5}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination="true" 
      >
        <For each={movies()}>
          {(movie)=>(
            <swiper-slide key={movie.id} className="h-full">
            <A href={`movie/${movie.id}`}>
              <div className="card w-56 bg-base-100  shadow-xl">
                <figure>
                  <img
                    className="object-contain w-[100%] h-auto"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.profile_path}`}
                    alt="{movie.title}"
                  />
                </figure>
                <div className="card-body h-full">
                  <h2 className="card-title">{movie.title||movie.name}</h2>
                </div>
              </div>
            </A>
          </swiper-slide>
          )}
          </For>
      </swiper-container>
    </>
  );
};
