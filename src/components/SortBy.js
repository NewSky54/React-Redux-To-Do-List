import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
import styled from 'styled-components';

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

const Text = styled.div`
	font-size: 9px;
	font-weight: 800;
	color: #7b67ee;
	display: flex;
	align-self: center;
`;

const SortBy = () => (
	<Section>
		<SectionInner>
			<Text>Sort By:</Text>
			<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
			<FilterLink filter={VisibilityFilters.SORT_DUE_DATE}>Due Date</FilterLink>
		</SectionInner>
	</Section>
);

export default SortBy;
