import React, { Children, FC, useEffect, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  children: React.ReactNode;
  slideTo: number;
  autoHeight?: boolean;
  className?: string;
}

const Slider: FC<SliderProps> = ({
  children,
  //slideTo,
  autoHeight = true,
  className,
}) => {
  //const swiperRef = useRef<SwiperClass>();

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideTo(slideTo);
  //   }
  // }, [slideTo]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      //noSwiping
      // allowTouchMove={false}
      autoHeight={autoHeight}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // onSwiper={(swiper) => {
      //   swiperRef.current = swiper;
      // }}
      //onSlideChange={() => console.log("slide change")}
      className={className}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={`slide-${index}`}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
