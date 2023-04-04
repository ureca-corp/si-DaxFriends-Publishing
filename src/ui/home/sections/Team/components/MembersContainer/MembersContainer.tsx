import { useCustomMediaQuery } from "@/common/theme/screen";
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
