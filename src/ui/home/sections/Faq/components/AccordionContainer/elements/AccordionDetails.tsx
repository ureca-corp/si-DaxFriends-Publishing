import { styled } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "16px",
  paddingLeft: "22px",
  [theme.breakpoints.down("lg")]: {
    padding: "2.6vw",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "4.44vw",
    paddingLeft: "5.55vw",
  },
}));
