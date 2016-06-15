import { store } from '../store/store.jsx';

export function incrementY() {
	store.dispatch({ type: 'INCREMENT_Y' });
}

export function incrementX() {
	store.dispatch({ type: 'INCREMENT_X' });
}
