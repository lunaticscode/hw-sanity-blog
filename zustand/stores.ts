import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LayoutStoreProps {
  selectedNavMenu: string;
  theme: string;
  setTheme: (theme: string) => void;
  setSelectedMenu: (menu: string) => void;
}
export const layoutStore = create(
  persist<LayoutStoreProps>(
    (set) => ({
      selectedNavMenu: "",
      theme: "light",
      setSelectedMenu: (selectedNavMenu: string) =>
        set((state) => ({ ...state, selectedNavMenu })),
      setTheme: (theme: string) => set((state) => ({ ...state, theme })),
    }),
    {
      name: "layoutStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

interface PostStoreProps {
  postPageNumber: number;
  postTag: string;
  setPostPageNumber: (pageNumber: number) => void;
}
export const postStore = create<PostStoreProps>((set) => ({
  postPageNumber: 0,
  postTag: "",
  setPostPageNumber: (pageNumber: number) =>
    set((state) => ({ ...state, postPageNumber: pageNumber })),
  setPostTag: (tag: string) => set((state) => ({ ...state, postTag: tag })),
}));
