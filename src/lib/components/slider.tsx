import React, { Children, FC, useEffect, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SliderProps {
  children: React.ReactNode;
  slideTo: number;
  autoHeight?: boolean;
  className?: string;
  isShowNavigation?: boolean;
  isShowPagination?: boolean;
  isAutoPlay?: boolean;
  isAllowManualSlide?: boolean;
  slidesPerView?: number;
  onPageChange?: (pageIndex: number) => void;
}

const Slider: FC<SliderProps> = ({
  children,
  slideTo,
  autoHeight = true,
  className,
  isShowNavigation = false,
  isShowPagination = false,
  isAutoPlay = true,
  isAllowManualSlide = true,
  slidesPerView = 4,
  onPageChange,
}) => {
  const swiperRef = useRef<SwiperClass>();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(slideTo);
    }
  }, [slideTo]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      pagination={
        isShowPagination
          ? {
              dynamicBullets: true,
              clickable: true,
            }
          : false
      }
      noSwiping={!isAllowManualSlide}
      allowTouchMove={isAllowManualSlide}
      autoHeight={autoHeight}
      autoplay={
        isAutoPlay
          ? {
              delay: 2500,
              disableOnInteraction: false,
            }
          : isAutoPlay
      }
      navigation={isShowNavigation}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={() => onPageChange?.(swiperRef.current?.activeIndex)}
      className={className}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={`slide-${index}`}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
