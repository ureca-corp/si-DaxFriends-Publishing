import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { RoadmapItemModels } from "../../models/roadmap.type";
import { RoadmapBox } from "./RoadmapBox";

export const MobileRoadmapItems = () => {
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
    width: 51.85vh;
    height: 100%;
    position: absolute;
    top: 0;
    right: 5.2vw;
    z-index: 2;
    padding: 100px 0;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    @media ${MediaQueries.lg} {
      width: 51.08vw;
    }
  `,
  inner: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.22vh;
  `,
};
