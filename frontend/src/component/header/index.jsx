import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlowerLogo from '../../assets/flowerLogo.png'

const HomeLogo = styled.img `
    height: 70px;
`;

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    rigth: 0;
    height: 100%;
    background-image: radial-gradient(ellipse at top, transparent 0%, 
                var(--dark-color)), radial-gradient(ellipse at bottom, 
                var(--dark-color), rgba(145, 233, 255, 0.2)), 
                repeating-linear-gradient(220deg, black 0px, black 19px, transparent 19px, transparent 22px), 
                repeating-linear-gradient(189deg, black 0px, black 19px, transparent 19px, transparent 22px), 
                repeating-linear-gradient(148deg, black 0px, black 19px, transparent 19px, transparent 22px), 
                linear-gradient(90deg, #00fffa, #f0f0f0);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);

`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px; 
    margin-top: 140px;
`;

const ColorLinks = styled(Link)`

    background-color: #8F8BAD;
    border-radius: 5px;
    font-family: 'Comic', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: antiquewhite;
    text-decoration: none;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const ColorButtonLogout = styled.button`
    background-color: #DDD7E9;
    border-radius: 10px;
    font-family: 'Comic', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #1E1E1E;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
`;



function Header() {
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={FlowerLogo} />
            </Link>
            <NavLinks>
                <ColorLinks to="/wilderness">Wilderness</ColorLinks>
                <ColorLinks to="/mygarden">My Garden</ColorLinks>
                <ColorLinks to="/profile">Profile</ColorLinks>
                <ColorButtonLogout>Logout</ColorButtonLogout>
            </NavLinks>
        </NavContainer>
    )
}

export default Header;