import { css } from "@emotion/react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { LightColor } from "@/common/theme/color";
import { FaqModels } from "../models/faq.models";

export const AccordionContainer = () => {
  const [expanded, setExpanded] = useState<number | false>(1);

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
            <Typography fontSize="22px" lineHeight={1.4}>
              <span css={st.purpleText}>Q.</span> {it.question}
            </Typography>
          </AccordionSummary>
          <AccordionDivider />
          <AccordionDetails>
            <Typography
              css={st.answer}
              fontSize="20px"
              lineHeight={1.4}
              color={LightColor.Gray300}
            >
              <span css={st.blueText}>A.</span> {it.answer}
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
  `,
  dividerWrapper: css`
    width: 100%;
    padding: 0 1.04vw;
    height: 1px;
    text-align: center;
  `,
  divider: css`
    width: 100%;
    height: 100%;
    background-color: ${LightColor.Gray200};
    margin: 0 auto;
  `,
  purpleText: css`
    color: ${LightColor.BrandPrimary};
  `,
  blueText: css`
    color: ${LightColor.BrandBlue};
  `,
  answer: css`
    text-indent: -22px;
    margin-left: 16px;
  `,
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "& .MuiButtonBase-root": {
    height: "3.75vw",
  },
  marginBottom: "1.04vw",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  borderRadius: "36px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", fill: "black" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "36px",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "16px",
  paddingLeft: "22px",
}));

const AccordionDivider = () => {
  return (
    <div css={st.dividerWrapper}>
      <div css={st.divider}></div>
    </div>
  );
};
