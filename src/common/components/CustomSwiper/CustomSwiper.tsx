import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { SwiperProps } from "swiper/react";
import "swiper/css";

export type CustomSwiperProps = {
  children: ReactNode;
} & SwiperProps;

export const CustomSwiper = (p: CustomSwiperProps) => (
  <Swiper
    css={css`
      position: relative;
      width: 100%;
    `}
    {...p}
  />
);
