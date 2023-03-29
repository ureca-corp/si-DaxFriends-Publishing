import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PartnerModels } from "../models/partner.models";
import Image from "next/image";

export const SwiperSection = () => {
  const models = PartnerModels;

  return (
    <div css={st.root}>
      <div css={st.swiper}>
        <Swiper
          loop
          freeMode={{ enabled: true, momentum: false }}
          spaceBetween={0}
          slidesPerView={6}
          modules={[Autoplay]}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          speed={6000}
        >
          {models.secondModels.map((it, index) => (
            <SwiperSlide key={index}>
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
          spaceBetween={0}
          slidesPerView={6}
          modules={[Autoplay]}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          speed={6000}
        >
          {models.secondModels.map((it, index) => (
            <SwiperSlide key={index}>
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
    bottom: 14.98vw;
    display: flex;
    flex-direction: column;
    gap: 9.52vw;
  `,
  swiper: css`
    width: 100%;
  `,
  logo: css`
    position: relative;
    width: 13.33vw;
    aspect-ratio: 1/0.27;
  `,
};
