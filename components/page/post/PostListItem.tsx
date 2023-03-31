import { PostItemProps } from "@/pages/post";
import Image from "next/image";
import { FC } from "react";
import logo from "../../../public/hw-blog-logo.png";
const prefixCls = "post-list-item";
const wrapperCls = (type: string) => {
  const mapTypeToCls: { [type: string]: string } = {
    layout: `wrapper`,
    image: `image-wrapper`,
    content: `content-wrapper`,
    title: `title-wrapper`,
    date: `date-wrapper`,
    tags: `tags-wrapper`,
    tagItem: `tag-item-wrapper`,
  };
  return `${prefixCls}-${mapTypeToCls[type]}`;
};
interface PostListItemProps extends PostItemProps {
  onClickItem?: (postId: string) => void;
}
const PostListItem: FC<PostListItemProps> = (props) => {
  const { title, mainImageUrl, _createdAt, _id, tags, onClickItem } = props;
  const handleClickPostItem = () => {
    onClickItem?.(_id);
  };
  return (
    <div className={wrapperCls("layout")} onClick={handleClickPostItem}>
      <div className={wrapperCls("image")}>
        <Image src={mainImageUrl || logo} width={80} height={80} alt={title} />
      </div>
      <div className={wrapperCls("content")}>
        <div className={wrapperCls("title")}>{title}</div>
        {tags && (
          <div className={wrapperCls("tags")}>
            {tags.map((tag: string, index: number) => (
              <div key={tag + index} className={wrapperCls("tagItem")}>
                #{tag}
              </div>
            ))}
          </div>
        )}
        <div className={wrapperCls("date")}>
          {_createdAt.split("T")[0].replace(/-/g, ".")}
        </div>
      </div>
    </div>
  );
};
export default PostListItem;
