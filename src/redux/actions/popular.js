import axios from 'axios';
import { ip } from '../../configip';
export function ALL_POPULARS(limit) {
	return {
		type: 'ALL_POPULARS',
		payload: axios.get(`${ip}video/series/popular/${limit}`)
	};
}
