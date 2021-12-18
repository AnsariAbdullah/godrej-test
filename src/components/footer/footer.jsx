import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const FooterWrapper = styled.footer`
	font-size: 14px;
	padding: 50px 0 100px;
	text-align: center;
	border-top: 0.3px solid ${colors.gray};
	background: ${colors.secondaryBackground};
`

const Footer = () => {
	return (
		<FooterWrapper>
			Copyright &copy; 2021. Godrej.com | Disclaimer | Privacy Policy | T&amp;C
		</FooterWrapper>
	);
}
 
export default Footer;