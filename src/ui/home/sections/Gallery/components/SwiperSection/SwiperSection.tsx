import { css } from "@emotion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { MobileSwiperSection, PcSwiperSection } from "./element";
import React from "react";

export const SwiperSection = () => {
  const { isTablet } = useCustomMediaQuery();

  return (
    <React.Fragment>
      {isTablet ? <MobileSwiperSection /> : <PcSwiperSection />}
    </React.Fragment>
  );
};
