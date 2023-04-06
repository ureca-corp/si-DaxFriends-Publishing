import { useCustomMediaQuery } from "@/common/theme/screen";
import { SlideProps } from "@/ui/home/common/type/slide.type";
import React from "react";
import { MbMembersContainer, PcMembersContainer } from "./element";

export const MembersContainer = () => {
  const { isSmall } = useCustomMediaQuery();
  return (
    <React.Fragment>
      {isSmall ? <MbMembersContainer /> : <PcMembersContainer />}
    </React.Fragment>
  );
};
