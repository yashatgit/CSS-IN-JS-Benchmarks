import React from "react";
import { Provider as StyletronProvider, createStyled } from "styletron-react";
import { driver, getInitialStyle } from "styletron-standard";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

const { Provider, Consumer } = React.createContext();

const wrapper = StyledComponent =>
  function withThemeHOC(props) {
    return (
      <Consumer>
        {theme => <StyledComponent {...props} $theme={theme} />}
      </Consumer>
    );
  };

const customStyled = createStyled({ wrapper, getInitialStyle, driver });

const Table = customStyled("div", {
  display: "table",
  marginTop: "10px"
});

const Row = customStyled("div", {
  display: "table-row"
});

const Cell = customStyled("div", props => ({
  display: "table-cell",
  padding: props.$theme.padding,
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

const THEME = {
  padding: "10px"
};
export default ({ table, toPercent }) => (
  <StyletronProvider value={engine}>
    <Provider value={THEME}>
      <TableComponent table={table} toPercent={toPercent} />
    </Provider>
  </StyletronProvider>
);
