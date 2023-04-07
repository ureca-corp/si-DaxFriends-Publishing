import { css } from "@emotion/react";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";
import "swiper/css";
import { SlideProps } from "@/ui/home/common/type/slide.type";
import { RoadmapItemModels } from "../../../models/roadmap.type";
import { RoadmapBox } from "./components/RoadmapBox";
import { FreeMode, Mousewheel } from "swiper";
import { SwiperSlide } from "swiper/react";

export const PcRoadmapItems = ({ fullpageSwiper }: SlideProps) => {
  const models = RoadmapItemModels;
  return (
    <div css={st.root}>
      <CustomSwiper
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
          height: 100%;

          & > .swiper-wrapper {
            display: flex;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          }

          & > .swiper-scrollbar .swiper-scrollbar-drag {
            height: 100%;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            background: rgba(0, 0, 0, 0.4);
          }
        `}
        onReachEnd={() => {
          if (fullpageSwiper != undefined) {
            setTimeout(() => {
              fullpageSwiper.mousewheel.enable();
              fullpageSwiper.allowTouchMove = true;
            }, 1000);
          }
        }}
        onReachBeginning={() => {
          if (fullpageSwiper != undefined) {
            setTimeout(() => {
              fullpageSwiper.mousewheel.enable();
              fullpageSwiper.allowTouchMove = true;
            }, 1500);
          }
        }}
      >
        {models.map((it, _) => (
          <SwiperSlide key={_}>
            <RoadmapBox title={it.title} descList={it.descList} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

const st = {
  root: css`
    width: 51.85vh;
    height: 100%;
    position: absolute;
    top: 0;
    right: 5.2vw;
    z-index: 2;
    padding: 100px 0;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
