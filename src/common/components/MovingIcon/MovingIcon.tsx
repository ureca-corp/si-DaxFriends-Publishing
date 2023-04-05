import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import Image from "next/image";
import { UseMovingIcon } from "./UseMovingIcon";
import { AssetType } from "./type/gif.type";
import { UtilityText } from "./components";

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
        {props[0].name === "utility" && <UtilityText />}
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

    @media ${MediaQueries.sm} {
      width: 100%;
      height: 30vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  gif: (width: string, aspectRatio: string) => css`
    position: relative;
    width: ${width};
    aspect-ratio: ${aspectRatio};
  `,
};
