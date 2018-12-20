import axios from 'axios';
import { ip } from '../../configip';
export function ALL_MOVIES() {
	return {
		type: 'ALL_MOVIES',
		payload: axios.get(`${ip}`)
	};
}

export function GET_MOVIE() {
	return {
		type: 'GET_MOVIE',
		payload: { id: 1, title: 'beranak dalam kolam' }
	};
}
