import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { CardModels } from "../../models/card.models";
import Image from "next/image";
import { Typography } from "@mui/material";
import { LightColor } from "@/common/theme/color";
import { SwiperButtonContainer } from "./SwiperButtonContainer";

export const SwiperSection = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();

  const onSlideNext = () => {
    slideNext();
  };

  const onSlidePrev = () => {
    slidePrev();
  };

  const models = CardModels;

  return (
    <div css={st.root}>
      <div css={st.inner}>
        <Swiper
          slidesPerView={1}
          initialSlide={0}
          loop
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {models.map((it, index) => (
            <SwiperSlide key={index}>
              <div css={st.card}>
                <div css={st.image}>
                  <Image fill src={it.img} alt="card-image" />
                </div>
                <div css={st.textWrapper}>
                  <Typography
                    fontSize="56px"
                    lineHeight={1.4}
                    color={LightColor.BrandWhite}
                  >
                    {it.title}
                  </Typography>
                  <Typography
                    fontSize="26px"
                    lineHeight={1.4}
                    color={LightColor.BrandWhite}
                  >
                    {it.text}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SwiperButtonContainer onPrev={onSlidePrev} onNext={onSlideNext} />
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  inner: css`
    position: absolute;
    width: 67.7vw;
    aspect-ratio: 1/0.369;
    z-index: 1;
  `,

  card: css`
    width: 67.7vw;
    aspect-ratio: 1/0.369;
    display: flex;
    justify-content: space-between;
    padding-left: 10.41vw;
  `,
  image: css`
    position: relative;
    width: 25vw;
    aspect-ratio: 1;
  `,
  textWrapper: css`
    width: 20.83vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};
