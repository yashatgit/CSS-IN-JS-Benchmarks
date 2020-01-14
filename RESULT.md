## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 68.48 | 101.45
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 112.91 | 142.08
[react-css](https://github.com/facebook/react) | + | + | 123.82 | 145.05
[styled-components-themed](https://github.com/styled-components/styled-components/tree/v2) | - | + | 308.03 | 184.73
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 205.51 | 185.09
[styletron-css](https://github.com/rtsao/styletron) | + | - | 174.08 | 185.87
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 294.89 | 199
[styletron-simple](https://github.com/rtsao/styletron) | + | - | 264.29 | 201.64
[styletron-themed](https://github.com/rtsao/styletron) | - | - | 271.9 | 205.31
[emotion-extract-static](https://github.com/emotion-js/emotion) | + | + | 410.22 | 226.26
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 424.11 | 236.48
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 529.49 | 262.13
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 421.75 | 274.15
