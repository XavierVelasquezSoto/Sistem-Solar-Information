import { PLANETS_INFO } from '../../constants/infoPlanets';

const Planets = ({ planet }) => {
	const planetInfo = PLANETS_INFO.find(info => info.name === planet);
	if (!planetInfo) return 'error';
	return (
		<div>
			{/* div para flex mobile y grid resto */}
			<div>
				<button>OVERVIEW</button>
				<button>STRUCTURE</button>
				<button>SURFACE</button>
			</div>
			<div>
				<img src={planetInfo.images} alt='' />
			</div>
			<div>
				<h1>{planetInfo.name}</h1>
				<p>{planetInfo.overview.content} </p>
				<div>
					<span>Source:</span>
					<a href={planetInfo.overview.source}>Wikipedia</a>
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
