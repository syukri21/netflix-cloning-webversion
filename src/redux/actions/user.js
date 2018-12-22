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
			password
		},
		{
			'Content-Type': 'application/json'
		}
	)
});
