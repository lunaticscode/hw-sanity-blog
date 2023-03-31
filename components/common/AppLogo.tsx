import { FC } from "react";
import Image from "next/image";
import AppLightLogoImg from "../../public/hw-blog-logo.png";
import AppDarkLogoImg from "../../public/hw-blog-logo-white.png";
import { useRouter } from "next/router";
interface AppLogoProps {
  theme: string;
}
const logoCls = {
  wrapper: "app-logo-wrapper",
};
const AppLogo: FC<AppLogoProps> = ({ theme }) => {
  const router = useRouter();
  const handleClickLogo = () => {
    router.push("/post");
  };
  return (
    <div className={logoCls.wrapper} onClick={handleClickLogo}>
      <Image
        src={theme === "light" ? AppLightLogoImg : AppDarkLogoImg}
        width={50}
        height={50}
        alt="HW"
        placeholder="blur"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};
export default AppLogo;

// if remote image,
// props => blurDataUrl: {incoded base64 image data}
