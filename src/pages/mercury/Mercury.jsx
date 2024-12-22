import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

const Mercury = () => {
	return (
		<div>
			{/* div para flex mobile y grid resto */}
			<div>
				<button>OVERVIEW</button>
				<button>STRUCTURE</button>
				<button>SURFACE</button>
			</div>
			<div>
				<img src='/assets/images/planet-mercury.svg' alt='' />
			</div>
			<div>
				<h1>MERCURY</h1>
				<p>
					Mercury is the smallest planet in the Solar System and the closest to
					the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
					of all the Sun's planets. Mercury is one of four terrestrial planets
					in the Solar System, and is a rocky body like Earth.
				</p>
				<div>
					<span>source:</span>
					<a href='https://en.wikipedia.org/wiki/Mercury_(planet)'>web</a>
				</div>
			</div>
			<div>
				<div>
					<p>ROTATION TIME</p>
					<p>58.6 days</p>
				</div>
				<div>
					<p>revolution TIME</p>
					<p>58.6 days</p>
				</div>
				<div>
					<p>radius TIME</p>
					<p>58.6 days</p>
				</div>
				<div>
					<p>average TIME</p>
					<p>58.6 days</p>
				</div>
			</div>
		</div>
	);
};

export default Mercury;

// const Mercury = () => {
// 	return (
// 		<div>
// 			{/* div para flex mobile y grid resto */}
// 			<h1>Mercury</h1>
// 			<Link to='/'>
// 				<button>TO HOME</button>
// 			</Link>
// 		</div>
// 	);
// };
