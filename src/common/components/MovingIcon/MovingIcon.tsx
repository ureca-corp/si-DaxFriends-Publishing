import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import Image from "next/image";
import { UseMovingIcon } from "./UseMovingIcon";
import { AssetType } from "./type/gif.type";

interface MovingIcon {
  props: AssetType[];
  topShort?: boolean;
}

export const MovingIcon = ({ props, topShort = false }: MovingIcon) => {
  const { assetData } = UseMovingIcon(props);

  return (
    <div css={st.wrapper(topShort)}>
      <div css={st.gif(assetData.w, assetData.h)}>
        <Image fill src={assetData.asset} alt="gif" />
      </div>
    </div>
  );
};

const st = {
  wrapper: (topShort: boolean) => css`
    position: absolute;
    top: ${topShort ? "2.65vw" : "3.2vw"};
    left: 5.2vw;
    z-index: 3;

    @media ${MediaQueries.lg} {
      position: relative;
      top: unset;
      left: unset;
    }
  `,
  gif: (width: string, aspectRatio: string) => css`
    position: relative;
    width: ${width};
    aspect-ratio: ${aspectRatio};
  `,
};
