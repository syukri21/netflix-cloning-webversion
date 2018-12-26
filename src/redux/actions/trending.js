import axios from 'axios';
import { ip } from '../../configip';
export function ALL_TRENDINGS() {
	return {
		type: 'ALL_TRENDINGS',
		payload: axios.get(`${ip}videos/cached/trending/10`)
	};
}
