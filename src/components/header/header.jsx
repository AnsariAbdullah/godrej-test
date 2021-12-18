import React from 'react';
import LogoImage from '../../assets/logo.svg';
import { colors, Buttons } from '../../styles/variables';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${colors.white};
  padding: 15px 30px;
	.links{
    display: flex;
		ul{
			list-style: none;
			display: flex;
			justify-content: center;
    	align-items: center;
			li {
				font-size: 14px;
				margin-right: 30px;
			}
		}
	}
`

const Header = () => {
	return (
		<HeaderWrapper>
			<div className="logo-wrapper">
				<img src={LogoImage} alt="Logo" />
			</div>
			<div className="links">
				<ul>
					<li>Who We Are</li>
					<li>What We Do</li>
					<li>What We Offer</li>
					<li>Archive Tales</li>
					<li>Media</li>
					<li>Contact Us</li>
					<li>
						<Buttons>Contribute</Buttons>
					</li>
				</ul>
			<p>Glass</p>
			</div>
		</HeaderWrapper>
	);
}
 
export default Header;