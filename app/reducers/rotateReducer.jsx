import _ from 'lodash';

const initialState = {
    x: 50,
    y: 50
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_X':
            return {
                x: ++state.x,
                y: state.y
            };
        case 'INCREMENT_Y':
            return {
                x: state.x,
                y: ++state.y
            };
        default:
            return state;
    }
}