import { UtilityText } from "@/common/components/MovingIcon/components";
import { AssetType } from "@/common/components/MovingIcon/type/gif.type";
import { UseMovingIcon } from "@/common/components/MovingIcon/UseMovingIcon";
import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import Image from "next/image";

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
    @media ${MediaQueries.xll} {
      position: relative;
      top: unset;
      left: unset;
      width: 100%;
      height: 30vh;
      display: flex;
      align-items: center;
      justify-content: center;
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
