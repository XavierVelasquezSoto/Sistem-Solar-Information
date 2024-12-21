import { BrowserRouter } from 'react-router-dom';
import Button from './components/button/Button';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import Menu from './components/menu/Menu';
import { StyledDivContainer } from './app.styles';

const App = () => {
	return (
		<StyledDivContainer>
			<BrowserRouter>
				<GlobalStyles />
				<header>
					<Menu />
				</header>
				<Router />
				<main>
					<img src='/assets/images/Solar sistem.png' alt='' />
				</main>
			</BrowserRouter>
		</StyledDivContainer>
	);
};

export default App;

// npm install react-router-dom --- para terminal
