/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const Table = ({ table, toPercent }) => (
  <div
    css={{
      display: "table",
      marginTop: "10px"
    }}
  >
    {table.map((row, i) => (
      <div css={{ display: "table-row" }} key={i}>
        {row.map((x, j) => (
          <div
            css={{ display: "table-cell", padding: "10px" }}
            key={`${i}${j}`}
            style={{ background: `rgba(74, 174, 53, ${x})` }}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
