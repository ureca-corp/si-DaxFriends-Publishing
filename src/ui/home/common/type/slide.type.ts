import Swiper from "swiper";

export interface SlideProps {
  fullpageSwiper: Swiper | undefined;
  setSwiper: (s: Swiper) => void;
}
