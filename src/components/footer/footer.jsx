import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const FooterWrapper = styled.footer`
	font-size: 14px;
	padding: ${props => props.home ? '50px 0 100px' : '80px 0'};
	
	text-align: center;
	border-top: 0.3px solid ${colors.gray};
	background: ${props => props.home ? colors.secondaryBackground : colors.white};
`

const Footer = (props) => {
	return (
		<FooterWrapper {...props}>
			Copyright &copy; 2021. Godrej.com | Disclaimer | Privacy Policy | T&amp;C
		</FooterWrapper>
	);
}
 
export default Footer;