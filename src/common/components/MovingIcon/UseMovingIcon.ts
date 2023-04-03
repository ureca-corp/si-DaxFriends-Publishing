import { useCustomMediaQuery } from "../../theme/screen";
import { AssetType } from "./type/gif.type";

export const UseMovingIcon = (props: AssetType[]) => {
  const { isSmall, isTablet } = useCustomMediaQuery();
  const assetData = isSmall ? props[2] : isTablet ? props[1] : props[0];
  return { assetData };
};
