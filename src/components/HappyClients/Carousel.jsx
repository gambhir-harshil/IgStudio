import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ClientCard from "./ClientCard";

export default function Carousel({ swiperRef }) {
  return (
    <Swiper
      className="w-full"
      spaceBetween={36}
      slidesPerView={3}
      modules={{ Navigation }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {Array.from({ length: 12 }, (_, i) => (
        <SwiperSlide key={i}>
          <ClientCard idx={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
