import { useState } from 'react';
import {
	StyledLink,
	StyledLinkHome,
	StyledImgIcon,
	StyledMenu,
	StyledLinkContainer,
	StyledKey,
	StyledCircle,
	StyledArrowHeader,
	StyledNav
} from './menu.styles';
import { LINKS } from '../../styles/link';

const Menu = () => {
	const [menuActive, setMenuActive] = useState(false);

	// const homeActive = () => setMenuActive(!menuActive);
	// {!homeActive}

	return (
		<StyledMenu>
			<StyledNav>
				<StyledLinkHome>
					<StyledLink
						to='/'
						$mainColor
						onClick={() => setMenuActive(menuActive)}
					>
						THE PLANETS
					</StyledLink>

					<StyledImgIcon
						src='/assets/images/icon-hamburger.svg'
						alt=''
						onClick={() => setMenuActive(!menuActive)}
						$isActive={menuActive}
					/>
				</StyledLinkHome>
				<StyledLinkContainer $menuActive={menuActive}>
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
									$marginTabletPlanets={infoPlanets.marginTabletPlanets}
									$colorLinkHeader={infoPlanets.colorLinkHeader}
									onClick={() => setMenuActive(!menuActive)}
								>
									{infoPlanets.text}
								</StyledLink>
								<StyledArrowHeader
									src='/assets/images/icon-chevron.svg'
									alt=''
								/>
							</StyledKey>
						);
					})}
				</StyledLinkContainer>
			</StyledNav>
		</StyledMenu>
	);
};

export default Menu;
