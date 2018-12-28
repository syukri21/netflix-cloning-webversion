import { ADD_FAVOURITE, DELETE_FAVOURITE, ALL_FAVOURITES } from '../redux/actions/favourites';
import store from '../redux/store';

const getAllFavourites = async (token) => {
	if (token !== 'null' || token !== '' || token !== undefined) {
		await store.dispatch(ALL_FAVOURITES(token));
	}
};

export default getAllFavourites;
