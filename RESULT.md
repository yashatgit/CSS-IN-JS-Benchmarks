## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 65.24 | 97.28
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 103.88 | 124.05
[react-css](https://github.com/facebook/react) | + | + | 110.51 | 134.55
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 182.28 | 152.12
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 258.06 | 161.48
[styled-components-themed](https://github.com/styled-components/styled-components/tree/v2) | - | + | 262.14 | 168.73
[styletron-css](https://github.com/rtsao/styletron) | + | - | 162.72 | 181.38
[styletron-simple](https://github.com/rtsao/styletron) | + | - | 247.63 | 183.6
[emotion-extract-static](https://github.com/emotion-js/emotion) | + | + | 384.14 | 198.57
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 355.26 | 205.33
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 376.41 | 207.27
[styletron-themed](https://github.com/rtsao/styletron) | - | - | 261.25 | 208.91
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 370.8 | 215.3
