import { ip } from '../../configip';
import axios from 'axios';

export const GET_FEATURED = () => ({
	type: 'GET_FEATURED',
	payload: axios.get(`${ip}videos/cached/featured/0`)
});
