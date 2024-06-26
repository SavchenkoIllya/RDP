import ReactPaginate from "react-paginate";
import "./Pagination.css";

/**
 *
 * @param {page} page current page in pagination
 * @param {totalPages} totalPages total amount of pages in pagination
 * @param {onPageChange} onPageChange callback function that takes selectedPage as a parameter and allow you to build your own logic during page changing
 *
 */
export const CustomPagination = ({
  page = 1,
  totalPages = 1,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      initialPage={page - 1}
      className={"pagination"}
      activeClassName={"choosen"}
      pageClassName={"page"}
      previousClassName={"previous"}
      nextClassName={"next"}
      breakLabel="..."
      breakClassName="break"
      nextLabel={Number(page) === totalPages ? null : ">"}
      disableInitialCallback={true}
      onPageChange={onPageChange}
      pageCount={totalPages}
      previousLabel={Number(page) === 1 ? null : "<"}
      renderOnZeroPageCount={null}
    />
  );
};
