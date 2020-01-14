## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 114.85 | 143.16
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 197.84 | 166.6
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 138.48 | 171.24
[react-css](https://github.com/facebook/react) | + | + | 157.41 | 172.7
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 288.99 | 207.08
[styled-components-themed](https://github.com/styled-components/styled-components/tree/v2) | - | + | 306.09 | 215.07
[emotion-extract-static](https://github.com/emotion-js/emotion) | + | + | 390.81 | 232.59
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 386.42 | 248.65
[styletron-themed](https://github.com/rtsao/styletron) | - | - | 362.39 | 249.02
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 370.12 | 249.76
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 534.56 | 253.63
[styletron-css](https://github.com/rtsao/styletron) | + | - | 228.2 | 270.79
[styletron-simple](https://github.com/rtsao/styletron) | + | - | 346.58 | 270.95
