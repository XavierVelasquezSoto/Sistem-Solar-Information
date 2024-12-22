import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { LINKS } from '../../styles/link';
import { COLORS } from '../../styles/colors';

const StyledLink = styled(NavLink)`
	font-size: ${props =>
		props.$mainColor ? FONTS.fontSizeAntonioL : FONTS.fontSizeSpartan3XXL};
	margin-left: ${props => (props.$mainColor ? '' : props.$marginName)};
	@media screen and (width > 768px) {
		margin-left: ${props =>
			props.$mainColor ? '' : props.$marginTabletPlanets};
	}
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
	@media screen and (width > 768px) {
		margin: 32px 52px 27px;
	}
	@media screen and (width > 1440px) {
	}
`;

const StyledNav = styled.nav`
	display: flex;
`;

const StyledLinkHome = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 24px;
	@media screen and (width > 768px) {
		justify-content: center;
	}
	@media screen and (width > 1440px) {
	}
`;

const StyledImgIcon = styled.img`
	width: 24px;
	height: 17px;
	cursor: pointer;
	opacity: ${props => (props.$isActive ? '0.5' : '1')};
	transition: 0.3s;

	@media screen and (width > 768px) {
		display: none;
	}
`;

const StyledLinkContainer = styled.ul`
	background-color: ${COLORS.bgColor};
	position: absolute;
	display: ${props => (props.$menuActive ? 'flex' : 'none')};
	flex-direction: column;
	margin: 43px 24px 0;
	@media screen and (width > 768px) {
		position: static;
		display: flex;
		margin: 0;
		flex-direction: row;
		justify-content: center;
		padding: 0 52px;
	}
	@media screen and (width > 1440px) {
	}
`;

const StyledKey = styled.li`
	display: flex;
	align-items: center;
	padding-bottom: ${props => props.$padding};
	align-items: start;
	border-bottom: 1px solid ${COLORS.borderHeaderColor};
	opacity: 0.75;

	@media screen and (width > 1440px) {
	}
`;

const StyledCircle = styled.p`
	margin: 0;
	width: 18px;
	height: 18px;
	background-color: ${props => props.$circleColor};
	border-radius: 50px;
	@media screen and (width > 768px) {
		display: none;
	}
`;

const StyledArrowHeader = styled.img`
	@media screen and (width > 768px) {
		display: none;
	}
`;

export {
	StyledLink,
	StyledLinkHome,
	StyledImgIcon,
	StyledNav,
	StyledMenu,
	StyledLinkContainer,
	StyledKey,
	StyledCircle,
	StyledArrowHeader
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
