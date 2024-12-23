import { useState } from 'react';
import { PLANETS_INFO } from '../../constants/infoPlanets';

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

	/// wikipedia links

	const linkWeb = {
		overview: planetInfo.overview.source,
		structure: planetInfo.structure.source,
		geology: planetInfo.geology.source
	};

	const clickWeb = linkWeb[changeInfoPlanet];

	return (
		<div>
			{/* div para flex mobile y grid resto */}
			<div>
				<button onClick={() => setChangeInfoPlanet('overview')}>
					OVERVIEW
				</button>
				<button onClick={() => setChangeInfoPlanet('structure')}>
					STRUCTURE
				</button>
				<button onClick={() => setChangeInfoPlanet('geology')}>SURFACE</button>
			</div>
			<div>
				<img src={clickPlanets} alt='' />
			</div>
			<div>
				<h1>{planetInfo.name}</h1>
				<p>{planetInfo.overview.content} </p>
				<div>
					<span>Source:</span>
					<a href={clickWeb}>Wikipedia</a>
					<img src='public/assets/images/icon-source.svg' alt='arrow link' />
				</div>
			</div>
			<div>
				<div>
					<p>ROTATION TIME</p>
					<p>{planetInfo.rotation}</p>
				</div>
				<div>
					<p>REVOLUTION TIME</p>
					<p>{planetInfo.revolution}</p>
				</div>
				<div>
					<p>RADIUS</p>
					<p>{planetInfo.radius}</p>
				</div>
				<div>
					<p>AVERAGE TEMP</p>
					<p>{planetInfo.temperature}</p>
				</div>
			</div>
		</div>
	);
};

export default Planets;
