import withGetServerSideProps from "@/hocs/withGetServerSideProps";
import { GetServerSideProps, NextPage } from "next";

const PostIndexPage: NextPage = () => {
  return <>Index</>;
};
export default PostIndexPage;
export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (context) => {
    return {
      props: {
        seoTitle: "POST",
        seoDesc: "hw-blog's Post",
      },
    };
  }
);
