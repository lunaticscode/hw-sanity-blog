import React, { ChangeEvent, FC } from "react";
import AppLogo from "./AppLogo";
import AppNav from "./AppNav";
import Toggle from "react-toggle";
import ToggleInternalIcon from "../icon/ToggleInternalIcon";
import { useSetRecoilState } from "recoil";
import { layoutStatusAtom } from "@/recoil/atoms";
import { LayoutStatusAtomProps } from "@/_types/atomTypes";

const headerCls = {
  wrapper: "app-header-wrapper",
  toggleWrapper: "app-header-toggle-wrapper",
};

const AppHeader: FC = () => {
  const setLayoutStatus =
    useSetRecoilState<LayoutStatusAtomProps>(layoutStatusAtom);
  const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.checked ? "dark" : "light";
    setLayoutStatus((prev) => ({ ...prev, theme }));
  };
  return (
    <header className={headerCls.wrapper}>
      <AppLogo />
      <AppNav />
      <div className={headerCls.toggleWrapper}>
        <Toggle
          onChange={handleChangeToggle}
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
