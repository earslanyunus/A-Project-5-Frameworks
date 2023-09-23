import React, { useEffect } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import { Link } from "react-router-dom";

export const SwiperPerView = ({ cards,image,type}) => {
  
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
        spaceBetween={48}
        slidesPerView={'5'}
        
        
      >
        {cards?.map((card) => {
          return (
            <SwiperSlide  key={card.id} className="h-full pb-4 ">
              <Link to={`/detail/${type}/${card.id}`} onClick={scrollTo(0,0)}>
                <div className="card w-56 bg-base-100  shadow-xl">
                  <figure>
                    <img 
                      className="object-contain w-[100%] h-auto"
                      src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.profile_path }`}
                      alt="{movie.title}"
                    />
                  </figure>
                  <div className="card-body h-full">
                    <p className="card-title whitespace-nowrap text-ellipsis overflow-hidden block">{card.title||card.name}</p>
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
