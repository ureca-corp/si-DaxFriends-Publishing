import { css } from "@emotion/react";
import { styled } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
  "& .MuiButtonBase-root": {
    height: "6.66vh",
    [theme.breakpoints.down("xs")]: {
      height: "14.44vw",
    },
  },
  marginBottom: "1.85vh",
  borderRadius: "36px",
  [theme.breakpoints.down("sm")]: {
    borderRadius: "24px",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "0vh !important",
    borderRadius: "0px",
  },
  "&:not(:last-child)": {
    borderBottom: "1px solid #CED5E1",
  },

  "&:before": {
    display: "none",
  },
}));
