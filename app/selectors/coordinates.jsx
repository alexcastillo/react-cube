import _ from 'lodash';

export function rotateX(appState) {
    return _.get(appState, 'x');
}

export function rotateY(appState) {
    return _.get(appState, 'y');
}
