import { layoutStore } from "@/zustand/stores";
import { useRouter } from "next/router";
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [isRouteLoading, setIsRouteLoading] = useState<boolean>(false);
  const theme = layoutStore((state) => state.theme);
  const router = useRouter();
  const handleRouterChangeStart = useCallback(
    () => setIsRouteLoading(true),
    []
  );
  const handleRouterChangeEnd = useCallback(() => setIsRouteLoading(false), []);

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
      <AppHeader theme={theme} />
      <main className={mainCls.wrapper}>{children}</main>
      {isRouteLoading && <AppLoading />}
    </div>
  );
};
export default AppLayout;
