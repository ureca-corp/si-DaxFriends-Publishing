import Image from "next/image";
import { css } from "@emotion/react";
import LeftButton from "@/assets/pc/swiper/btn/icon-left-btn.png";
import RightButton from "@/assets/pc/swiper/btn/icon-right-btn.png";
import { SwiperButtonProps } from "../SwiperButtonContainer";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const PcSwiperButtonContainer = ({
  onPrev,
  onNext,
}: SwiperButtonProps) => {
  useLayoutEffect(() => {
    gsap.to(".story-prev", {
      x: -60,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      repeatDelay: 0.7,
    });

    gsap.to(".story-next", {
      x: 60,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      repeatDelay: 0.7,
    });
  }, []);

  return (
    <div css={st.btnWrapper}>
      <div className="story-prev" css={st.btn} onClick={onPrev}>
        <Image fill src={LeftButton} alt="previous" />
      </div>
      <div className="story-next" css={st.btn} onClick={onNext}>
        <Image fill src={RightButton} alt="next" />
      </div>
    </div>
  );
};

const st = {
  btnWrapper: css`
    width: 100%;
    padding: 0 11.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  btn: css`
    position: relative;
    width: 3.12vw;
    aspect-ratio: 1/1.32;
    cursor: pointer;
    z-index: 3;
  `,
};
