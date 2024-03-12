import { FC, Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface BannerSliderProps {
  children: React.ReactNode;
}

const BannerSlider: FC<BannerSliderProps> = ({ children }) => {
  return (
    <div className="mt-main-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoHeight={true}
        autoplay={true}
        className="slider banner-slider"
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide key={`slide-${index}`}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
