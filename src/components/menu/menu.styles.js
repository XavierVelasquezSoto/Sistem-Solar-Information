import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { LINKS } from '../../styles/link';

const StyledLink = styled(NavLink)`
	font-size: ${props =>
		props.$mainColor ? FONTS.fontSizeAntonioL : FONTS.fontSizeSpartan3XXL};
	margin-left: ${props => (props.$mainColor ? '' : props.$marginName)};

	/* 
	&.active {
		color: red;
		border: 2px solid aliceblue;
	} */
`;

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledLinkHome = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 16px 24px;
`;

const StyledLinkContainer = styled.ul`
	background-color: wheat;
	display: flex;
	flex-direction: column;

	margin: 43px 24px 0;
`;

const StyledKey = styled.li`
	display: flex;
	align-items: center;
	padding-bottom: ${props => props.$padding};
	align-items: start;
`;

const StyledCircle = styled.p`
	margin: 0;
	width: 18px;
	height: 18px;
	background-color: ${props => props.$circleColor};
	border-radius: 50px;
`;

export {
	StyledLink,
	StyledLinkHome,
	StyledMenu,
	StyledLinkContainer,
	StyledKey,
	StyledCircle
};

// Link para navegación sin saber el menu activo
//NavLink para navegación sabiendo el menu activo

// const StyledLink = styled(NavLink)`
// 	display: block;
// 	font-size: 18px;
// 	padding-inline: 20px;
// 	margin: 8px 0;

// 	&.active {
// 		color: red;
// 		border: 2px solid aliceblue;
// 	}
// `;
