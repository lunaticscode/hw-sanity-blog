import PostItem from "@/components/page/post/PostItem";
import withGetServerSideProps from "@/hocs/withGetServerSideProps";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

const prefixCls = "post-layout";

const PostItemPage: NextPage = () => {
  const router = useRouter();
  const { id: postId } = router.query;
  return (
    <div className={`${prefixCls}-wrapper`}>
      <PostItem title={"title"} body={"body"} />
    </div>
  );
};

export default PostItemPage;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (context) => {
    return {
      props: {
        seoTitle: "post-title",
        seoDesc: "post-desc",
      },
    };
  }
);
