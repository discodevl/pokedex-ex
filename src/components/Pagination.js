import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

function Pagination({ pagehandler }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(1160 / 20));
  }, [itemOffset]);

  function handlePageClick({ selected }) {
    const newOffset = (selected * 20) % 1160;
    setItemOffset(newOffset);
    pagehandler(selected + 1);
  }

  return (
    <div className={styles.container}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next &rarr;"
        previousLabel="&larr; previous"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        containerClassName={styles.pagination}
        pageLinkClassName={styles["page-num"]}
        previousLinkClassName={styles["page-num"]}
        nextLinkClassName={styles["page-num"]}
        activeClassName={styles.active}
      />
    </div>
  );
}

export default Pagination;
