import _ from 'lodash';

const initialState = {
    x: 50,
    y: 50,
    z: 50
};


//TODO: fix cloning
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_X':
            state = _.assign(state, { x: ++state.x});
            break;
        case 'INCREMENT_Y':
            state = _.merge(state, { y: ++state.y});
            break;
        case 'INCREMENT_Z':
            state = _.merge(state, { z: ++state.z});
            break;
        default:
            return state;
    }
    return _.clone(state);
}