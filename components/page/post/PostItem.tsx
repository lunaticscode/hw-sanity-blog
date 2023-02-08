import { FC } from "react";

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
  body?: string;
  tags?: Array<string>;
}

const setTags = (tags: PostItemProps["tags"]) => {
  return <></>;
};

const PostItem: FC<PostItemProps> = (props) => {
  const { title, body, tags } = props;
  return (
    <div className={wrapperCls("layout")}>
      <article className={wrapperCls("article")}>
        <section className={wrapperCls("title")}>{title}</section>
        <section className={wrapperCls("body")}>{body}</section>
        <section className={wrapperCls("tags")}>
          {tags && tags.length && setTags(tags)}
        </section>
      </article>
    </div>
  );
};
export default PostItem;
