import axios from 'axios';
import { ip } from '../../configip';

export function SAVE_KEYWORD(payload) {
	return {
		type: 'SAVE_KEYWORD',
		payload: payload
	};
}

export const GET_SEARCH = (payload) => {
	axios.get(`${ip}movies/search?q=${payload}`).then((e) => console.log(e));
	return {
		type: 'GET_SEARCH',
		payload: axios.get(`${ip}movies/search?q=${payload}`)
	};
};
