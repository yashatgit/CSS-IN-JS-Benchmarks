import React from "react";
import { Provider as StyletronProvider, styled } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

const Table = styled("div", {
  display: "table",
  marginTop: "10px"
});

const Row = styled("div", {
  display: "table-row"
});

const Cell = styled("div", props => ({
  display: "table-cell",
  padding: "10px",
  background: `rgba(74, 174, 53, ${props.value})`
}));

const TableComponent = ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell key={`${i}${j}`} value={x}>
            {toPercent(x)}
          </Cell>
        ))}
      </Row>
    ))}
  </Table>
);

export default ({ table, toPercent }) => (
  <StyletronProvider value={engine}>
    <TableComponent table={table} toPercent={toPercent} />
  </StyletronProvider>
);
