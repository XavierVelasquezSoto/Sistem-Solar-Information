import { Route, Routes } from 'react-router-dom';
import Mercury from '../pages/mercury/Mercury';
import Venus from '../pages/venus/Venus';
import Earth from '../pages/earth/Earth';
import Mars from '../pages/mars/Mars';
import Jupiter from '../pages/jupiter/Jupiter';
import Saturn from '../pages/saturn/Saturn';
import Uranus from '../pages/uranus/Uranus';
import Neptune from '../pages/neptune/Neptune';

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path='/mercury' element={<Mercury />} />
				<Route path='/venus' element={<Venus />} />
				<Route path='/earth' element={<Earth />} />
				<Route path='/mars' element={<Mars />} />
				<Route path='/jupiter' element={<Jupiter />} />
				<Route path='/saturn' element={<Saturn />} />
				<Route path='/uranus' element={<Uranus />} />
				<Route path='/neptune' element={<Neptune />} />
			</Routes>
		</div>
	);
};

export default Router;
