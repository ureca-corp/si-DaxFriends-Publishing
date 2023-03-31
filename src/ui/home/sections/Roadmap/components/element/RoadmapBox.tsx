import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { RoadmapItemType } from "../../models/roadmap.type";

export const RoadmapBox = ({ title, descList }: RoadmapItemType) => {
  return (
    <div css={st.box}>
      <Typography variant="h3" color={LightColor.LightBlack}>
        {title}
      </Typography>
      <ul css={st.ul}>
        {descList.map((it, index) => (
          <li key={index}>
            <Typography
              variant="body2"
              css={st.desc}
              color={LightColor.LightBlack}
            >
              {it}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

const st = {
  box: css`
    width: 100%;
    background-color: white;
    padding: 3.7vh;
    border: 3px solid #121212;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  ul: css`
    list-style-type: disc;
    padding-left: 3.7vh;
  `,
  desc: css``,
};
