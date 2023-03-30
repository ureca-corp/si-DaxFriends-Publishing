import Image from "next/image";
import { css } from "@emotion/react";
import LeftButton from "@/assets/pc/swiper/btn/icon-left-btn.png";
import RightButton from "@/assets/pc/swiper/btn/icon-right-btn.png";
import { Typography } from "@mui/material";
import { LightColor } from "@/common/theme/color";
import { MediaQueries } from "@/common/theme/screen";
import { SwiperButtonProps } from "../SwiperButtonContainer";

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
        {`EP 0${slideIndex! + 1}`}
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
    bottom: 30px;
    transform: translateX(-50%);

    @media ${MediaQueries.xs} {
      bottom: 16px;
    }
  `,
  btn: css`
    position: relative;
    width: 1.82vw;
    aspect-ratio: 1/1.32;
    cursor: pointer;
    z-index: 3;

    @media ${MediaQueries.xs} {
      width: 2.88vw; // 1vw 줄임
    }
  `,
  text: css`
    font-size: 2.86vw;

    @media ${MediaQueries.xs} {
      font-size: 5.11vw; // 1vw 줄임
    }
  `,
};
