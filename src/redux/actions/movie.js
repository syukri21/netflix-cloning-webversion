import axios from 'axios';

export function ALL_MOVIES() {
	return {
		type: 'ALL_MOVIES',
		payload: axios.get('http://192.168.0.11:3333/movies')
	};
}

export function GET_MOVIE() {
	return {
		type: 'GET_MOVIE',
		payload: { id: 1, title: 'beranak dalam kolam' }
	};
}
