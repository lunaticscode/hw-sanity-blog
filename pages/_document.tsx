import { NextPage } from "next";
import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
type Pages = "/404" | "/post" | "/profile" | "none";
const META_DATA: Record<
  Pages,
  { title: string; desc: string; keywords: Array<string> }
> = {
  "/404": {
    title: "",
    desc: "",
    keywords: [],
  },
  "/post": {
    title: "",
    desc: "",
    keywords: [],
  },
  "/profile": {
    title: "",
    desc: "",
    keywords: [],
  },
  none: {
    title: "",
    desc: "humanwater's blog",
    keywords: ["web developer", "humanwater", "dev blog"],
  },
};
const Document: NextPage<DocumentProps> = (props) => {
  const { buildManifest, __NEXT_DATA__: pageData } = props;
  const { page: nowPath } = pageData;
  const builtPages = Object.keys(buildManifest.pages);
  const nowRootPath = `/${nowPath.split("/")[1]}`;
  const isValidPage = builtPages.includes(nowRootPath);
  const isPostItemPage = nowPath === "/post/[id]";
  const seoPath = isValidPage ? nowRootPath : "none";
  const { title, desc, keywords } = META_DATA[seoPath as Pages];
  return (
    <Html>
      <Head>
        {isPostItemPage ? null : (
          <>
            <meta name="title" content={`hwblog-${title}`} />
            <meta name="description" content={`hwblog-${desc}`} />
            <meta name="keywords" content={keywords.join(", ")} />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
