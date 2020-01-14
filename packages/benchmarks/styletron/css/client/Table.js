import React from "react";
import { Provider as StyletronProvider, useStyletron } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

const TableComponent = ({ table, toPercent }) => {
  const [css] = useStyletron();

  return (
    <div className={css({ display: "table", marginTop: "10px" })}>
      {table.map((row, i) => (
        <div key={i} className={css({ display: "table-row" })}>
          {row.map((x, j) => (
            <div
              className={css({
                display: "table-cell",
                padding: "10px",
                background: `rgba(74, 174, 53, ${x})`
              })}
              key={`${i}${j}`}
              value={x}
            >
              {toPercent(x)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ({ table, toPercent }) => (
  <StyletronProvider value={engine}>
    <TableComponent table={table} toPercent={toPercent} />
  </StyletronProvider>
);
