import React, { useState } from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";

const Paging = ({ page, setPage, totalElement }: any) => {
  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page, "페이징 부분에서 page");
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={totalElement}
      pageRangeDisplayed={4}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
