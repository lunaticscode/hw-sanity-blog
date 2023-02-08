import withGetServerSideProps from "@/hocs/withGetServerSideProps";
import { getLatestContent, getPostAllCnt } from "@/utils/sanityClient";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";

const PostIndexPage: NextPage = () => {
  const getAllContentCnt = async () => {
    const result = await getPostAllCnt();
    console.log(result);
  };
  const getContent = async () => {
    const result = await getLatestContent();
    console.log(result);
  };
  useEffect(() => {
    getContent();
    getAllContentCnt();
  }, []);
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
