import Image from "next/image";
import { css } from "@emotion/react";
import LeftButton from "@/assets/pc/swiper/btn/icon-left-btn.png";
import RightButton from "@/assets/pc/swiper/btn/icon-right-btn.png";

interface SwiperButtonProps {
  onPrev: () => void;
  onNext: () => void;
}

export const MbSwiperButtonContainer = ({
  onPrev,
  onNext,
}: SwiperButtonProps) => {
  return (
    <div css={st.btnWrapper}>
      <div css={st.btn} onClick={onPrev}>
        <Image fill src={LeftButton} alt="previous" />
      </div>
      <div css={st.btn} onClick={onNext}>
        <Image fill src={RightButton} alt="next" />
      </div>
    </div>
  );
};

const st = {
  btnWrapper: css`
    width: 100%;
    padding: 0 5.2vw;
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
