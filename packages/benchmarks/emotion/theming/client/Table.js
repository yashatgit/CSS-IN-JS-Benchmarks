import React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";

const Table = styled("div")`
  display: table;
  margin-top: 10px;
`;

const Row = styled("div")`
  display: table-row;
`;

const Cell = styled("div")`
  display: table-cell;
  padding: 10px;
  color: ${props => props.theme.colors.primary};
  background: rgba(74, 174, 53, ${({ alpha }) => alpha});
`;

const theme = {
  colors: {
    primary: "hotpink"
  }
};
export default ({ table, toPercent }) => (
  <ThemeProvider theme={theme}>
    <Table>
      {table.map((row, i) => (
        <Row key={i}>
          {row.map((alpha, j) => (
            <Cell key={`${i}${j}`} alpha={alpha}>
              {toPercent(alpha)}
            </Cell>
          ))}
        </Row>
      ))}
    </Table>
  </ThemeProvider>
);
