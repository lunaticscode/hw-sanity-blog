import { layoutStatusAtom } from "@/recoil/atoms";
import { LayoutStatusAtomProps } from "@/_types/atomTypes";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import AppHeader from "./AppHeader";
import AppLoading from "./AppLoading";

interface AppLayoutProps {
  children?: ReactNode;
}

const layoutClsPrefix = "app-layout";
const layoutCls = {
  wrapper: `${layoutClsPrefix}-wrapper`,
};
const mainClsPrefix = "app-main";
const mainCls = {
  wrapper: `${mainClsPrefix}-wrapper`,
};

const AppLayout: FC<AppLayoutProps> = (props) => {
  const [isRouteLoading, setIsRouteLoading] = useState<boolean>(false);
  const { theme } = useRecoilValue<LayoutStatusAtomProps>(layoutStatusAtom);
  const { children } = props;

  const router = useRouter();
  const handleRouterChangeStart = () => setIsRouteLoading(true);
  const handleRouterChangeEnd = () => setIsRouteLoading(false);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouterChangeStart);
    router.events.on("routeChangeComplete", handleRouterChangeEnd);
    return () => {
      router.events.off("routeChangeStart", handleRouterChangeStart);
      router.events.off("routeChangeComplete", handleRouterChangeEnd);
    };
  });

  const layoutWrapperCls = useMemo(
    () => `${layoutCls.wrapper}--theme-${theme}`,
    [theme]
  );

  useEffect(() => {
    document.documentElement.setAttribute("app-theme", theme || "light");
  }, [theme]);

  return (
    <div className={layoutWrapperCls}>
      <AppHeader />
      <main className={mainCls.wrapper}>{children}</main>
      {isRouteLoading && <AppLoading />}
    </div>
  );
};
export default AppLayout;
