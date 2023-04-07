import { css } from "@emotion/react";
import { SlideProps } from "@/ui/home/common/type/slide.type";
import "swiper/css";
import { FreeMode, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoadmapItemModels } from "../../../models/roadmap.type";
import { RoadmapBox } from "./components/RoadmapBox";

export const TabletRoadmapItems = ({ fullpageSwiper }: SlideProps) => {
  const models = RoadmapItemModels;
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <Swiper
          mousewheel
          slidesPerView={3}
          direction={"vertical"}
          slideToClickedSlide
          freeMode={true}
          modules={[Mousewheel, FreeMode]}
          spaceBetween={260}
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
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
  `,
  inner: css`
    width: 52.08vw;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2;
  `,
};
