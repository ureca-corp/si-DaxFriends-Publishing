import { Stack } from "@mui/material";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  Gallery,
  Utility,
  Partners,
  Team,
  Faq,
  Footer,
} from "../sections";

export const HomeView = () => {
  return (
    <Stack>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Utility />
      <Gallery />
      <Team />
      <Partners />
      <Faq />
      <Footer />
    </Stack>
  );
};
