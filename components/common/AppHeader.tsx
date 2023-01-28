import { FC } from "react";
import AppLogo from "./AppLogo";
import AppNav from "./AppNav";

const headerCls = {
  wrapper: "app-header-wrapper",
};

const AppHeader: FC = () => {
  return (
    <header className={headerCls.wrapper}>
      <AppLogo />
      <AppNav />
    </header>
  );
};
export default AppHeader;
