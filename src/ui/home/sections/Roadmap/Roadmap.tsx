import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import { MovingIcon } from "@/common/components/MovingIcon";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { BackgroundImage, RoadmapContainer } from "./components";
import { MediaQueries } from "@/common/theme/screen";

export const Roadmap = () => {
  const movingIcon = UseGetAsset("road");
  return (
    <section css={st.root}>
      <MovingIcon props={movingIcon} />
      <RoadmapContainer />
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
    @media ${MediaQueries.lg} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4.5vh;
      padding-top: 19vw;
    }
    @media ${MediaQueries.sm} {
      padding-top: 18vw;
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
