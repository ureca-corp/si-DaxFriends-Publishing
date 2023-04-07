import { css } from "@emotion/react";
import Swiper, { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  Gallery,
  Utility,
  Partners,
  Team,
  Faq,
  Main,
  Story,
  Roadmap,
  Footer,
} from "../sections";
import { Stack } from "@mui/material";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";

export const HomeView = () => {
  const { isSmall, isTablet } = useCustomMediaQuery();
  const [swiper, setSwiper] = useState<Swiper | undefined>();
  const [innerSwiper, setInnerSwiper] = useState<Swiper | undefined>();
  const handleSetInnerSwiper = (s: Swiper) => {
    setInnerSwiper(s);
  };
  return (
    <Stack css={st.root}>
      <CustomSwiper
        className="main"
        mousewheel={{ sensitivity: 5.5 }}
        direction={"vertical"}
        modules={[Mousewheel, Pagination]}
        pagination={{
          clickable: true,
        }}
        css={css`
          display: flex;
          flex-direcion: column;
          position: relative;
          height: 100vh;

          & > .swiper-container .swiper-wrapper {
            transition-duration: 3s !important;
            transition-timing-function: ease-out;
          }

          & > .swiper-wrapper {
            display: flex;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          }

          & > .swiper-scrollbar .swiper-scrollbar-drag {
            height: 100%;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            background: rgba(0, 0, 0, 0.4);
          }

          & > .swiper-pagination {
            align-items: center;
            display: ${isTablet ? "none" : "flex"};
            flex-direction: column;
            gap: 20px;
            margin-right: 28px;

            @media ${MediaQueries.lg} {
              gap: 16px;
            }
            @media ${MediaQueries.sm} {
              gap: 12px;
            }
          }
          & > .swiper-pagination .swiper-pagination-bullet {
            background: white;
            opacity: 1;
            width: 20px;
            height: 20px;
            @media ${MediaQueries.lg} {
              width: 16px;
              height: 16px;
            }
            @media ${MediaQueries.sm} {
              width: 12px;
              height: 12px;
            }
          }
          & > .swiper-pagination .swiper-pagination-bullet-active {
            background: #9000ff;
            width: 30px;
            height: 30px;
            @media ${MediaQueries.lg} {
              width: 24px;
              height: 24px;
            }
            @media ${MediaQueries.sm} {
              width: 20px;
              height: 20px;
            }
          }
        `}
        onSlideChange={(e) => {
          e.allowSlidePrev = true;
          e.allowSlideNext = true;
          if (!isSmall && e.activeIndex === 2) {
            if (innerSwiper?.isBeginning || innerSwiper?.isEnd) {
              e.mousewheel.enable();
              e.allowTouchMove = true;

              if (innerSwiper?.isBeginning) {
                e.allowSlideNext = false;
                setTimeout(() => {
                  e.allowSlidePrev = true;
                }, 1000);
              }
              if (innerSwiper?.isEnd) {
                e.allowSlidePrev = false;
                setTimeout(() => {
                  e.allowSlideNext = true;
                }, 1000);
              }
              e.mousewheel.disable();
              e.allowTouchMove = false;
            } else {
              e.mousewheel.disable();
              e.allowTouchMove = false;
              e.allowSlidePrev = false;
              e.allowSlideNext = false;
            }
          } else {
            setTimeout(() => {
              e.mousewheel.enable();
              e.allowTouchMove = true;
              e.allowSlidePrev = true;
              e.allowSlideNext = true;
            }, 1000);
          }
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        <SwiperSlide>
          <Main />
        </SwiperSlide>
        <SwiperSlide>
          <Story />
        </SwiperSlide>
        <SwiperSlide>
          <Roadmap fullpageSwiper={swiper} setSwiper={handleSetInnerSwiper} />
        </SwiperSlide>
        <SwiperSlide>
          <Utility />
        </SwiperSlide>
        <SwiperSlide>
          <Gallery />
        </SwiperSlide>
        <SwiperSlide>
          <Team />
        </SwiperSlide>
        <SwiperSlide>
          <Partners />
        </SwiperSlide>
        <SwiperSlide>
          <Faq />
        </SwiperSlide>
      </CustomSwiper>
    </Stack>
  );
};

const st = {
  root: css`
    width: 100%;
    position: relative;
  `,
};
