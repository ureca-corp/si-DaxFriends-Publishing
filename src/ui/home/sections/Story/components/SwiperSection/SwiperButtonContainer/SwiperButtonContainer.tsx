import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import {
  MbStorySwiperButtonContainer,
  PcSwiperButtonContainer,
} from "./element";

export interface SwiperButtonProps {
  onPrev: () => void;
  onNext: () => void;
  slideIndex?: number;
  pageText?: string;
}

export const SwiperButtonContainer = ({
  onPrev,
  onNext,
  slideIndex,
}: SwiperButtonProps) => {
  const { isTablet } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      {isTablet ? (
        <MbStorySwiperButtonContainer
          onPrev={onPrev}
          onNext={onNext}
          slideIndex={slideIndex}
          pageText={"EP"}
        />
      ) : (
        <PcSwiperButtonContainer onPrev={onPrev} onNext={onNext} />
      )}
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
  `,
};
