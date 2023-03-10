import React, { ChangeEvent, FC, useEffect } from "react";
import AppLogo from "./AppLogo";
import AppNav from "./AppNav";
import Toggle from "react-toggle";
import ToggleInternalIcon from "../icon/ToggleInternalIcon";
import { useRecoilState, useSetRecoilState } from "recoil";
import { layoutStatusAtom } from "@/recoil/atoms";
import { LayoutStatusAtomProps } from "@/_types/atomTypes";

const headerCls = {
  wrapper: "app-header-wrapper",
  toggleWrapper: "app-header-toggle-wrapper",
};

const AppHeader: FC = () => {
  const [{ theme }, setLayoutStatus] =
    useRecoilState<LayoutStatusAtomProps>(layoutStatusAtom);
  const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.checked ? "dark" : "light";
    setLayoutStatus((prev) => ({ ...prev, theme }));
  };
  useEffect(() => {
    console.log({ theme });
  }, [theme]);
  return (
    <header className={headerCls.wrapper}>
      <AppLogo />
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
