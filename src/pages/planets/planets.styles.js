import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledContaienrWebPlanets = styled.div`
	@media screen and (width > 768px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`;

//// botones

const StyledContainerButton = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 20px 24px;
	border-bottom: 1px solid ${COLORS.borderHeaderColor};
	overflow: hidden;
	@media screen and (width > 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-column: 2/2;
		grid-row: 2/2;
		border-bottom: none;
	}
`;
const StyledLinksButton = styled.li`
	position: relative;
	font-size: ${FONTS.fontSizeSpartanM};
	font-weight: ${FONTS.fontWeightBold};
	letter-spacing: ${FONTS.letterSpacing3XXL};
	opacity: ${props => (props.$mainButton ? '1' : '0.5')};
	color: ${props => (props.$mainButton ? COLORS.colorText : 'inherit')};
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		top: 27px;
		left: -6px;
		width: 80px;
		height: 4px;
		background-color: ${props =>
			props.$mainButton ? props.$colorLinkHeader : 'transparent'};
	}

	@media screen and (width > 768px) {
		display: flex;
		height: 48px;
		background-color: ${props =>
			props.$mainButton ? props.$colorLinkHeader : 'transparent'};
		padding: 12px 183px 11px 28px;
		font-size: ${FONTS.fontSizeSpartanXL};
		font-weight: ${FONTS.fontWeightBold};
		line-height: ${FONTS.lineHeightXL};
		letter-spacing: ${FONTS.letterSpacing4XL};

		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
		}
	}
`;

const StyledSpanButtonText = styled.span`
	display: none;
	@media screen and (width > 768px) {
		display: flex;
		margin-right: 28px;
		opacity: 0.5;
	}
`;

//// img planet

const StyledContainerPlanetsImg = styled.div`
	padding: 98px 132px;
	@media screen and (width > 768px) {
		padding: 146px 290px;
		grid-column: 1/3;
		grid-row: 1/2;
	}
`;

const StyledPlanetsImg = styled.img``;

/// infoText

const StyledContainerTextInfo = styled.div`
	margin: 0 24px;
	@media screen and (width > 768px) {
		/* margin:  */
	}
`;

const StyledTitlePlanet = styled.h1`
	margin: 0;
	margin-bottom: 16px;
	font-size: ${FONTS.fontSizeAntonioXL};
	font-weight: ${FONTS.fontWeightMedium};
	text-align: center;
	@media screen and (width > 768px) {
		font-size: ${FONTS.fontSizeAntonioXXL};
		margin-bottom: 24px;
		text-align: left;
	}
`;

const StyledTextPlanet = styled.p`
	margin: 0;
	margin-bottom: 32px;
	line-height: ${FONTS.lineHeightL};
	font-size: ${FONTS.fontSizeSpartanL};
	font-weight: ${FONTS.fontWeightRegular};
	text-align: center;
	@media screen and (width > 768px) {
		text-align: left;
	}
`;

const StyledGroupLinkReference = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (width > 768px) {
		justify-content: start;
	}
`;

const StyledLinkReference = styled.span`
	font-size: ${FONTS.fontSizeSpartanXL};
	font-weight: ${FONTS.fontWeightRegular};
	line-height: ${FONTS.lineHeightXL};
	opacity: 0.5;
`;
const StyledLinkSource = styled.a`
	font-size: ${FONTS.XL};
	font-weight: ${FONTS.fontWeightBold};
	line-height: ${FONTS.lineHeightXL};
	text-decoration: underline;
	opacity: 0.5;
	margin-left: 4px;
`;
const StyledLinkIcon = styled.img`
	opacity: 0.5;
	height: 12px;
	margin-left: 4px;
`;

/// container metrics

const StyledContainerMetrics = styled.div`
	display: flex;
	flex-direction: column;
	padding: 28px 24px 47px 24px;

	@media screen and (width > 768px) {
		flex-direction: row;
		grid-column: 1/3;
		/* grid-row:; */
	}
`;

const StyledContainerMetricsFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid ${COLORS.borderHeaderColor};
	padding: 9px 24px 13px 24px;
`;

const StyledMetricText = styled.p`
	margin: 0;
	opacity: 0.5;
	font-size: ${FONTS.fontSizeSpartanS};
	font-weight: ${FONTS.fontWeightBold};
	line-height: ${FONTS.lineHeightM};
	letter-spacing: ${FONTS.letterSpacingL};
`;
const StyledMetricNumber = styled.h1`
	margin: 0;
	font-size: ${FONTS.fontSizeAntonioS};
	font-weight: ${FONTS.fontWeightMedium};

	letter-spacing: ${FONTS.letterSpacingM};
`;

export {
	StyledContaienrWebPlanets,
	StyledContainerButton,
	StyledLinksButton,
	StyledSpanButtonText,
	StyledContainerPlanetsImg,
	StyledPlanetsImg,
	StyledContainerTextInfo,
	StyledTitlePlanet,
	StyledTextPlanet,
	StyledGroupLinkReference,
	StyledLinkReference,
	StyledLinkSource,
	StyledLinkIcon,
	StyledContainerMetrics,
	StyledContainerMetricsFlex,
	StyledMetricText,
	StyledMetricNumber
};

/* &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: red;
    top: 27px;
    left: auto;
} */