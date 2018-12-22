const initialState = {
	results: [],
	data: {},
	regist: {},
	isLoading: false,
	isError: false
};

export default function trendingReducer(state = initialState, action) {
	switch (action.type) {
		case 'USER_REGISTER_PENDING':
			return { ...state, isLoading: true, isError: false };
		case 'USER_REGISTER_FULFILLED':
			return { ...state, isLoading: false, regist: action.payload.data, isError: false };
		case 'USER_REGISTER_REJECTED':
			return { ...state, isLoading: false, isError: true };
		default:
			return state;
	}
}
