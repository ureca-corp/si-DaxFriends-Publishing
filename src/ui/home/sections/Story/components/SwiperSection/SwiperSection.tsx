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
import { UseSwiperButton } from "./UseSwiperButton";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";

export const SwiperSection = () => {
  const { handleSetSwiper, buttonState } = UseSwiperButton();
  const { isTablet, isSmall } = useCustomMediaQuery();
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
            handleSetSwiper(swiper);
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
                    variant="h1"
                    color={LightColor.BrandWhite}
                    css={st.title}
                  >
                    {it.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={LightColor.BrandWhite}
                    css={st.desc}
                  >
                    {it.text}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SwiperButtonContainer
        onPrev={buttonState.onPrev}
        onNext={buttonState.onNext}
      />
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
    @media ${MediaQueries.lg} {
      width: 100%;
      aspect-ratio: unset;
    }
  `,

  card: css`
    width: 67.7vw;
    aspect-ratio: 1/0.369;
    display: flex;
    justify-content: space-between;
    padding-left: 10.41vw;

    @media ${MediaQueries.lg} {
      width: 100%;
      aspect-ratio: unset;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.9vh;
      padding-left: 0vw;
    }
  `,
  image: css`
    position: relative;
    width: 25vw;
    aspect-ratio: 1;

    @media ${MediaQueries.lg} {
      width: 39.06vw;
    }
  `,
  textWrapper: css`
    width: 20.83vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${MediaQueries.lg} {
      width: 100%;
      padding: 0 5vw;
      gap: 1vh;
    }
  `,
  title: css`
    @media ${MediaQueries.lg} {
      font-size: 5.98vw;
      text-align: center;
    }
  `,
  desc: css`
    @media ${MediaQueries.lg} {
      font-size: 3.9vw;
    }
  `,
};
