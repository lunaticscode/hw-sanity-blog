import AppError from "@/components/common/AppError";
import AppCustomHead from "@/components/common/AppCustomHead";
import AppLayout from "@/components/common/AppLayout";
import type { AppProps } from "next/app";
import { Suspense, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "styles/index.scss";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

interface PageSeoProps {
  seoTitle?: string;
  seoDesc?: string;
  seoKeywords?: Array<string>;
}

export default function App({ Component, pageProps }: AppProps<PageSeoProps>) {
  const router = useRouter();
  const isPostItemPage = useMemo(
    () => router.asPath.includes("/post/"),
    [router.asPath]
  );
  return (
    <RecoilRoot>
      <ErrorBoundary FallbackComponent={AppError}>
        <Suspense fallback={<div>loading....</div>}>
          {isPostItemPage && <AppCustomHead {...pageProps} />}
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}
