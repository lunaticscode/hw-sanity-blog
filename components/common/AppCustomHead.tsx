import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";

const META_CONTENT = {
  url: process.env.NEXT_PUBLIC_APP_URL,
  title: "<HW/>",
  type: "website",
};

interface SeoProps {
  seoTitle?: string;
  seoDesc?: string;
  seoKeywords?: Array<string>;
}
const AppHead: FC<SeoProps> = ({ seoTitle, seoDesc, seoKeywords }) => {
  const router = useRouter();
  const urlPath = useMemo(() => router.asPath, [router.asPath]);
  return (
    <Head>
      <title>{`${META_CONTENT.title} ${seoTitle}`}</title>
      <meta name="title" content={`${seoTitle}`} />
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={seoKeywords?.join(", ")} />
      <meta
        property="og:title"
        content={`${META_CONTENT.title} > ${seoTitle}`}
      />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:url" content={`${META_CONTENT.url}${urlPath}`} />
      <meta property="og:site_name" content={META_CONTENT.title} />
      <meta property="og:type" content={META_CONTENT.type} />
    </Head>
  );
};
export default AppHead;
