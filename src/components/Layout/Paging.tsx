import "./Paging.css";
import Pagination from "react-js-pagination";

interface IPaging {
  page: number;
  totalElement: number;
  handlePageChange: (page: number) => void;
}

const Paging = ({ page, totalElement, handlePageChange }: IPaging) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={totalElement}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
