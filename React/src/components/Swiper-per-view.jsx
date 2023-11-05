import React, { useEffect } from "react";

import { Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import 'swiper/css/pagination';

import { Link } from "react-router-dom";

export const SwiperPerView = ({ cards,image,type}) => {
  
const controlTypeofData = (data)=>{
  if(data?.poster_path){
    if (data?.first_air_date) {
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
      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        pagination={{ clickable: true }}
        slidesPerView={'auto'}
        spaceBetween={24}
        className="container mx-auto pb-20"

        
      >
        {cards?.map((card) => {
          return (
            <SwiperSlide  key={card.id} className="max-w-[200px]">
              <Link to={controlTypeofData(card)} onClick={scrollTo(0,0)}>
                <div className="card  bg-base-100 w-full  shadow-xl">
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
