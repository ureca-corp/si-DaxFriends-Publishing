import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RoadmapBox } from "../components/RoadmapBox";
import { MbSwiperButtonContainer } from "./SwiperButtonContainer";
import { UseSwiperButton } from "./UseSwiperButton";

export const MobileRoadmapItems = () => {
  const { models, slideState, handleSetSwiper, buttonState } =
    UseSwiperButton();
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <Swiper
          loop
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            handleSetSwiper(swiper);
          }}
        >
          {models.map((it, index) => (
            <SwiperSlide key={index}>
              <RoadmapBox title={it.title} descList={it.descList} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MbSwiperButtonContainer
        onNext={buttonState.onNext}
        onPrev={buttonState.onPrev}
        slideIndex={slideState.value}
      />
    </div>
  );
};

const st = {
  root: css`
    position: absolute;
    width: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 24.87vh;
  `,

  inner: css`
    width: 77.22vw;
    aspect-ratio: 1/0.8;
  `,
};
