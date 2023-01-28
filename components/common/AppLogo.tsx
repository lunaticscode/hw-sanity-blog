import { FC } from "react";
import Image from "next/image";
import AppLogoImg from "../../public/hw-blog-logo.png";
const logoCls = {
  wrapper: "app-logo-wrapper",
};
const AppLogo: FC = () => {
  return (
    <div className={logoCls.wrapper}>
      <Image
        src={AppLogoImg}
        width={50}
        height={50}
        alt="HW"
        placeholder="blur"
      />
    </div>
  );
};
export default AppLogo;

// if remote image,
// props => blurDataUrl: {incoded base64 image data}
