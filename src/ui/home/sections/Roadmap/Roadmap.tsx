import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import { MovingIcon } from "@/common/components/MovingIcon";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { BackgroundImage, RoadmapContainer } from "./components";

export const Roadmap = () => {
  const movingIcon = UseGetAsset("road");
  return (
    <section css={st.root}>
      <MovingIcon props={movingIcon[0]} />
      <BackgroundImage />
      <RoadmapContainer />
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
  `,
  image: css`
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 36.45vw;
    aspect-ratio: 1;
  `,
};
