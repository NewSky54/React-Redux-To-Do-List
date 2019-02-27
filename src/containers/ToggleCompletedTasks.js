import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getCompletedTodos = (todos, { showTasks }) => {
	if (showTasks) {
		return todos.filter(todos => todos.completed);
	} else {
		return [];
	}
};

const mapStateToProps = state => {
	return {
		todos: getCompletedTodos(state.todos, state.toggleTasks)
	};
};

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
