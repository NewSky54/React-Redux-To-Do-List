import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';
import CalendarIcon from './../assets/empty-calendar.svg';
import CheckedCalendarIcon from './../assets/checked-empty-calendar.svg';
import BlankCheckBox from './../assets/blank-check-box.svg';
import CheckedBox from './../assets/checked-check-box.svg';
import OrangeCalendar from './../assets/orange-calendar-page-empty.svg';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 20px 1fr 200px;
	grid-template-rows: 30px;
	align-items: center;
	font-family: 'Raleway';
	justify-items: center;
	align-items: center;
`;

const TodoCheckbox = styled.div`
	display: flex;
	align-items: center;
`;

const TodoText = styled.div`
	text-decoration: ${props => (props.linethrough === 'true' ? 'line-through' : 'none')};
	padding-left: 10px;
	font-size: 11px;
	justify-self: start;
	display: flex;
	align-items: center;
`;

const TodoDate = styled.div`
	font-size: 11px;
	justify-self: end;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	padding-left: 10px;
	width: 12px;
`;

const Today = styled.div`
	color: ${props => (props.color === 'true' ? '#757380' : '#ffa334')};
`;

const Date = styled.div`
	color: ${props => (props.color === 'true' ? '#757380' : '#000')};
`;

const Todo = ({ onClick, completed, text, date }) => {
	return (
		<Grid onClick={onClick}>
			<TodoCheckbox>
				{completed === false ? (
					<Icon src={BlankCheckBox} alt="Blank Check Box" />
				) : (
					<Icon src={CheckedBox} alt="Checked Check Box" />
				)}
			</TodoCheckbox>
			<TodoText linethrough={completed.toString()}>{text}</TodoText>
			<TodoDate>
				{date === 'Today' ? (
					<Today color={completed.toString()}>Today</Today>
				) : (
					<Date color={completed.toString()}>
						<Moment format="MMM DD">{date}</Moment>
					</Date>
				)}
				{date === 'Today' && completed === false ? (
					<Icon src={OrangeCalendar} alt="Calendar Icon" />
				) : completed === false ? (
					<Icon src={CalendarIcon} alt="Calendar Icon" />
				) : (
					<Icon src={CheckedCalendarIcon} alt="Greyed Out Calendar Icon" />
				)}
			</TodoDate>
		</Grid>
	);
};

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
};

export default Todo;
