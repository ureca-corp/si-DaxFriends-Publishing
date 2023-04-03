import Image from "next/image";
import { css } from "@emotion/react";
import LeftButton from "@/assets/pc/swiper/btn/icon-left-btn.png";
import RightButton from "@/assets/pc/swiper/btn/icon-right-btn.png";
import { Typography } from "@mui/material";
import { LightColor } from "@/common/theme/color";
import { SwiperButtonProps } from "@/ui/home/sections/Story/components/SwiperSection/SwiperButtonContainer/SwiperButtonContainer";

export const MbSwiperButtonContainer = ({
  slideIndex,
  onPrev,
  onNext,
}: SwiperButtonProps) => {
  return (
    <div css={st.btnWrapper}>
      <div css={st.btn} onClick={onPrev}>
        <Image fill src={LeftButton} alt="previous" />
      </div>
      <Typography color={LightColor.BrandPrimary} css={st.text}>
        {`Phase 0${slideIndex! + 1}`}
      </Typography>
      <div css={st.btn} onClick={onNext}>
        <Image fill src={RightButton} alt="next" />
      </div>
    </div>
  );
};

const st = {
  btnWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: 20px;
    left: 50%;
    bottom: -18vh;
    transform: translateX(-50%);
    z-index: 3;
  `,
  btn: css`
    position: relative;
    width: 2.88vw;
    aspect-ratio: 1/1.32;
    cursor: pointer;
    z-index: 3;
  `,
  text: css`
    font-size: 5.11vw; // 1vw 줄임
  `,
};
