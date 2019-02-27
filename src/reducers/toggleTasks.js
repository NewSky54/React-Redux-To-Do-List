const initialState = {
	showTasks: true
};

const toggleTasks = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_TASKS':
			return {
				...state,
				showTasks: !state.showTasks
			};
		default:
			return state;
	}
};

export default toggleTasks;
