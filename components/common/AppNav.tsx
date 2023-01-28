import { useRouter } from "next/router";
import { FC } from "react";

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
  const handleClickNavMenu = (path: string) => {
    router.push(path);
  };
  return (
    <nav className={navCls.wrapper}>
      {navMenus?.map((nav, index) => {
        return (
          <div
            className={navCls.menu}
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
