import { NextPage } from "next";
import { useRouter } from "next/router";

const PostItemPage: NextPage = () => {
  const router = useRouter();
  const { id: postId } = router.query;
  return <>{postId}</>;
};

export default PostItemPage;
