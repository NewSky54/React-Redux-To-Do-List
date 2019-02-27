import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
	color: ${props => (props.disabled ? '#fff' : '#7b67ee')};
	background-color: ${props => (props.disabled ? '#7b67ee' : '#fff')};
	font-size: 9px;
	font-weight: 400;
	border: 0.5px solid #7b67ee;
	padding: 5px;
	border-radius: 5px;
	margin-left: 8px;
	outline: none;
	:hover {
		color: #fff;
		font-weight: 500;
		background-color: #7b67ee;
	}
`;

const Link = ({ active, children, onClick }) => (
	<Button onClick={onClick} disabled={active}>
		{children}
	</Button>
);

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Link;
