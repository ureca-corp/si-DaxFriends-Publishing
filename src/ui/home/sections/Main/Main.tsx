import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { BackgroundImage, MainTitle } from "./components";
import { TitleModels } from "./models/title.model";

export const Main = () => {
  const { isTablet } = useCustomMediaQuery();
  const models = TitleModels;

  return (
    <section css={st.root}>
      {isTablet || <MainTitle main={models.main} desc={models.desc} />}
      <BackgroundImage />
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    position: relative;
  `,
};
