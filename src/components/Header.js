import React from 'react';
import styled from 'styled-components';
import AddTodo from './../containers/AddTodo';
import SubHeading from './SubHeading';

const Container = styled.div`
	background-color: #7b67ee;
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 150px;
`;

const Title = styled.div`
	font-size: 22px;
	font-weight: 800;
	letter-spacing: 1px;
	color: #fff;
	margin-bottom: 40px;
	font-family: 'Nunito';
`;

const Header = () => {
	return (
		<Container>
			<Title>LISTICLES</Title>
			<SubHeading />
			<AddTodo />
		</Container>
	);
};

export default Header;
