import { layoutStore } from "@/zustand/stores";
import { useRouter } from "next/router";
import { FC, useCallback, useMemo } from "react";

type Pages = "post" | "profile";
type NavMenuType = Record<Pages, { path: string; label: string }>;

const mapMenuToPath: NavMenuType = {
  post: {
    path: "/post",
    label: "Post",
  },
  profile: {
    path: "/profile",
    label: "Profile",
  },
};

const navMenus = Object.keys(mapMenuToPath) as Array<Pages>;

const navCls = {
  wrapper: "app-nav-wrapper",
  menu: "app-nav-menu",
};
const AppNav: FC = () => {
  const router = useRouter();
  const setClickedMenu = layoutStore((state) => state.setSelectedNavMenu);
  const selectedNavMenu = layoutStore((state) => state.selectedNavMenu);

  const handleClickNavMenu = useCallback(
    (path: string) => {
      setClickedMenu(path);
      router.push(path);
    },
    [router, setClickedMenu]
  );

  return (
    <nav className={navCls.wrapper}>
      {navMenus?.map((nav, index) => {
        return (
          <div
            className={
              selectedNavMenu === mapMenuToPath[nav].path
                ? `${navCls.menu} active`
                : navCls.menu
            }
            key={nav + index}
            onClick={() => handleClickNavMenu(mapMenuToPath[nav].path)}
          >
            {mapMenuToPath[nav].label}
          </div>
        );
      })}
    </nav>
  );
};
export default AppNav;
