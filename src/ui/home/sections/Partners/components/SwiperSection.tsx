import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PartnerModels } from "../models/partner.models";
import Image from "next/image";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";

export const SwiperSection = () => {
  const models = PartnerModels;
  const { isSmall, isTablet } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      <div css={st.swiper}>
        <CustomSwiper
          loop
          freeMode={{ enabled: true, momentum: false, momentumBounce: false }}
          spaceBetween={isSmall ? 10 : isTablet ? 60 : 0}
          slidesPerView={isSmall ? 1.5 : isTablet ? 2.6 : 6}
          modules={[Autoplay, FreeMode]}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          speed={6000}
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
          loop
          freeMode={{ enabled: true, momentum: false, momentumBounce: false }}
          spaceBetween={isSmall ? 10 : isTablet ? 60 : 0}
          slidesPerView={isSmall ? 1.5 : isTablet ? 2.6 : 6}
          modules={[Autoplay, FreeMode]}
          autoplay={{ delay: 0, disableOnInteraction: true }}
          speed={6000}
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
      position: relative;
      bottom: unset;
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
