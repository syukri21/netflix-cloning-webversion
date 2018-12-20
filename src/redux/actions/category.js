import axios from 'axios';

export function ALL_CATEGORIES() {
	return {
		type: 'ALL_CATEGORIES',
		payload: axios.get('http://192.168.0.11:3333/categories')
	};
}

export function GET_CATEGORY(id) {
	return {
		type: 'GET_CATEGORY',
		payload: axios.get(`http://192.168.0.11:3333/category/${id}`)
	};
}
