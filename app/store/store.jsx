import { createStore } from 'redux';
import { reducer } from '../reducers/app_reducer.jsx';

export const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
