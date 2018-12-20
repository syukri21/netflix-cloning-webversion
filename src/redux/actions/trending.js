import axios from 'axios';

export function ALL_TRENDINGS() {
	return {
		type: 'ALL_TRENDINGS',
		payload: axios.get('http://192.168.1.122:3333/api/v1/movies/cached/trending/10')
	};
}
