import React from 'react';
import { render } from 'react-dom';
import Container from './components/cubeContainer/container.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';

render(
  <div>
    <Provider store={store}>
      <Container />
    </Provider>
  </div>,
  document.getElementById('react-main-app')
);
