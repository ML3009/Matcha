import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FlowerLogo from '../../assets/flowerLogo.png';
import RingBell from '../../assets/ringBell.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/Colors'


const NavBar = styled.nav`
	grid-area: header;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		align-items: center;
		justify-items: center;
	}
`;

const RingBellNotif = styled.img `
	height: 7%;
	cursor: pointer;
	display: block;
	position: absolute;
	justify-self: end;
	align-self: start;
	right: 1em;
	top: 2em;
	 @media screen and (max-width: 768px) {
	  display: block;
	  margin: 20px auto;

	}

`;
	const HomeLogoBurger = styled.img `
	height: 2.9em;
	margin: 1em;
	cursor: pointer;
	font-size: 1.5em;

	@media screen and (max-width: 768px) {
	  display: block;
	  margin: 20px auto;
	}
`;

const NavBarList = styled.ul`
	list-style: none;
	display: none;
	grid-column: 2;
	grid-row: 1;
	grid-template-columns: repeat(auto-fill, minmax(13em, auto));
	justify-content: space-between;
	align-items: center;

	&.show {
		display: grid;
	}

	@media screen and (max-width: 768px) {
		grid-column: 1;
		grid-row: 2;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		width: 100%;
		background-color: ${colors.background};
		z-index: 1;
		display: none;
		justify-content: space-around;
		align-items: center;

		&.show {
			display: grid;
			justify-content: center;
			align-items: center;
		}
	}

`;

const NavBarItem = styled.li`
	padding: 1em auto;
	place-self: center;
	width: 12em;
	text-align: center;
	@media screen and (max-width: 768px) {
		place-self: center;

	}
`;

const ColorLinks = styled(Link)`
	font-size: 1.2em;
	padding: 0.2em 2em;
	margin-top: 1.5em;
    margin-bottom: 1.5em;
	
	 @media screen and (max-width: 768px) {
		 display: block;
	}
`;



function Header() {

	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const isLogin = location.pathname === '/login';
	const isRegister = location.pathname === '/register';
	const disableMenu = isLogin || isRegister || isHomePage;

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		if (!disableMenu) {
			setIsMenuOpen(!isMenuOpen);
		}
	};

	return (
		<NavBar>
			<HomeLogoBurger onClick={toggleMenu} src={FlowerLogo} />
			<NavBarList  className={`${isMenuOpen ? 'show' : ''}`}>
				<NavBarItem>
					<ColorLinks to="/wilderness">Wilderness</ColorLinks>
				</NavBarItem>

				<NavBarItem>
					<ColorLinks to="/mygarden">My Garden</ColorLinks>
				</NavBarItem>

				<NavBarItem>
					<ColorLinks to="/profile">Profile</ColorLinks>
				</NavBarItem>

				<NavBarItem>
					<button className="primary-button">Logout</button>
				</NavBarItem>
			</NavBarList>
			{!disableMenu && <RingBellNotif src={RingBell} />}
		</NavBar>
	)
}

export default Header;
