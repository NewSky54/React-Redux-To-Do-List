const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false,
					date: 'Today'
				}
			];
		case 'TOGGLE_TODO':
			let newState = state.map(todo => {
				return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo;
			});
			return newState;
		default:
			return state;
	}
};

export default todos;
