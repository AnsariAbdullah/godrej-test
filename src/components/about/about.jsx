import React from 'react';
import styled from 'styled-components';
import { Buttons, Container, Title, colors } from '../../styles/variables';
import AboutImage from '../../assets/about.png';

const AboutWrapper = styled.div`
	padding: 190px 0;
	background: ${colors.secondaryBackground};
	.conatiner{
		display: flex;
		justify-content: center;
		align-items: center;
		.left{
			width: 50%;
			margin-right: 90px;
			.info-text{
				font-size: 14px;
				margin-top: 35px;
				margin-bottom: 50px;
			}
		}
		.right{
			width: 700px;
			img{
				width: 100%;
			}
		}
	}
	@media (max-width: 768px) {
		padding: 95px 0;
		.conatiner{
			flex-direction: column;
			.left{
				width: 100%;
				margin-right: 0;
				margin-bottom: 40px;
			}
			.right{
				width: 100%;
			}
		}
	}
`

const About = () => {
	return (
		<AboutWrapper>
			<Container className="conatiner">
				<div className="left">
					<Title>WHO WE ARE</Title>
					<p className="info-text">
						Located in Mumbai, Godrej Archives is the Godrej group's business archive. The Archives collects, preserves and manages records covering 121 years of the company's history. The idea was mooted in 1997, the group's centenary year, by Mr. Sohrab Godrej, former chairman of the Godrej group, who had over the years, taken up the task of collecting relevant documents and photographs. Since then, Archvies has been recording the history of Godrej – its products, plants and people – and making it available for research.
					</p>
					<Buttons secondary>Explore</Buttons>
				</div>
				<div className="right">
					<img src={AboutImage} alt="" />
				</div>
			</Container>
		</AboutWrapper>
	);
}
 
export default About;