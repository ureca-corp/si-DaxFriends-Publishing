import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RoadmapBox } from "../components/RoadmapBox";
import { UseSwiperButton } from "./UseSwiperButton";
import { MbStorySwiperButtonContainer } from "@/ui/home/sections/Story/components/SwiperSection/SwiperButtonContainer/element";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";
import { MediaQueries } from "@/common/theme/screen";

export const MobileRoadmapItems = () => {
  const { models, slideState, handleSetSwiper, buttonState } =
    UseSwiperButton();
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <CustomSwiper
          loop
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(e) => {
            slideState.onChange(e.realIndex + 1);
          }}
          onSwiper={(swiper) => {
            handleSetSwiper(swiper);
          }}
        >
          {models.map((it, index) => (
            <SwiperSlide key={index}>
              <RoadmapBox title={it.title} descList={it.descList} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
      <MbStorySwiperButtonContainer
        onNext={buttonState.onNext}
        onPrev={buttonState.onPrev}
        slideIndex={slideState.value}
        pageText={"Phase"}
      />
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    @media ${MediaQueries.sm} {
      flex-direction: column;
      align-items: center;
    }
  `,

  inner: css`
    width: 100%;
    aspect-ratio: 1/0.8;
  `,
};
