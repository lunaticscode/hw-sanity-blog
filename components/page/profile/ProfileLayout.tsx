import { FC } from "react";

const layoutClsPrefix = "profile-layout";
const wrapperCls = {
  layout: `${layoutClsPrefix}-wrapper`,
};
const ProfileLayout: FC = () => {
  return <div className={wrapperCls.layout}></div>;
};
export default ProfileLayout;
