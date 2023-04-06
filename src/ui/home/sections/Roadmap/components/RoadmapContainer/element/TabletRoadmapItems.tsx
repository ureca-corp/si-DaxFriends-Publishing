import { css } from "@emotion/react";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";
import { SlideProps } from "@/ui/home/common/type/slide.type";
import "swiper/css";
import { FreeMode, Mousewheel } from "swiper";
import { SwiperSlide } from "swiper/react";
import { RoadmapItemModels } from "../../../models/roadmap.type";
import { RoadmapBox } from "./components/RoadmapBox";

export const TabletRoadmapItems = ({ fullpageSwiper }: SlideProps) => {
  const models = RoadmapItemModels;
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <CustomSwiper
          mousewheel
          slidesPerView={2.3}
          direction={"vertical"}
          freeMode={true}
          modules={[Mousewheel, FreeMode]}
          spaceBetween={260}
          css={css`
            position: relative;
            height: 100%;
          `}
          onReachEnd={() => {
            fullpageSwiper?.mousewheel.enable();
          }}
          onReachBeginning={() => {
            fullpageSwiper?.mousewheel.enable();
          }}
        >
          <SwiperSlide></SwiperSlide>
          {models.map((it, _) => (
            <SwiperSlide key={_}>
              <RoadmapBox title={it.title} descList={it.descList} />
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
        </CustomSwiper>
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
    padding-bottom: 13.02vw;
    z-index: 2;
  `,
};
