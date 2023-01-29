import withGetServerSideProps from "@/hocs/withGetServerSideProps";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

const PostItemPage: NextPage = () => {
  const router = useRouter();
  const { id: postId } = router.query;
  return <>{postId}</>;
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
