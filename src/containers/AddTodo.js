import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import styled from 'styled-components';

const Center = styled.div`
	display: flex;
	justify-content: center;
`;

const InputButtonWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
	input {
		color: #7b67ee;
		width: 530px;
		border: none;
		outline: none;
		padding: 10px;
	}
	button {
		color: #7b67ee;
		font-weight: 700;
		border: none;
		outline: none;
		width: 50px;
		height: 100%;
		:hover {
			background-color: #eee8f3;
		}
	}
`;

const AddTodo = props => {
	let input;

	return (
		<Center>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (!input.value.trim()) {
						return;
					}
					props.dispatch(addTodo(input.value));
					input.value = '';
				}}
			>
				<InputButtonWrapper>
					<input placeholder="Add a to-do" ref={node => (input = node)} />
					<button type="submit">ADD</button>
				</InputButtonWrapper>
			</form>
		</Center>
	);
};

export default connect()(AddTodo);
