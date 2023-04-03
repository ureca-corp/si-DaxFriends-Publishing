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
    padding-top: 46.87vw;
  `,
  inner: css`
    width: 52.08vw;
    display: flex;
    flex-direction: column;
    gap: 3.12vh;
    overflow-y: scroll;
    height: 100%;
    padding-bottom: 13.02vw;
    position: relative;
    z-index: 2;

    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
