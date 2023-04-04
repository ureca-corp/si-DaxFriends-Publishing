import { css } from "@emotion/react";
import { RoadmapItemModels } from "../../../models/roadmap.type";
import { RoadmapBox } from "./components/RoadmapBox";

export const TabletRoadmapItems = () => {
  const models = RoadmapItemModels;
  return (
    <div css={st.root}>
      <div css={st.inner}>
        {models.map((it, _) => (
          <RoadmapBox key={_} title={it.title} descList={it.descList} />
        ))}
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
  `,
  inner: css`
    width: 52.08vw;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3.12vh;
    padding-bottom: 13.02vw;
    z-index: 2;
  `,
};
