import { useCallback, useState } from "react";
import SwiperCore, { Swiper } from "swiper";
import { CardModels } from "../../models/card.models";

export const UseSwiperButton = () => {
  const models = CardModels;

  const [swiper, setSwiper] = useState<Swiper | undefined>();
  const [realIndex, setRealIndex] = useState<number>(1);

  const handleSetSwiper = (swiper: SwiperCore) => {
    setSwiper(swiper);
  };

  const handleRealIndexChange = useCallback((index: number) => {
    setRealIndex(index);
  }, []);

  const onSlideNext = () => {
    swiper?.slideNext();
  };

  const onSlidePrev = () => {
    swiper?.slidePrev();
  };

  return {
    models,
    handleSetSwiper,
    buttonState: {
      onPrev: onSlidePrev,
      onNext: onSlideNext,
    },
    slideState: {
      value: realIndex,
      onChange: handleRealIndexChange,
    },
  };
};
