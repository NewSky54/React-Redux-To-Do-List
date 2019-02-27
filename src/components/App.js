import React from 'react';
import ToggleFooter from './ToggleFooter';
import Header from '../components/Header';
import TodoTitle from '../components/TodoTitle';
import VisibleTodoList from '../containers/VisibleTodoList';
import ToggleCompletedTasks from '../containers/ToggleCompletedTasks';

const App = () => (
	<>
		<Header />
		<TodoTitle />
		<VisibleTodoList />
		<ToggleFooter />
		<ToggleCompletedTasks />
	</>
);

export default App;
