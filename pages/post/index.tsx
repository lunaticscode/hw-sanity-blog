import AppLoading from "@/components/common/AppLoading";
import Paginator from "@/components/page/post/Paginator";
import PostListItem from "@/components/page/post/PostListItem";
import withGetServerSideProps from "@/hocs/withGetServerSideProps";
import usePaginator from "@/hooks/usePaginator";
import useScreenWidth from "@/hooks/useScreenWidth";
import { QUERY, scFetch } from "@/utils/sanityClient";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export interface PostItemProps {
  mainImageUrl: string | null;
  title: string;
  _createdAt: string; //"2023-01-20T05:08:45Z";
  _id: string;
  tags: Array<string> | null;
}

interface PostIndexPageProps {
  postListCnt: number;
  postList: Array<PostItemProps>;
}

const DEFAULT_PAGE_DEVIDER = 5; //* TODO:: width 기준으로 5 <-> 10 <-> 15
const PostIndexPage: NextPage<PostIndexPageProps> = (props) => {
  const { postList: initPostList, postListCnt: initPostListCnt } = props;
  const router = useRouter();
  const [postList, setPostList] = useState<Array<PostItemProps>>(initPostList);
  const [totalCnt, setTotalCnt] = useState<number>(initPostListCnt);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { width: nowScreenWidth } = useScreenWidth();
  const { setNowPageNumber, ...paginatorProps } = usePaginator(
    totalCnt,
    nowScreenWidth
  );

  const getAllContentCnt = useCallback(async (pageNumber: number) => {
    setIsLoading(true);
    const [
      { status: getPostListStatus, ...postListData },
      { status: getPostAllCntStatus, ...allCnt },
    ] = await Promise.allSettled([
      scFetch(QUERY.GET_POST_LIST(pageNumber)),
      scFetch(QUERY.GET_POST_ALL_CNT),
    ]);
    if (
      getPostListStatus === "fulfilled" &&
      getPostAllCntStatus === "fulfilled"
    ) {
      setTotalCnt("value" in allCnt ? allCnt.value : 0);
      setPostList("value" in postListData ? postListData.value : []);
    }
    setIsLoading(false);
  }, []);

  const handleClickPostItem = (postId: string) => {
    console.log(postId);
    router.push(`/post/${postId}`);
  };

  const handleClickPageNumber = (pageNumber: number) => {
    setNowPageNumber(pageNumber);
    getAllContentCnt(pageNumber);
  };

  return (
    <>
      {isLoading && <AppLoading />}
      {postList?.map((postProps) => (
        <PostListItem
          key={postProps._id}
          {...postProps}
          onClickItem={handleClickPostItem}
        />
      ))}

      <Paginator
        {...paginatorProps}
        onClickPageNumber={handleClickPageNumber}
      />
    </>
  );
};
export default PostIndexPage;
export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (context) => {
    const postUrl = context.resolvedUrl;
    const pageNumber = "";
    const [
      { status: getPostListStatus, ...postListData },
      { status: getPostAllCntStatus, ...allCnt },
    ] = await Promise.allSettled([
      scFetch(QUERY.GET_POST_LIST(1)),
      scFetch(QUERY.GET_POST_ALL_CNT),
    ]);
    const postListCnt = "value" in allCnt ? allCnt.value : 0;
    const postList = "value" in postListData ? postListData.value : [];
    return {
      props: {
        seoTitle: "POST",
        seoDesc: "hw-blog's Post",
        postListCnt,
        postList,
      },
    };
  }
);
