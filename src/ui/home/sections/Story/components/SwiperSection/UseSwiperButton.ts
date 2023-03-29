import { useState } from "react";
import SwiperCore from "swiper";

export const UseSwiperButton = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();

  const handleSetSwiper = (swiper: SwiperCore) => {
    setSwiper(swiper);
  };
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();

  const onSlideNext = () => {
    slideNext();
  };

  const onSlidePrev = () => {
    slidePrev();
  };
  return {
    handleSetSwiper,
    buttonState: {
      onPrev: onSlidePrev,
      onNext: onSlideNext,
    },
  };
};
