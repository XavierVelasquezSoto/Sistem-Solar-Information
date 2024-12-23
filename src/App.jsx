import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import Menu from './components/menu/Menu';
import { StyledDivContainer } from './app.styles';
import Planets from './pages/planets/Planets';

const App = () => {
	return (
		<StyledDivContainer>
			<BrowserRouter>
				<GlobalStyles />
				{/* <header> */}
				<Menu />
				{/* </header> */}

				<Router />
			</BrowserRouter>
		</StyledDivContainer>
	);
};

export default App;
{
	/* <img src='/assets/images/Solar sistem.png' alt='' /> */
}

// npm install react-router-dom --- para terminal
