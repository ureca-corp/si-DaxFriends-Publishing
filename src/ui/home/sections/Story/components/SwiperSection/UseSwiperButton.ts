import { useState } from "react";
import SwiperCore from "swiper";
import { CardModels } from "../../models/card.models";

export const UseSwiperButton = () => {
  const models = CardModels;
  const lastIndex = models.length;

  const [swiper, setSwiper] = useState<SwiperCore>();
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSetSwiper = (swiper: SwiperCore) => {
    setSwiper(swiper);
  };

  const handleActiveIndexChange = (index: number) => {
    setActiveIndex(index);
  };

  const onSlideNext = () => {
    swiper?.slideNext();
    setActiveIndex(activeIndex === lastIndex ? 1 : activeIndex + 1);
  };

  const onSlidePrev = () => {
    swiper?.slidePrev();
    setActiveIndex(activeIndex === 1 ? lastIndex : activeIndex - 1);
  };

  return {
    models,
    handleSetSwiper,
    buttonState: {
      onPrev: onSlidePrev,
      onNext: onSlideNext,
    },
    slideState: {
      value: swiper?.realIndex,
      onChange: handleActiveIndexChange,
    },
  };
};
