import React from 'react';
import LogoImage from '../../assets/logo.svg';
import { colors, Buttons } from '../../styles/variables';
import { Link } from "react-router-dom";
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
				a{
					text-decoration: none;
    			color: ${colors.white};
				}
				.link-btn{
					font-weight: 400;
					padding: 5px 20px;
					text-transform: capitalize;
					background: ${colors.orange}
				}
			}
		}
	}
`

const Header = () => {
	return (
		<HeaderWrapper>
			<div className="logo-wrapper">
				<Link to="/">
					<img src={LogoImage} alt="Logo" />
				</Link>
			</div>
			<div className="links">
				<ul>
					<li><Link to="/blog">Who We Are</Link></li>
					<li><Link to="/blog">What We Do</Link></li>
					<li><Link to="/blog">What We Offer</Link></li>
					<li><Link to="/blog">Archive Tales</Link></li>
					<li><Link to="/blog">Media</Link></li>
					<li><Link to="/blog">Contact Us</Link></li>
					<li><Link to="/blog">
						<Buttons className="link-btn">Contribute</Buttons>
					</Link></li>
				</ul>
				<svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="18.496" viewBox="0 0 18.5 18.496">
					<g id="search-svgrepo-com" transform="translate(0.25 0.2)">
						<g id="Group_14701" data-name="Group 14701" transform="translate(0 0.05)">
							<path id="Path_15086" data-name="Path 15086" d="M0,7.539a7.485,7.485,0,0,0,12.453,5.6l4.773,4.773a.452.452,0,0,0,.641-.638L13.091,12.5A7.487,7.487,0,1,0,0,7.539Zm14.075,0A6.586,6.586,0,1,1,7.489.953,6.6,6.6,0,0,1,14.075,7.539Z" transform="translate(0 -0.05)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
						</g>
					</g>
				</svg>
			</div>
		</HeaderWrapper>
	);
}
 
export default Header;