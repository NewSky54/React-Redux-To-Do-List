import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import styled from 'styled-components';

const Section = styled.section`
	display: block;
`;

const SectionInner = styled.div`
	max-width: 650px;
	margin: 0 auto;
`;

const TodoList = ({ todos, toggleTodo }) => (
	<Section>
		<SectionInner>
			{todos.map(todo => {
				return <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />;
			})}
		</SectionInner>
	</Section>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
