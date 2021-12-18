import React from 'react';
import styled from 'styled-components';
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import Blog3 from '../../assets/blog3.png';
import Author from '../../assets/author.svg';
import Date from '../../assets/date.svg';
import { colors } from '../../styles/variables';

const data = [
	{
		info: 'Document of the Month (DOM)',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog1,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Social Media Articles',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog2,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Change Mag articles',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog3,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Document of the Month (DOM)',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog1,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Social Media Articles',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog2,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Change Mag articles',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog3,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Document of the Month (DOM)',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog1,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Social Media Articles',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog2,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	},{
		info: 'Change Mag articles',
		title1: 'Corporate & Business',
		title2: 'Oral History: Opportunities & challenges',
		image: Blog3,
		date: '5th April 2021',
		author: 'Aruna Ranjan',
	}
]

const BlogsWrapper = styled.section`
	display: grid;
	grid-gap: 90px 30px;
	margin-bottom: 100px;
	grid-template-columns: 1fr 1fr 1fr;
	.card{
		.image-wrapper{
			img{
				width: 100%;
			}
		}
		.card-info{
			font-size: 14px;
			margin: 15px 0 30px;
		}
		.card-title{
			font-size: 18px;
			font-weight: bold;
		}
		.other{
			margin-top: 25px;
			.details-wrapper{
				.details{
					display: flex;
					align-items: center;
					margin-bottom: 5px; 
					img{
						width: 15px;
					}
					p{
						margin-left: 5px;
						font-size: 12px;
						color: ${colors.gray};
					}
				}
			}
		}
	}
	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 425px) {
		grid-template-columns: 1fr;
	}
`

const BlogSection = () => {
	return (
		<BlogsWrapper>
			{data.map((item, index) => 
				<div key={index} className="card">
					<div className="image-wrapper">
						<img src={item.image} alt={item.info} />
					</div>
					<p className="card-info">{item.info}</p>
					<p className="card-title">{item.title1}</p>
					<p className="card-title">{item.title2}</p>
					<div className="other">
						<div className="details-wrapper">
							<div className="details">
								<img src={Date} alt="date" />
								<p>{item.date}</p>
							</div>
							<div className="details">
								<img src={Author} alt="author" />
								<p>{item.author}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</BlogsWrapper>
	);
}
 
export default BlogSection;