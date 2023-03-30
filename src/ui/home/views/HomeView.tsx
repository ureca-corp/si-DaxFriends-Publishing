import { Appbar } from "@/common/components/Appbar";
import { Stack } from "@mui/material";
import {
  Gallery,
  Utility,
  Partners,
  Team,
  Faq,
  Footer,
  Main,
  Story,
  Roadmap,
} from "../sections";

export const HomeView = () => {
  return (
    <Stack sx={{ position: "relative" }}>
      <Appbar />
      <Main />
      <Story />
      <Roadmap />
      <Utility />
      <Gallery />
      <Team />
      <Partners />
      <Faq />
      <Footer />
    </Stack>
  );
};
