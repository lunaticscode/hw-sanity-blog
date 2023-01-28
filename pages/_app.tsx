import AppError from "@/components/common/AppError";
import AppLayout from "@/components/common/AppLayout";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "styles/index.scss";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={AppError}>
      <Suspense fallback={<div>loading....</div>}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Suspense>
    </ErrorBoundary>
  );
}
