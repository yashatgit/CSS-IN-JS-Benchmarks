## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 121.68 | 217.48
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 168.63 | 231.65
[react-css](https://github.com/facebook/react) | + | + | 189.21 | 250.67
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 307.71 | 271.36
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 360.29 | 287.57
[styled-components-themed](https://github.com/styled-components/styled-components/tree/v2) | - | + | 492.03 | 325.34
[styletron-simple](https://github.com/rtsao/styletron) | + | - | 424.37 | 355.05
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 616.46 | 385.97
[emotion-extract-static](https://github.com/emotion-js/emotion) | + | + | 656.8 | 392.37
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 588.19 | 396.03
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 634.86 | 402.24
