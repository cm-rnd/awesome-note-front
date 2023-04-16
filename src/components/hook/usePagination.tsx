import React, { useState } from "react";

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
