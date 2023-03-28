import { PostItemProps } from "@/pages/post";
import Image from "next/image";
import { FC } from "react";
import logo from "../../../public/hw-blog-logo.png";
interface PostListItemProps extends PostItemProps {
  onClickItem?: (postId: string) => void;
}
const PostListItem: FC<PostListItemProps> = (props) => {
  const { title, mainImageUrl, _createdAt, _id: postId, onClickItem } = props;
  const handleClickPostItem = () => {
    onClickItem?.(postId);
  };
  return (
    <div onClick={handleClickPostItem}>
      <Image src={mainImageUrl || logo} width={80} height={80} alt={title} />
      <div>{title}</div>
      <div>{_createdAt}</div>
    </div>
  );
};
export default PostListItem;
