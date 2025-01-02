import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
// import { LINKS } from '../../styles/link';
import { COLORS } from '../../styles/colors';

const StyledLink = styled(NavLink)`
	font-size: ${props =>
		props.$mainColor ? FONTS.fontSizeAntonioL : FONTS.fontSizeSpartan3XXL};
	margin-left: ${props => (props.$mainColor ? '' : props.$marginName)};
	line-height: ${props => (props.$mainColor ? '' : FONTS.lineHeightXL)};

	&.active {
		color: ${COLORS.colorText};
		opacity: 1;
	}

	@media screen and (width > 768px) {
		margin-left: ${props =>
			props.$mainColor ? '' : props.$marginTabletPlanets};
		opacity: ${props => (props.$mainColor ? '' : '0.5')};
	}

	@media screen and (width > 1440px) {
		position: relative;

		&:after {
			position: absolute;
		}

		&:hover {
			color: ${COLORS.colorText};
			opacity: 1;
		}

		&:hover::after {
			content: '';
			position: absolute;
			top: -20px;
			left: 0;
			width: 60px;
			height: 4px;
			background-color: ${props =>
				props.$mainColor ? '' : props.$colorLinkHeader};
		}
	}
`;

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (width > 768px) {
		margin: 32px 52px 27px;
	}

	@media screen and (width > 1440px) {
		border-bottom: 1px solid ${COLORS.borderHeaderColor};
		margin: 0;
	}
`;

const StyledNav = styled.nav`
	@media screen and (width > 1440px) {
		display: flex;
		align-items: center;
	}
`;

const StyledLinkHome = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 24px;
	border-bottom: 1px solid ${COLORS.borderHeaderColor};

	@media screen and (width > 768px) {
		justify-content: center;
		border-bottom: none;
		padding-bottom: 39px;
	}

	@media screen and (width > 1440px) {
		padding-bottom: 27;
	}
`;

const StyledImgIcon = styled.img`
	width: 24px;
	height: 17px;
	cursor: pointer;
	transition: 0.3s;
	opacity: ${props => (props.$isActive ? '0.5' : '1')};

	@media screen and (width > 768px) {
		display: none;
	}
`;

const StyledLinkContainer = styled.ul`
	background-color: ${COLORS.bgColor};
	position: absolute;
	display: ${props => (props.$menuActive ? 'flex' : 'none')};
	flex-direction: column;

	padding: 0 20px;
	width: 100%;
	z-index: 10;

	@media screen and (width > 768px) {
		width: auto;
		position: static;
		display: flex;
		margin: 0;
		flex-direction: row;
		justify-content: center;
		padding: 0 52px;
	}

	@media screen and (width > 1440px) {
		margin-left: auto;
	}
`;

const StyledKey = styled.li`
	display: flex;
	align-items: center;
	padding-bottom: ${props => props.$padding};
	border-bottom: 1px solid ${COLORS.borderHeaderColor};
	padding: 10px;
	@media screen and (width > 1440px) {
		border-bottom: none;
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
	margin-left: auto;
	padding-right: 10px;

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
