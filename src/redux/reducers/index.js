import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import movieReducer from './movieReducer';
import trendingReducer from './trendingReducer';
import popularReducer from './popularReducer';
import featuredReducer from './featuredReducer';

const reducers = combineReducers({
	categoryReducer,
	movieReducer,
	trendingReducer,
	popularReducer,
	featuredReducer
});

export default reducers;
