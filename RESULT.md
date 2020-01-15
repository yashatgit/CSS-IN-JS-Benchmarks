## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 64.88 | 89.18
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 97.22 | 119.83
[react-css](https://github.com/facebook/react) | + | + | 107.75 | 124.42
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 177.45 | 137.26
[styled-components-themed](https://github.com/styled-components/styled-components/tree/v2) | - | + | 239.61 | 158.79
[styletron-css](https://github.com/rtsao/styletron) | + | - | 162.26 | 165.3
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 234.29 | 171.98
[styletron-simple](https://github.com/rtsao/styletron) | + | - | 247.09 | 189.17
[emotion-extract-static](https://github.com/emotion-js/emotion) | + | + | 322.26 | 190.13
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 370.56 | 204.83
[styletron-themed](https://github.com/rtsao/styletron) | - | - | 254.47 | 209.57
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 362.03 | 213.42
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 365.95 | 226.71
