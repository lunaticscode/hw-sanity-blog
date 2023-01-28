import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import AppLoading from "./AppLoading";

interface AppLayoutProps {
  children?: ReactNode;
}
const mainClsPrefix = "app-main";
const mainCls = {
  wrapper: `${mainClsPrefix}-wrapper`,
};

const AppLayout: FC<AppLayoutProps> = (props) => {
  const [isRouteLoading, setIsRouteLoading] = useState<boolean>(false);
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
  return (
    <>
      <AppHeader />
      <main className={mainCls.wrapper}>{children}</main>
      {isRouteLoading && <AppLoading />}
    </>
  );
};
export default AppLayout;
