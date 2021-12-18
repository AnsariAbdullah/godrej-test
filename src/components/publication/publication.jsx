import React from 'react';
import styled from 'styled-components';
import PublicationImage from '../../assets/publication.png'
import { Buttons, Container, Title, colors } from '../../styles/variables';

const PublicationWrapper = styled.section`
	padding: 130px 0;
	.content{
		width: 90%;
		margin: 35px auto 45px;
		img{
			width: 100%;
		}
		.info-wrapper {
			margin-top: 45px;
    	display: flex;
			.left{
				width: 40%;
				.left-main {
					font-weight: bold;
					font-size: 18px;
				}
				.other{
					display: flex;
					margin: 15px 0 50px;
					p{
						color: ${colors.gray};
						font-size: 12px;
						&:first-child{
							margin-right: 100px;
						}
					}
				}
			}
			.right{
				width: 60%;
			}
		}
	}
`

const Publication = () => {
	return (
		<PublicationWrapper>
			<Container>
				<Title>Publications</Title>
				<div className="content">
					<div className="image-wrapper">
						<img src={PublicationImage} alt="publication" />
					</div>
					<div className="info-wrapper">
						<div className="left">
							<p className="left-main">Latest Archives Times Newsletter</p>
							<div className="other">
								<p>November, 2021</p>
								<p>Volume 1, Issue 1</p>
							</div>
							<Buttons primary>Explore</Buttons>
						</div>
						<div className="right">
							Located in Mumbai, Godrej Archives is the Godrej group's business archive. The Archives collects, preserves and manages records covering 121 years of the company's history. The idea was mooted In 1997, the group's centenary year
						</div>
					</div>
				</div>
			</Container>
		</PublicationWrapper>
	);
}
 
export default Publication;