import React, { ChangeEvent, FC } from "react";
import AppLogo from "./AppLogo";
import AppNav from "./AppNav";
import Toggle from "react-toggle";
import ToggleInternalIcon from "../icon/ToggleInternalIcon";
import { layoutStore } from "@/zustand/stores";

const headerCls = {
  wrapper: "app-header-wrapper",
  toggleWrapper: "app-header-toggle-wrapper",
};
interface AppHeaderProps {
  theme: string;
}
const AppHeader: FC<AppHeaderProps> = ({ theme }) => {
  const setTheme = layoutStore((state) => state.setTheme);
  const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.checked ? "dark" : "light";
    setTheme(theme);
  };

  return (
    <header className={headerCls.wrapper}>
      <AppLogo theme={theme} />
      <AppNav />
      <div className={headerCls.toggleWrapper}>
        <Toggle
          onChange={handleChangeToggle}
          defaultChecked={theme === "dark" ? true : false}
          icons={{
            checked: <ToggleInternalIcon isDark={true} />,
            unchecked: <ToggleInternalIcon isDark={false} />,
          }}
        />
      </div>
    </header>
  );
};
export default AppHeader;
