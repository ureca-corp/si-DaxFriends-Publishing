import { css } from "@emotion/react";
import ImgMobileBackground from "@/assets/mb/img-bg.png";
import Image from "next/image";
import { useCustomMobileMediaQuery } from "@/common/theme/screen";
import {
  ExtraSmallImage,
  LargeImage,
  MediumImage,
  SmallImage,
} from "./element";

export const MobileBackgroundImage = () => {
  const { isMobileExtraSmall, isMobileSmall, isMobileMedium, isMobileLarge } =
    useCustomMobileMediaQuery();
  return (
    <div css={st.bg}>
      {isMobileExtraSmall ? (
        <ExtraSmallImage />
      ) : isMobileSmall ? (
        <SmallImage />
      ) : isMobileMedium ? (
        <MediumImage />
      ) : isMobileLarge ? (
        <LargeImage />
      ) : (
        <Image fill src={ImgMobileBackground} alt="bg" />
      )}
    </div>
  );
};

const st = {
  bg: css`
    position: relative;
    width: 100%;
    height: 100%;

    @media ${`(max-width: 414px) and (max-height : 896px)`} {
      font-size: 4.42vw;
    }
  `,
};
