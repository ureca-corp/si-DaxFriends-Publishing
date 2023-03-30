import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { MobileAppbar, PcAppbar } from "./element";

export const Appbar = () => {
  const { isTablet } = useCustomMediaQuery();
  return (
    <header css={st.appbar}>
      {isTablet ? <MobileAppbar /> : <PcAppbar />}
    </header>
  );
};

const st = {
  appbar: css`
    width: 100%;
  `,
};
