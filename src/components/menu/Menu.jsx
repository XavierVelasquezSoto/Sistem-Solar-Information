import { useState } from 'react';
import {
	StyledLink,
	StyledLinkHome,
	StyledImgIcon,
	StyledMenu,
	StyledLinkContainer,
	StyledKey,
	StyledCircle
} from './menu.styles';
import { LINKS } from '../../styles/link';

const Menu = () => {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<StyledMenu>
			<nav>
				<StyledLinkHome>
					<ul>
						<li>
							<StyledLink to='/' $mainColor>
								THE PLANETS
							</StyledLink>
						</li>
					</ul>
					<StyledImgIcon
						src='/assets/images/icon-hamburger.svg'
						alt=''
						onClick={() => setMenuActive(!menuActive)}
					/>
				</StyledLinkHome>
				{menuActive && (
					<StyledLinkContainer>
						{LINKS.map(infoPlanets => {
							return (
								<StyledKey
									key={infoPlanets.id}
									$padding={infoPlanets.paddingMobilePlanets}
								>
									<StyledCircle
										$circleColor={infoPlanets.circleColor}
									></StyledCircle>
									<StyledLink
										to={infoPlanets.planet}
										$marginName={infoPlanets.marginNamePlanet}
									>
										{infoPlanets.text}
									</StyledLink>
									<img src='/assets/images/icon-chevron.svg' alt='' />
								</StyledKey>
							);
						})}
					</StyledLinkContainer>
				)}
			</nav>
		</StyledMenu>
	);
};

export default Menu;

{
	/* <div>
				<img src='' alt='' />
				<button></button>
				<button></button>
				<button></button>
			</div>
			<div>
				<div>
					<span></span>
					<span></span>
				</div>
				<div>
					<span></span>
					<span></span>
				</div>
				<div>
					<span></span>
					<span></span>
				</div>
				<div>
					<span></span>
					<span></span>
				</div>
			</div> */
}
