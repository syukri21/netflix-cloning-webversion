import { ip } from '../../configip';
import axios from 'axios';

export const ADD_FAVOURITE = (series, token) => {
	return {
		type: 'ADD_FAVOURITE',
		payload: axios.post(`${ip}user/favorite/`, { series }, { headers: { Authorization: `Bearer ${token}` } })
	};
};

export const DELETE_FAVOURITE = (id, token) => ({
	type: 'DELETE_FAVOURITE',
	payload: axios.delete(`${ip}user/favorite/${id}`, { headers: { Authorization: `Bearer ${token}` } })
});

export const ALL_FAVOURITES = (token) => ({
	type: 'ALL_FAVOURITES',
	payload: axios.get(`${ip}user/favorites`, { headers: { Authorization: `Bearer ${token}` } })
});

export const RESET_FAVOURITES = (token) => ({
	type: 'RESET_FAVOURITES'
});
