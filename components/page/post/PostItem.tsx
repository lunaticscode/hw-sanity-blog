import { FC } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { santiyClient } from "@/utils/sanityClient";
import PostCodeBox from "./CodeBox";

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
}

const components = {
  types: {
    code: (props: any) => {
      return <PostCodeBox code={props.value.code} language={props.language} />;
    },
    image: (props: any) => {
      return (
        <div style={{ textAlign: "center" }}>
          <img src={imgUrlBuilder.image(props.value).url()} />
        </div>
      );
    },
  },
};

const setTags = (tags: PostItemProps["tags"]) => {
  return <></>;
};

const PostItem: FC<PostItemProps> = (props) => {
  const { title, body, tags } = props;
  return (
    <div className={wrapperCls("layout")}>
      <article className={wrapperCls("article")}>
        <section className={wrapperCls("title")}>{title}</section>
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
export default PostItem;
