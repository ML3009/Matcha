import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Like from '../../assets/Like.png';
import Info from '../../assets/info.png';
import Dislike from '../../assets/Dislike.png'; 


const ChoicesContainer = styled.div`
    grid-row: 2; 
    display: grid;
    grid-column: repeat(3, 0.4fr);
    gap: 1em;
    `;
    
    
    
const LikeContainer = styled.button`   
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
`;

const LikeImg = styled.img `
    width: 70%;
    margin: auto;

`;

const InfoContainer= styled(Link) `
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
   
`;



const InfoImg = styled.img `
    width: 70%;
    margin: auto;

`;


const DislikeContainer = styled.button`
    grid-column: 3/4;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;

`;


const DislikeImg = styled.img`
    width: 70%;
    margin: auto;


`;


function Interact() {
    return (
            <ChoicesContainer>
                <LikeContainer>
                    <LikeImg src={ Like } />
                  
                </LikeContainer>
                <InfoContainer>
                    <InfoImg src={Info}/>
                </InfoContainer>
                <DislikeContainer>
                    <DislikeImg src={Dislike} />
                  
                </DislikeContainer>
            </ChoicesContainer>
    )
}

export default Interact;