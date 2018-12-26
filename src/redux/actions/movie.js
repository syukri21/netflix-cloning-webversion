import axios from 'axios';
import { ip } from '../../configip';
export function ALL_MOVIES() {
	return {
		type: 'ALL_MOVIES',
		payload: axios.get(`${ip}videos`)
	};
}

export function GET_MOVIE(id) {
	return {
		type: 'GET_MOVIE',
		payload: axios.get(`${ip}video/${id}`)
	};
}
