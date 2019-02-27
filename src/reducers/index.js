import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import toggleTasks from './toggleTasks';

const rootReducer = combineReducers({
	todos,
	visibilityFilter,
	toggleTasks
});

export default rootReducer;
