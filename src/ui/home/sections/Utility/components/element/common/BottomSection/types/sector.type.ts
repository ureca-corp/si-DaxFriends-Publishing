import { MemoType } from "@/ui/home/sections/Utility/models/utility.models";

export interface LetterSectorProps {
  onClick: () => void;
}

export interface PcLetterSectorProps extends LetterSectorProps {
  isVisible?: boolean;
  memoState: MemoType | null;
}
