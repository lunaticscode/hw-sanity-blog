import { useCallback, useMemo, useState } from "react";

const usePaginator = (totalCnt: number, width: number = 1000) => {
  const responsiveDevide = useMemo(() => {
    if (width < 600) return 5;
    if (width >= 600 && width) return 10;
    return 5;
  }, [width]);

  const [nowPageNumber, setNowPageNumber] = useState(1);
  const blockFirstPageNumber = useMemo(
    () =>
      (Math.ceil(nowPageNumber / responsiveDevide) - 1) * responsiveDevide + 1,
    [nowPageNumber, responsiveDevide]
  );

  const lastPageNumber = useMemo(
    () => Math.ceil(totalCnt / responsiveDevide),
    [totalCnt, responsiveDevide]
  );

  const blockLastPageNumber = useMemo(
    () =>
      Math.ceil(nowPageNumber / responsiveDevide) * responsiveDevide >=
      lastPageNumber
        ? lastPageNumber
        : Math.ceil(nowPageNumber / responsiveDevide) * responsiveDevide,
    [nowPageNumber, responsiveDevide, lastPageNumber]
  );

  const pages = useMemo(
    () =>
      Array.from(
        { length: blockLastPageNumber - blockFirstPageNumber + 1 },
        (_, index) => blockFirstPageNumber + index
      ),
    [blockFirstPageNumber, blockLastPageNumber]
  );
  console.log(pages);

  const isFirstPage = useMemo(() => nowPageNumber === 1, [nowPageNumber]);

  const isLastPage = useMemo(
    () => nowPageNumber === lastPageNumber,
    [nowPageNumber, lastPageNumber]
  );

  const onClickPrev = useCallback(() => {
    if (isFirstPage) return;
    setNowPageNumber(nowPageNumber - 1);
  }, [isFirstPage, nowPageNumber]);

  const onClickPage = useCallback((page: number) => {
    setNowPageNumber(page);
  }, []);

  const onClickNext = useCallback(() => {
    if (isLastPage) return;
    setNowPageNumber(nowPageNumber + 1);
  }, [isLastPage, nowPageNumber]);

  return {
    onClickPrev,
    onClickPage,
    onClickNext,
    setNowPageNumber,
    nowPageNumber,
    isFirstPage,
    isLastPage,
    pages,
  };
};
export default usePaginator;
