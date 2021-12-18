import React from 'react';
import Header from '../header';
import BlogHero from '../../assets/blogHero.png';
import styled from 'styled-components';

const BlogHeroWrapper = styled.section`
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
					font-size: 60px;
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

const BlogsHero = () => {
	return (
		<BlogHeroWrapper>
			<div className="container">
				<img className="image" src={BlogHero} alt="Avatar" />
				<div className="overlay">
					<Header />
					<div className="text">
						<p className="main">BLOGS</p>
						<p className="sub-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
					</div>
				</div>
			</div>
		</BlogHeroWrapper>
	);
}
 
export default BlogsHero;