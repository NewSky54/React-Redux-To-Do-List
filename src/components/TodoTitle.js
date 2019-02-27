import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';

const Section = styled.section`
	display: block;
`;

const SectionInner = styled.div`
	max-width: 650px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.div`
	color: #7b67ee;
	font-size: 12px;
	font-weight: 800;
	padding: 20px;
`;

const TodoTitle = () => {
	return (
		<Section>
			<SectionInner>
				<Title>ALL TASKS</Title>
				<SortBy />
			</SectionInner>
		</Section>
	);
};

export default TodoTitle;
