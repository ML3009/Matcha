import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FlowerLogo from '../../assets/flowerLogo.png';
import RingBell from '../../assets/ringBell.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const RingBellNotif = styled.img `
    height: 60px;
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 10px;
    @media screen and (max-width: 768px) {
        height: 50px;
        top: 5px;
        right: 5px;
    }

    @media screen and (max-width: 480px) {
        height: 40px;
        top: 2px;
        right: 2px;
    }

`;

const NavBar = styled.nav`

    position: relative;
    display: flex;

     @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const HomeLogoBurger = styled.img `
    height: 70px;
    margin: 30px;
    cursor: pointer;
    display: flex;
    font-size: 1.5em;

    @media screen and (max-width: 768px) {
      display: block;
      margin: 20px auto; 
      
    }
`;

const NavBarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    
    &.show {
        display: flex;
        }

     @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        background-color:  #2D283E;
        z-index: 1;
        display: none;

        &.show {
        display: flex;
        }
    }

`;

const NavBarItem = styled.li`
    position: relative;
    padding: 1rem;

    &:hover {
        display: flex;
        flex-direction: column;
        }

`;

const ColorLinks = styled(Link)`

    font-weight: 400;
    font-size: 15px;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const ColorButtonLogout = styled.button`
    height: 40px;
    margin-top: 5%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #DDD7E9;
    font-size: 15px;
    color: #1E1E1E;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
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
                    <ColorButtonLogout>Logout</ColorButtonLogout>
                </NavBarItem>
            </NavBarList>
            {!disableMenu ? (
                <RingBellNotif src={RingBell} />
            ) : null}
        </NavBar>
    )
}

export default Header;