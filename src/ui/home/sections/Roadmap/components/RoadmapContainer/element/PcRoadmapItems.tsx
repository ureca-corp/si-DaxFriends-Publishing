import { css } from "@emotion/react";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";
import "swiper/css";
import { SlideProps } from "@/ui/home/common/type/slide.type";
import { RoadmapItemModels } from "../../../models/roadmap.type";
import { RoadmapBox } from "./components/RoadmapBox";
import { Mousewheel } from "swiper";
import { SwiperSlide } from "swiper/react";

export const PcRoadmapItems = ({ fullpageSwiper }: SlideProps) => {
  const models = RoadmapItemModels;
  return (
    <div css={st.root}>
      <CustomSwiper
        mousewheel
        slidesPerView={2.3}
        direction={"vertical"}
        modules={[Mousewheel]}
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
