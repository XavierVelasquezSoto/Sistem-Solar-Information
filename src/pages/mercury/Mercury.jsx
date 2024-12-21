import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

const Mercury = () => {
	return (
		<>
			<Menu />
			<h1>Mercury</h1>
			<Link to='/'>
				<button>TO HOME</button>
			</Link>
		</>
	);
};

export default Mercury;
