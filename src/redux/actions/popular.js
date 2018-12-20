import axios from 'axios';

export function ALL_POPULARS() {
	return {
		type: 'ALL_POPULARS',
		payload: axios.get('http://192.168.1.122:3333/api/v1/movies/cached/popular/10')
	};
}
