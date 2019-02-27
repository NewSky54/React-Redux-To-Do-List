import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTasks } from '../actions';

const Section = styled.section`
	display: block;
`;

const SectionInner = styled.div`
	max-width: 650px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	.section__title {
		font-size: 12px;
		font-weight: 800;
		color: #7b67ee;
		padding: 20px;
	}
`;

const Button = styled.button`
	color: #95949e;
	border: none;
	outline: none;
	text-decoration: underline;
	padding: 20px;
`;

const ToggleFooter = ({ showTasks, toggleTasks }) => (
	<Section>
		<SectionInner>
			{!showTasks ? (
				<Button onClick={toggleTasks}>Show Completed Tasks</Button>
			) : (
				<Button onClick={toggleTasks}>Hide Completed Tasks</Button>
			)}
		</SectionInner>
	</Section>
);

const mapStateToProps = state => {
	const { showTasks } = state.toggleTasks;
	return {
		showTasks
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			toggleTasks
		},
		dispatch
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToggleFooter);
