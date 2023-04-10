import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { BackgroundImage, RoadmapContainer } from "./components";
import { MediaQueries } from "@/common/theme/screen";
import { SlideProps } from "../../common/type/slide.type";
import { MovingIcon } from "./components/MovingIcon/MovingIcon";

export const Roadmap = ({ fullpageSwiper, setSwiper }: SlideProps) => {
  const movingIcon = UseGetAsset("road");
  return (
    <section css={st.root}>
      <MovingIcon props={movingIcon} />
      <RoadmapContainer fullpageSwiper={fullpageSwiper} setSwiper={setSwiper} />
      <BackgroundImage />
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightBlue};
    position: relative;
    overflow: hidden;
    @media ${MediaQueries.xll} {
      display: block;
      padding-top: unset;
    }
  `,
  image: css`
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 36.45vw;
    aspect-ratio: 1;
  `,
};
