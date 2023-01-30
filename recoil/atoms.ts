import { LayoutStatusAtomProps } from "@/_types/atomTypes";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const layoutStatusAtom = atom<LayoutStatusAtomProps>({
  key: "layoutStatusAtom",
  default: { selectedNavMenu: undefined, theme: "light" },
  effects_UNSTABLE: [persistAtom],
});
