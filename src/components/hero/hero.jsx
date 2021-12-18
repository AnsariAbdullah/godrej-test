import React from 'react';
import Header from '../header';
import HeroImage from '../../assets/hero.png';
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
					<div className="text">Hello World</div>
				</div>
			</div>
		</HeroWrapper>
	);
}
 
export default Hero;