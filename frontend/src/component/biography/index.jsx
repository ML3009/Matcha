import styled from 'styled-components';
import { Link } from 'react-router-dom';
import biography from '../../assets/info.png';

const BiographyContainer= styled(Link) `
    grid-row: 2/2;
    grid-column: 2/3;
    place-self: center;
    align-self: start;
    padding: 0.8em 6em;
    border-radius: 1em;
    border: solid;
    border-color: black;
    display: flex; 
    align-items: center;
`;

const BiographyImg = styled.img `
    width: 30%;
    display: block;
    margin-left: -4em;
`;

const BiographyText = styled.div`
    text-align: center;
    margin-left: 4em`;

function Biography() {
    return (
        <BiographyContainer>
            <BiographyImg src={biography}/>
            <BiographyText>Biography</BiographyText>
        </BiographyContainer>
    )
}

export default Biography;