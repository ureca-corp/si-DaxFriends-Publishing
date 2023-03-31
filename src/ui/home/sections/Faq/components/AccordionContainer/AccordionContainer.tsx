import { css } from "@emotion/react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { LightColor } from "@/common/theme/color";
import { MediaQueries } from "@/common/theme/screen";
import {
  Accordion,
  AccordionDetails,
  AccordionDivider,
  AccordionSummary,
} from "./elements";
import { FaqModels } from "../../models/faq.models";
import parse from "html-react-parser";

export const AccordionContainer = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panelIndex: number) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panelIndex : false);
    };

  const models = FaqModels;

  return (
    <div css={st.root}>
      {models.map((it, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="subtitle1" css={st.question}>
              <span css={st.purpleText}>Q.</span> {it.question}
            </Typography>
          </AccordionSummary>
          <AccordionDivider />
          <AccordionDetails>
            <Typography
              css={st.answer}
              variant="subtitle2"
              color={LightColor.Gray300}
            >
              <span css={st.blueText}>A.</span> {parse(it.answer)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

const st = {
  root: css`
    width: 100%;

    @media ${MediaQueries.xs} {
      height: calc((14.44vw * 7) + 6px);
      overflow: scroll;
    }
  `,

  purpleText: css`
    color: ${LightColor.BrandPrimary};
  `,
  blueText: css`
    color: ${LightColor.BrandBlue};
  `,
  question: css`
    @media ${MediaQueries.lg} {
      font-size: 2.86vw;
    }
    @media ${MediaQueries.xs} {
      font-size: 3.8vw;
    }
  `,
  answer: css`
    text-indent: -22px;
    margin-left: 16px;
    @media ${MediaQueries.lg} {
      font-size: 2.6vw;
    }
    @media ${MediaQueries.xs} {
      font-size: 3.4vw;
      text-indent: -4vw;
      margin-left: 10px;
    }
  `,
};
