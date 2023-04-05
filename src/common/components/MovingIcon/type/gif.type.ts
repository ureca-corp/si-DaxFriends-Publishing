export interface AssetCategoryType {
  name: string;
  data: AssetType[];
}

export interface AssetType {
  name: string;
  asset: any;
  w: string;
  h: string;
}
