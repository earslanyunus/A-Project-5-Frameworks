import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";

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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="container mx-auto"
        spaceBetween={24}
        slidesPerView={"5"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {movies?.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className="h-full">
              <Link to={`movie/${movie.id}`}>
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
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
