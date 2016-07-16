import _ from 'lodash';
import { combineReducers } from 'redux';

import rotateReducer from './rotateReducer.jsx';

const reducers = {
    rotate: rotateReducer
};

export default function appReducer(state, action) {
    return _.reduce(reducers, (state, reducer) => {
        return reducer(state, action);
    }, state);
}
