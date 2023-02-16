import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ usersPage, totalUsers, setCurrent, current }) => {
  const pageNumber = [];
  const pageNumberLimit = 1;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalUsers / usersPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumbers) => {
    setCurrent(pageNumbers);
  };

  const paginateNext = () => {
    setCurrent(current + 1);
    if (current + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const paginatePrev = () => {
    setCurrent(current - 1);

    if ((current - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <ul className="pagination">
      <li
        onClick={() => {
          if (current > 1) {
            paginatePrev();
          }
        }}
        className={current === 1 ? "hide" : "active"}
      >
        Prev
      </li>

      {pageNumber.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <p
              key={number}
              onClick={() => paginate(number)}
              className={current === number ? "active" : ""}
            >
              {number}
            </p>
          );
        }
      })}

      <li
        onClick={() => {
          if (current < pageNumber[pageNumber.length - 1]) {
            paginateNext();
          }
        }}
        className={
          current === pageNumber[pageNumber.length - 1] ? "hide" : "active"
        }
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
