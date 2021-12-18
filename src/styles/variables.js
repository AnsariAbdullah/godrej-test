import styled from "styled-components";

const colors = {
  white: '#fff',
	red: '#EE4037',
	orange: '#FFAA00',
	background: '#FFE5C4',
	dark: '#2F2F2F',

  // error
  error: '#ff6c56',

  // Blue
  blue: {
    primary: '#2c86ff',
    secondary: '#559eff',
    navy: '#0c1d33',
    shadeOne: '#6faaff',
  },

  // Black
  black: {
    default: '#000',
    main: '#121212',
  },
};

const Buttons = styled.button`
	font-weight: bold;
  padding: 15px 40px;
	border-radius: 25px;
	color: ${colors.white};
	border: none;
	background: ${props => props.primary ? colors.red : "transparent"};
	/* background: ${colors.orange}
  color: ${props => props.primary ? "white" : "palevioletred"}; */
`;

export {
	colors,
	Buttons
}