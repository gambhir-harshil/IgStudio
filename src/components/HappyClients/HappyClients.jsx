import { useRef } from "react";
import Button from "./Button";
import Carousel from "./Carousel";

export default function HappyClients() {
  const swiperRef = useRef();
  return (
    <div className="flex flex-col justify-around h-screen px-56 py-12">
      <div className="flex items-center justify-around">
        <h1 className="text-white text-5xl font-semibold max-w-[24rem] leading-snug">
          What says our happy Clients
        </h1>
        <div className="flex gap-6">
          <Button left swiperRef={swiperRef}>
            ←
          </Button>
          <Button swiperRef={swiperRef}>→</Button>
        </div>
      </div>
      <Carousel swiperRef={swiperRef} />
    </div>
  );
}
