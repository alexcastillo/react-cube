# 3D React Cube

Standalone, lightweight react-component without dependencies.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import Cube from 'react-cube';

const cubePosition = { x: 30, y: 30, z: 30 };

ReactDOM.render(
    <div>
        <Cube size={300} colours={['red', 'green', 'pink', 'blue', 'yellow', 'orange']} position={cubePosition} />
    </div>,
    document.querySelector('#app-container')
);

```

![Cube](https://i.imgur.com/nltT18H.png)
