import React from 'react';
import styled from 'styled-components';
import { colors, Buttons } from '../../styles/variables';

const SearchWrapper = styled.div`
	box-shadow: 0px 8px 14px #61616129;
	padding: 20px 30px;
	margin-bottom: 60px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.input-wrapper{
		width: calc(100% - 303px);
		input[type="text"]{
			width: 100%;
    	border: none;
			padding: 15px 10px;
    	border-radius: 5px;
			background: #F6F5FC;
		}
	}
	.cta-wrapper{
		display: flex;
		justify-content: center;
		align-content: center;
		.reset{
			color: ${colors.dark};
			text-transform: capitalize;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	@media (max-width: 425px) {
		display: block;
		.input-wrapper {
    	width: 100%;
		}
		.cta-wrapper{
			margin-top: 20px;
			button{
				padding: 10px 40px;
			}
		}
	}
`

const SearchBox = () => {
	return (
		<SearchWrapper>
			<div className="input-wrapper">
				<input type="text" placeholder="Search Text" />
			</div>
			<div className="cta-wrapper">
				<Buttons className="reset">
				<svg xmlns="http://www.w3.org/2000/svg" id="reset-svgrepo-com" width="25" height="25" viewBox="0 0 25 25">
					<path id="Path_15100" data-name="Path 15100" d="M14.281,22.75a9.375,9.375,0,1,0-9.375-9.375v4.844L2.094,15.406,1,16.5l4.688,4.688L10.375,16.5,9.281,15.406,6.469,18.219V13.375h0a7.813,7.813,0,1,1,7.813,7.813Z" transform="translate(-0.219 -0.875)" fill="#2f2f2f"/>
					<rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" width="25" height="25" fill="none"/>
				</svg>
					Reset
				</Buttons>
				<Buttons primary>
					Explore
				</Buttons>
			</div>
		</SearchWrapper>
	);
}
 
export default SearchBox;