## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 61.52 | 90.97
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 100.25 | 122.18
[react-css](https://github.com/facebook/react) | + | + | 107.18 | 125.54
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 182.94 | 137.85
[styletron-css](https://github.com/rtsao/styletron) | + | - | 154.94 | 159.95
[styled-components-themed](https://github.com/styled-components/styled-components/tree/v2) | - | + | 262.96 | 159.96
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 245.97 | 169.04
[styletron-themed](https://github.com/rtsao/styletron) | - | - | 245.23 | 177.74
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 333.38 | 186.64
[emotion-theming](https://github.com/emotion-js/emotion) | + | + | 327.76 | 189.5
[styletron-simple](https://github.com/rtsao/styletron) | + | - | 252.29 | 191.05
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 382.05 | 195.99
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 388.54 | 207.92
