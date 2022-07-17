import React from "react";
import "../styles/Pagination.scss";
import "../styles/_global.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Pagination() {
  return (
    <div class="pagination-box">
      <ul class="pagination">
        <li>
          <a href="#">
            <ChevronLeftIcon />
          </a>
        </li>
        <li>
          <a href="#" class="active">
            1
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">
            <ChevronRightIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
