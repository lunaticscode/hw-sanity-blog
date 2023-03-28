import Paginator from "@/components/page/post/Paginator";
import PostListItem from "@/components/page/post/PostListItem";
import withGetServerSideProps from "@/hocs/withGetServerSideProps";
import usePaginator from "@/hooks/usePaginator";
import useScreenWidth from "@/hooks/useScreenWidth";
import { QUERY, scFetch } from "@/utils/sanityClient";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export interface PostItemProps {
  mainImageUrl: string | null;
  title: string;
  _createdAt: string; //"2023-01-20T05:08:45Z";
  _id: string;
}

const DEFAULT_PAGE_DEVIDER = 5; //* TODO:: width 기준으로 5 <-> 10 <-> 15
const PostIndexPage: NextPage = () => {
  const router = useRouter();
  const [postList, setPostList] = useState<Array<PostItemProps>>([]);
  const [totalCnt, setTotalCnt] = useState<number>(0);
  const { width: nowScreenWidth } = useScreenWidth();
  console.log({ nowScreenWidth });
  const { setNowPageNumber, ...paginatorProps } = usePaginator(
    totalCnt,
    nowScreenWidth
  );

  const { nowPageNumber } = paginatorProps;

  const getAllContentCnt = useCallback(async () => {
    const [
      { status: getPostListStatus, ...postListData },
      { status: getPostAllCntStatus, ...allCnt },
    ] = await Promise.allSettled([
      scFetch(QUERY.GET_POST_LIST(nowPageNumber)),
      scFetch(QUERY.GET_POST_ALL_CNT),
    ]);

    if (
      getPostListStatus === "fulfilled" &&
      getPostAllCntStatus === "fulfilled"
    ) {
      setTotalCnt("value" in allCnt ? allCnt.value : 0);
      setPostList("value" in postListData ? postListData.value : []);
    }
  }, [nowPageNumber]);

  const handleClickPostItem = (postId: string) => {
    console.log(postId);
    router.push(`/post/${postId}`);
  };

  useEffect(() => {
    getAllContentCnt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      PostIndex
      {postList?.map((postProps, index) => (
        <PostListItem
          key={postProps._id}
          {...postProps}
          onClickItem={handleClickPostItem}
        />
      ))}
      <Paginator {...paginatorProps} />
    </>
  );
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
