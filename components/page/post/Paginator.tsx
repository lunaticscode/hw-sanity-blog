import { FC, useCallback } from "react";

const prefixCls = "paginator-layout";
const wrapperCls = (type: string) => {
  const mapTypeToCls: { [type: string]: string } = {
    layout: `wrapper`,
    buttonsWrapper: `buttons-wrapper`,
    pageButton: `page-button`,
  };
  return `${prefixCls}-${mapTypeToCls[type]}`;
};

// paginator-layout
interface PaginatorProps {
  onClickNext: () => void;
  onClickPrev: () => void;
  // onClickPage: (page: number) => void;
  onClickPageNumber: (page: number) => void;
  nowPageNumber: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  pages: Array<number>;
}
const Paginator: FC<PaginatorProps> = (props) => {
  const {
    onClickPrev,
    onClickPageNumber,
    onClickNext,
    nowPageNumber,
    isFirstPage,
    isLastPage,
    pages,
  } = props;

  const setPageButtonCls = useCallback(
    (active: boolean) =>
      active ? `${wrapperCls("pageButton")} active` : wrapperCls("pageButton"),
    []
  );

  const handleClickPage = useCallback(
    (_page: number) => {
      if (nowPageNumber === _page) return;
      onClickPageNumber(_page);
    },
    [nowPageNumber, onClickPageNumber]
  );

  return pages.length ? (
    <div className={wrapperCls("layout")}>
      <button disabled={isFirstPage} onClick={onClickPrev}>
        prev
      </button>
      {pages?.map((page) => {
        return (
          <div
            onClick={() => handleClickPage(page)}
            className={setPageButtonCls(page === nowPageNumber)}
            key={`page-button-${page}`}
          >
            {page}
          </div>
        );
      })}
      <button disabled={isLastPage} onClick={onClickNext}>
        next
      </button>
    </div>
  ) : null;
};
export default Paginator;
