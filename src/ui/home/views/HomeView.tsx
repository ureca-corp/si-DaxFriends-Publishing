import { Stack } from "@mui/material";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  Gallery,
  Utility,
  Partners,
  Team,
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
    </Stack>
  );
};
