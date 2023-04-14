import { pageState, paginationState } from "@/atoms/atoms";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const usePagination = (length: number) => {
  const [page, setPage] = useState<number[]>(new Array(length).fill(1));
  const handlePageChange = (index: number, num: number) => {
    const tmpPage = [...page];
    tmpPage[index] = num;
    setPage(tmpPage);
  };
  return { page, setPage, handlePageChange };
};

export default usePagination;
