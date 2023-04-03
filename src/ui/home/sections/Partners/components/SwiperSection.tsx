import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PartnerModels } from "../models/partner.models";
import Image from "next/image";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";

export const SwiperSection = () => {
  const models = PartnerModels;
  const { isSmall, isTablet } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      <div css={st.swiper}>
        <Swiper
          loop
          freeMode={{ enabled: true, momentum: false }}
          spaceBetween={isSmall ? 20 : isTablet ? 60 : 0}
          slidesPerView={isSmall ? 2 : isTablet ? 2.6 : 6}
          modules={[Autoplay]}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          speed={6000}
        >
          {models.secondModels.map((it, index) => (
            <SwiperSlide key={`top-${index}`}>
              <div css={st.logo}>
                <Image fill src={it} alt="solana" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div css={st.swiper}>
        <Swiper
          loop
          freeMode={{ enabled: true, momentum: false }}
          spaceBetween={isSmall ? 20 : isTablet ? 60 : 0}
          slidesPerView={isSmall ? 2 : isTablet ? 2.6 : 6}
          modules={[Autoplay]}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          speed={6000}
        >
          {models.secondModels.map((it, index) => (
            <SwiperSlide key={`down-${index}`}>
              <div css={st.logo}>
                <Image fill src={it} alt="solana" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 15.98vw;
    display: flex;
    flex-direction: column;
    gap: 10.52vw;

    @media ${MediaQueries.lg} {
      position: relative;
      bottom: unset;
      gap: 23.6vw;
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
  `,
};
