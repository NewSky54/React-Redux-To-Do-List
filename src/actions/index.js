// ACTIONS CREATORS
// Starting nextTodoId at 5 because of initial data
let nextTodoId = 5;
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
});

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
});

export const toggleTasks = () => ({
	type: 'TOGGLE_TASKS'
});

// ACTION TYPES
export const TOGGLE_TASKS = 'TOGGLE_TASKS';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
	SORT_DUE_DATE: 'SORT_DUE_DATE'
};
