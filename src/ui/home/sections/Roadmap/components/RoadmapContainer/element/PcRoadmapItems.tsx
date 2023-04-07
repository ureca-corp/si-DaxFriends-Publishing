import { css } from "@emotion/react";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";
import "swiper/css";
import { SlideProps } from "@/ui/home/common/type/slide.type";
import { RoadmapItemModels } from "../../../models/roadmap.type";
import { RoadmapBox } from "./components/RoadmapBox";
import { FreeMode, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const PcRoadmapItems = ({ fullpageSwiper }: SlideProps) => {
  const models = RoadmapItemModels;
  return (
    <div css={st.root}>
      <Swiper
        mousewheel
        slidesPerView={2.3}
        direction={"vertical"}
        modules={[Mousewheel, FreeMode]}
        slideToClickedSlide
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: false,
        }}
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
          padding-right: 5.2vw !important;

          & > .swiper-wrapper {
            display: flex;
            align-items: end;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          }

          & > .swiper-wrapper .swiper-slide {
            width: unset !important;
          }

          & > .swiper-scrollbar .swiper-scrollbar-drag {
            height: 100%;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            background: rgba(0, 0, 0, 0.4);
          }
        `}
        onReachEnd={() => {
          if (fullpageSwiper != undefined) {
            fullpageSwiper.allowSlidePrev = false;
            fullpageSwiper.allowSlideNext = true;
            setTimeout(() => {
              fullpageSwiper.mousewheel.enable();
              fullpageSwiper.allowTouchMove = true;
            }, 1000);
          }
        }}
        onReachBeginning={() => {
          if (fullpageSwiper != undefined) {
            fullpageSwiper.allowSlideNext = false;
            fullpageSwiper.allowSlidePrev = true;
            setTimeout(() => {
              fullpageSwiper.mousewheel.enable();
              fullpageSwiper.allowTouchMove = true;
            }, 1500);
          }
        }}
      >
        <div css={st.inner}>
          {models.map((it, _) => (
            <SwiperSlide key={_}>
              <RoadmapBox title={it.title} descList={it.descList} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow-y: scroll;
    display: flex;
    justify-content: end;
    z-index: 2;
    padding-top: 100px;
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  inner: css`
    width: 100%;
  `,
};
