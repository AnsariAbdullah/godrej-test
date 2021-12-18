import styled from "styled-components";

const colors = {
  white: '#fff',
	red: '#EE4037',
	orange: '#FFAA00',
	background: '#FFE5C4',
	dark: '#2F2F2F',
	gray: '#797979',
	secondaryBackground: '#FFE5C4',
};

const Buttons = styled.button`
	font-weight: bold;
  padding: 15px 40px;
	border-radius: 25px;
	text-transform: uppercase;
	border: ${props => props.secondary ? '2px solid' + colors.dark : "none"};
	background: ${props => props.primary ? colors.red : "transparent"};
  color: ${props => props.secondary ? colors.dark : colors.white};
`;


const Container = styled.section`
	width: 1024px;
	margin: 0 auto;
`;

const Title = styled.p`
	font-size: 60px;
	text-transform: uppercase;
	font-family: 'Inria Serif', serif;
	&:before {
		content: "";
		background-color: ${colors.red};
		padding: 2px;
    margin-right: 10px;
	}
`

export {
	colors,
	Buttons,
	Container,
	Title
}