import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { MbSwiperButtonContainer, PcSwiperButtonContainer } from "./element";

export interface SwiperButtonProps {
  onPrev: () => void;
  onNext: () => void;
  slideIndex?: number;
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
        <MbSwiperButtonContainer
          onPrev={onPrev}
          onNext={onNext}
          slideIndex={slideIndex}
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
