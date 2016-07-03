import _ from 'lodash';

const initialState = {
    x: 50,
    y: 50
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_X':
            return _.merge(state, { x: ++state.x });
        case 'INCREMENT_Y':
            return _.merge(state, { y: ++state.y });
        default:
            return state;
    }
}