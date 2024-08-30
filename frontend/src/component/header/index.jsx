import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FlowerLogo from '../../assets/flowerLogo.png';
import RingBell from '../../assets/ringBell.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const NavBar = styled.nav`
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
    height: 2em;
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
    padding: 0;
    margin: 0;
    display: none;
    grid-column: 2;
    grid-row: 1;
    grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
    justify-content: space-around;
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
        background-color:  #2D283E;
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
    padding: 1rem;
    place-self: center;
    width: 12em;
    text-align: center;
    &:hover {
        display: grid;
        place-self: center;
        }
    @media screen and (max-width: 768px) {
        place-self: center;
        
    }
`;

const ColorLinks = styled(Link)`
    font-size: 15px;
    padding: 0.2em 2em;
     @media screen and (max-width: 768px) {
         display: block;
    }
`;

const ColorButtonLogout = styled.button`
    background-color: #DDD7E9;
    font-size: 15px;
    color: #1E1E1E;
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
                    <ColorButtonLogout>Logout</ColorButtonLogout>
                </NavBarItem>
            </NavBarList>
            {!disableMenu && <RingBellNotif src={RingBell} />}
        </NavBar>
    )
}

export default Header;