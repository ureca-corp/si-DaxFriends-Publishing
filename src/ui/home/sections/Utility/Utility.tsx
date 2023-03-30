import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgPinkBlur from "@/assets/pc/utility/img-blur.png";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import { Letter } from "./components/Letter";
import { MediaQueries } from "@/common/theme/screen";

export const Utility = () => {
  const movingIcon = UseGetAsset("utility");

  return (
    <section css={st.root}>
      <MovingIcon props={movingIcon[0]} topShort />
      <div css={st.inner}>
        <Letter />
      </div>
      <div css={st.blurWrapper}>
        <div css={st.blur}>
          <Image fill src={ImgPinkBlur} alt="blur" />
        </div>
      </div>
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightPink};
    position: relative;
    overflow: hidden;
    z-index: 1;
  `,
  inner: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media ${MediaQueries.lg} {
      align-items: flex-end;
      justify-content: flex-end;
      padding: 0 10.9vw;
      padding-bottom: 4vh;
    }
  `,

  blurWrapper: css`
    position: absolute;
    bottom: -25vw;
    right: -35vw;
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
};
