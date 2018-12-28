import _ from 'lodash';
const initialState = {
	results: [],
	data: {},
	isLoading: false,
	isError: false
};

export default function favouriteReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_FAVOURITE_PENDING':
			return { ...state, isLoading: true };
		case 'ADD_FAVOURITE_FULFILLED':
			return { ...state, isLoading: false, isError: false };
		case 'ADD_FAVOURITE_REJECTED':
			return { ...state, isLoading: false, isError: true };
		case 'DELETE_FAVOURITE_PENDING':
			return { ...state, isLoading: true };
		case 'DELETE_FAVOURITE_FULFILLED':
			return { ...state, isLoading: false, isError: false };
		case 'DELETE_FAVOURITE_REJECTED':
			return { ...state, isLoading: false, isError: true };
		case 'ALL_FAVOURITES_PENDING':
			return { ...state, isLoading: true };
		case 'ALL_FAVOURITES_FULFILLED':
			return {
				...state,
				isLoading: false,
				results: _.uniqBy(action.payload.data, (e) => e.name_series),
				isError: false
			};
		case 'ALL_FAVOURITES_REJECTED':
			return { ...state, isLoading: false, isError: true };
		case 'RESET_FAVOURITES':
			return { ...state, isLoading: false, isError: false, results: [], data: {} };
		default:
			return state;
	}
}
