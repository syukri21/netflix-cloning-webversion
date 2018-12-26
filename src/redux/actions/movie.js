import axios from 'axios';
import { ip } from '../../configip';
export function ALL_MOVIES(offset, limit) {
	return {
		type: 'ALL_MOVIES',
		payload: axios.get(`${ip}videos/${offset}/${limit}`)
	};
}

export function RESET_MOVIE() {
	return {
		type: 'RESET_MOVIE'
	};
}

export function GET_EPISODE(series) {
	return {
		type: 'GET_EPISODE',
		payload: axios.get(`${ip}video/series/${series}/null`)
	};
}

export function GET_MOVIE(id) {
	return {
		type: 'GET_MOVIE',
		payload: axios.get(`${ip}video/${id}`)
	};
}
