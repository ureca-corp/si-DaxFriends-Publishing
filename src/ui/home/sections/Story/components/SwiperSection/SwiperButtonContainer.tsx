import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { MbSwiperButtonContainer, PcSwiperButtonContainer } from "./element";

interface SwiperButtonProps {
  onPrev: () => void;
  onNext: () => void;
}

export const SwiperButtonContainer = ({
  onPrev,
  onNext,
}: SwiperButtonProps) => {
  const { isTablet, isSmall } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      {isTablet ? (
        <MbSwiperButtonContainer onPrev={onPrev} onNext={onNext} />
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
