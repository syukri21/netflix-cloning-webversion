import axios from 'axios';
import { ip } from '../../configip';

export const USER_REGISTER = (name, username, email, password) => ({
	type: 'USER_REGISTER',
	payload: axios.post(
		`${ip}register`,
		{
			name,
			username,
			email,
			password,
			app_id: 'website'
		},
		{
			'Content-Type': 'application/json'
		}
	)
});

export const USER_LOGIN = (email, password) => ({
	type: 'USER_LOGIN',
	payload: axios.post(
		`${ip}login`,
		{
			email,
			password
		},
		{
			'Content-Type': 'application/json'
		}
	)
});

export const GET_USER = (token) => {
	return {
		type: 'GET_USER',
		payload: axios.get(`${ip}user/profile`, { headers: { Authorization: `Bearer ${token}` } })
	};
};
