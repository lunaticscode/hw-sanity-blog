import { FC } from "react";
import Image from "next/image";
import AppLightLogoImg from "../../public/hw-blog-logo.png";
import AppDarkLogoImg from "../../public/hw-blog-logo-white.png";
import { useRecoilValue } from "recoil";
import { layoutStatusAtom } from "@/recoil/atoms";
import { LayoutStatusAtomProps } from "@/_types/atomTypes";
import { useRouter } from "next/router";
const logoCls = {
  wrapper: "app-logo-wrapper",
};
const AppLogo: FC = () => {
  const router = useRouter();
  const { theme } = useRecoilValue<LayoutStatusAtomProps>(layoutStatusAtom);
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
