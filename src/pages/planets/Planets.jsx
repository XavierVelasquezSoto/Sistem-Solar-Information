import { useState } from 'react';
import { PLANETS_INFO } from '../../constants/infoPlanets';
import {
	StyledContaienrWebPlanets,
	StyledContainerButton,
	StyledContainerPlanetsImg,
	StyledLinksButton,
	StyledPlanetsImg,
	StyledTitlePlanet,
	StyledTextPlanet,
	StyledGroupLinkReference,
	StyledContainerTextInfo,
	StyledLinkReference,
	StyledLinkSource,
	StyledLinkIcon,
	StyledSpanButtonText,
	StyledContainerMetrics,
	StyledContainerMetricsFlex,
	StyledMetricNumber,
	StyledMetricText
} from './planets.styles';

const Planets = ({ planet }) => {
	const planetInfo = PLANETS_INFO.find(info => info.name === planet);

	if (!planetInfo) return 'error';

	const [changeInfoPlanet, setChangeInfoPlanet] = useState('overview');

	/// img planets

	const imgPlanets = {
		overview: planetInfo.images.planet,
		structure: planetInfo.images.internal,
		geology: planetInfo.images.geology
	};

	const clickPlanets = imgPlanets[changeInfoPlanet];

	/// infoPlanet

	const infoPlanet = {
		overview: planetInfo.overview.content,
		structure: planetInfo.structure.content,
		geology: planetInfo.geology.content
	};

	const clickInfo = infoPlanet[changeInfoPlanet];

	/// wikipedia links

	const linkWeb = {
		overview: planetInfo.overview.source,
		structure: planetInfo.structure.source,
		geology: planetInfo.geology.source
	};

	const clickWeb = linkWeb[changeInfoPlanet];

	return (
		<StyledContaienrWebPlanets>
			{/* div para flex mobile y grid resto */}

			<StyledContainerButton>
				<StyledLinksButton
					onClick={() => setChangeInfoPlanet('overview')}
					$mainButton={changeInfoPlanet === 'overview'}
					$colorLinkHeader={planetInfo.colorLinkHeader}
				>
					<StyledSpanButtonText>01</StyledSpanButtonText>
					OVERVIEW
				</StyledLinksButton>
				<StyledLinksButton
					onClick={() => setChangeInfoPlanet('structure')}
					$mainButton={changeInfoPlanet === 'structure'}
					$colorLinkHeader={planetInfo.colorLinkHeader}
				>
					<StyledSpanButtonText>02</StyledSpanButtonText>
					STRUCTURE
				</StyledLinksButton>
				<StyledLinksButton
					onClick={() => setChangeInfoPlanet('geology')}
					$mainButton={changeInfoPlanet === 'geology'}
					$colorLinkHeader={planetInfo.colorLinkHeader}
				>
					<StyledSpanButtonText>03</StyledSpanButtonText>
					SURFACE
				</StyledLinksButton>
			</StyledContainerButton>

			<StyledContainerPlanetsImg>
				<StyledPlanetsImg src={clickPlanets} alt='' />
			</StyledContainerPlanetsImg>

			<StyledContainerTextInfo>
				<StyledTitlePlanet>{planetInfo.name}</StyledTitlePlanet>
				<StyledTextPlanet>{clickInfo} </StyledTextPlanet>
				<StyledGroupLinkReference>
					<StyledLinkReference>Source:</StyledLinkReference>
					<StyledLinkSource href={clickWeb}>Wikipedia</StyledLinkSource>
					<StyledLinkIcon
						src='public/assets/images/icon-source.svg'
						alt='arrow link'
					/>
				</StyledGroupLinkReference>
			</StyledContainerTextInfo>

			<StyledContainerMetrics>
				<StyledContainerMetricsFlex>
					<StyledMetricText>ROTATION TIME</StyledMetricText>
					<StyledMetricNumber>
						{planetInfo.rotation.toUpperCase()}
					</StyledMetricNumber>
				</StyledContainerMetricsFlex>
				<StyledContainerMetricsFlex>
					<StyledMetricText>REVOLUTION TIME</StyledMetricText>
					<StyledMetricNumber>
						{planetInfo.revolution.toUpperCase()}
					</StyledMetricNumber>
				</StyledContainerMetricsFlex>
				<StyledContainerMetricsFlex>
					<StyledMetricText>RADIUS</StyledMetricText>
					<StyledMetricNumber>
						{planetInfo.radius.toUpperCase()}
					</StyledMetricNumber>
				</StyledContainerMetricsFlex>
				<StyledContainerMetricsFlex>
					<StyledMetricText>AVERAGE TEMP</StyledMetricText>
					<StyledMetricNumber>
						{planetInfo.temperature.toUpperCase()}
					</StyledMetricNumber>
				</StyledContainerMetricsFlex>
			</StyledContainerMetrics>
		</StyledContaienrWebPlanets>
	);
};

export default Planets;
