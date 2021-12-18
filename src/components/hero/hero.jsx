import React from 'react';
import Header from '../header';
import HeroImage from '../../assets/hero.png';
import { Buttons } from '../../styles/variables';
import styled from 'styled-components';

const HeroWrapper = styled.section`
	.container {
		position: relative;
		.image {
			display: block;
			width: 100%;
			height: auto;
		}
		.overlay {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			height: 100%;
			width: 100%;
			background: rgba(0, 0, 0, .4);
			.text {
				color: white;
				font-size: 20px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				text-align: center;
				.main{
					font-size: 100px;
					margin-bottom: 20px;
					font-family: 'Inria Serif', serif;
				}
				.sub-text {
					font-size: 14px;
					margin-bottom: 40px;
				}
			}
			.svg-wrapper {
				display: inline-block;
				position: absolute;
				bottom: 50px;
				right: 80px;
			}
		}
	}
`

const Hero = () => {
	return (
		<HeroWrapper>
			<div className="container">
				<img className="image" src={HeroImage} alt="Avatar" />
				<div className="overlay">
					<Header />
					<div className="text">
						<p className="main">VIRTUAL TOUR</p>
						<p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
						<Buttons primary>
							LET'S START THE TOUR
						</Buttons>
					</div>
					<div className="svg-wrapper">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="42" viewBox="0 0 28 42">
							<g id="Group_14608" data-name="Group 14608" transform="translate(-1795 -770)">
								<g id="Rectangle_6299" data-name="Rectangle 6299" transform="translate(1795 770)" fill="none" stroke="#fff" stroke-width="1.5">
									<rect width="28" height="42" rx="14" stroke="none"/>
									<rect x="0.75" y="0.75" width="26.5" height="40.5" rx="13.25" fill="none"/>
								</g>
								<line id="Line_9" data-name="Line 9" y2="9" transform="translate(1809.5 778.5)" fill="none" stroke="#fff" stroke-width="1.5"/>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</HeroWrapper>
	);
}
 
export default Hero;