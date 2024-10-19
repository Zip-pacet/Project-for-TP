import React, { useMemo } from "react";
import "./pagination.css";
import { getPageArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = useMemo(() => getPageArray(totalPages), [totalPages]);

  return (
    <div className='page__wrapper'>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
