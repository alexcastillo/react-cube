import React from 'react';
import { render } from 'react-dom';
import Container from './components/cubeContainer/container.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';

render(
    <Provider store={store}>
      <Container />
    </Provider>,
  document.getElementById('react-main-app')
);
