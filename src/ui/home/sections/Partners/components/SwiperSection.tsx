import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Swiper, { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PartnerModels } from "../models/partner.models";
import Image from "next/image";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";
import { useEffect, useState } from "react";

export const SwiperSection = () => {
  const models = PartnerModels;
  const { isSmall, isTablet } = useCustomMediaQuery();

  // if (topSwiper != undefined) {
  //   if (topSwiper.autoplay != undefined) {
  //     topSwiper.autoplay.paused = false;
  //     topSwiper.autoplay.running = true;
  //   }
  // }

  return (
    <div css={st.root}>
      <div css={st.swiper}>
        <CustomSwiper
          className="partners-reverse-swiper"
          observer={true}
          observeParents={true}
          loop
          freeMode={{ enabled: true }}
          spaceBetween={isSmall ? 0 : isTablet ? 60 : 0}
          slidesPerView={isSmall ? 1 : isTablet ? 2.6 : 6}
          modules={[Autoplay]}
          autoplay={{
            waitForTransition: false,
            stopOnLastSlide: false,
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={6000}
          css={css`
            position: relative;
            width: 100%;
          `}
        >
          {models.firstModels.map((it, index) => (
            <SwiperSlide key={`top-${index}`}>
              <div css={st.logo}>
                <Image fill src={it} alt="solana" />
              </div>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
      <div css={st.swiper}>
        <CustomSwiper
          className="partners-swiper"
          observer={true}
          resizeObserver={true}
          observeParents={true}
          loop
          freeMode={{
            enabled: true,
          }}
          spaceBetween={isSmall ? 0 : isTablet ? 60 : 0}
          slidesPerView={isSmall ? 1 : isTablet ? 2.6 : 6}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={6000}
          css={css`
            position: relative;
            width: 100%;
          `}
        >
          {models.secondModels.map((it, index) => (
            <SwiperSlide key={`down-${index}`}>
              <div css={st.logo}>
                <Image fill src={it} alt="solana" />
              </div>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 11.5vw;
    display: flex;
    flex-direction: column;
    gap: 10.52vw;

    @media ${MediaQueries.lg} {
      height: 70vh;
      bottom: unset;
      left: unset;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 23.6vw;
    }
    @media ${MediaQueries.sm} {
      height: 70vh;
      bottom: unset;
      left: unset;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 28.77vw;
    }
  `,
  swiper: css`
    width: 100%;
  `,
  logo: css`
    position: relative;
    width: 13.33vw;
    aspect-ratio: 1/0.27;
    @media ${MediaQueries.lg} {
      width: 33.33vw;
    }
    @media ${MediaQueries.sm} {
      width: 55.55vw;
    }
  `,
};
