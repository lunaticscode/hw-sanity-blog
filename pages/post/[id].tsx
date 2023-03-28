import PostItem from "@/components/page/post/PostItem";
import withGetServerSideProps from "@/hocs/withGetServerSideProps";
import { QUERY, scFetch } from "@/utils/sanityClient";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

/** 
 * postData
 * {
  _createdAt: '2023-03-27T14:30:14Z',
  _id: '2c6e8964-5fbb-4839-9319-35606c26d6ba',
  _rev: 'i9G00Zy23uDKGSUliPwifI',
  _type: 'post',
  _updatedAt: '2023-03-28T11:07:14Z',
  body: [
    {
      _key: '69a92650dbdc_deduped_1',
      _type: 'block',
      children: [Array],
      markDefs: [],
      style: 'normal'
    }
  ],
  mainImage: {
    _type: 'image',
    asset: {
      _ref: 'image-67ed9ebf3f96f2fef0445f9effedd538f87cf2b7-361x333-png',
      _type: 'reference'
    }
  },
  slug: { _type: 'slug', current: 'html' },
  title: 'test3'
}
 */

const prefixCls = "post-layout";
interface PostItemPageProps {
  postData: any;
}
const PostItemPage: NextPage<PostItemPageProps> = ({ postData }) => {
  // const router = useRouter();
  // const { id: postId } = router.query;
  useEffect(() => {
    console.log(postData);
  }, [postData]);
  return (
    <div className={`${prefixCls}-wrapper`}>
      <PostItem title={"title"} body={"body"} />
    </div>
  );
};

export default PostItemPage;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (context) => {
    const path = context.resolvedUrl;
    const postId = path.includes("/post/") && path.split("/post/")[1];
    let postTitle = "(404 NotFound)";
    let resultPostData = null;
    if (postId) {
      const [postData] = await scFetch(QUERY.GET_CONTENT_BY_ID(postId));
      postTitle = postData.title;
      resultPostData = postData;
    }
    return {
      props: {
        seoTitle: `post > ${postTitle}`,
        seoDesc: "post-desc",
        postData: resultPostData,
      },
    };
  }
);
