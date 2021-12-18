import React from 'react';
import styled from 'styled-components';
import BlogsHero from './components/blogsHero';
import Footer from './components/footer';
import BlogSection from './components/blogSection';
import { Title, Container } from './styles/variables';

const BlogsWrapper = styled.div`
	.container{
		.title-wrapper{
			margin: 120px 40px;
			.title-info{
				margin-top: 40px;
			}
		}
	}
`

const Blogs = () => {
	return (
		<BlogsWrapper>
			<BlogsHero />
			<Container className="container">
				<div className="title-wrapper">
					<Title>Blogs</Title>
					<p className="title-info">
						Located in Mumbai, Godrej Archives is the Godrej group's business archive. The Archives collects, preserves and manages records covering 121 years of the company's history. The idea was mooted in 1997, the group's centenary year, by Mr. Sohrab Godrej, former chairman of the Godrej group
					</p>
				</div>
				
				<BlogSection />

			</Container>
			<Footer />
		</BlogsWrapper>
	);
}
 
export default Blogs;