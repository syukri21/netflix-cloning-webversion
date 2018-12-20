import axios from 'axios';

export function ALL_CATEGORIES() {
	return {
		type: 'ALL_CATEGORIES',
		payload: axios.get('http://192.168.1.122:3333/api/v1/movies/categories')
	};
}

export function GET_CATEGORY(category, limit) {
	return {
		type: 'GET_CATEGORY',
		payload: axios.get(`http://192.168.1.122:3333/api/v1/movies/${category}/${limit}`)
	};
}
