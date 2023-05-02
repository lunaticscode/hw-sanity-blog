import { FC } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { santiyClient } from "@/utils/sanityClient";
import PostCodeBox from "./CodeBox";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import imageUrlBuilder from "@sanity/image-url";
const imgUrlBuilder = imageUrlBuilder(santiyClient);

const prefixCls = "post-item";
const wrapperCls = (type: string) => {
  const mapTypeToCls: { [type: string]: string } = {
    layout: `wrapper`,
    article: `article-wrapper`,
    title: `article-title-wrapper`,
    body: `article-body-wrapper`,
    tags: `article-tags-wrapper`,
  };
  return `${prefixCls}-${mapTypeToCls[type]}`;
};

export interface PostItemProps {
  title?: string;
  body?: Array<any>;
  tags?: Array<string>;
  createdAt?: string;
}

const components = {
  types: {
    code: (props: any) => {
      return (
        <div style={{ margin: "20px 0px" }}>
          <PostCodeBox code={props.value.code} language={props.language} />
        </div>
      );
    },
    image: (props: any) => {
      return (
        <div style={{ textAlign: "center", margin: "10px 0px" }}>
          <Zoom>
            <img
              style={{ maxWidth: "70%", maxHeight: "400px" }}
              src={imgUrlBuilder.image(props.value).url()}
            />
          </Zoom>
        </div>
      );
    },
  },
};

const setTags = (tags: PostItemProps["tags"]) => {
  return <></>;
};

const PostBody: FC<PostItemProps> = (props) => {
  const { title, body, tags, createdAt } = props;
  console.log(props);
  return (
    <div className={wrapperCls("layout")}>
      <article className={wrapperCls("article")}>
        <section className={wrapperCls("title")}>
          <h2>{title}</h2>
        </section>
        <section className={wrapperCls("body")}>
          <PortableText value={body} components={components} />
        </section>
        <section className={wrapperCls("tags")}>
          {tags && tags.length && setTags(tags)}
        </section>
      </article>
    </div>
  );
};
export default PostBody;
