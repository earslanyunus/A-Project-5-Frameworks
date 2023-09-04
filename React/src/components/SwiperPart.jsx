import {SwiperPerView} from './Swiper-per-view'

export const SwiperPart = ({head,cards,type}) => {
  return (
    <>
      <p className="container mx-auto text-3xl font-bold mb-4">
        {head}
      </p>
      <SwiperPerView cards={cards} type={type}/>
    </>
  );
};
