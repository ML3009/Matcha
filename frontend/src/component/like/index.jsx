import styled from 'styled-components';
import like from '../../assets/Like.png';

const LikeContainer = styled.button`   
    grid-row: 1 / 2;
    grid-column: 1/2;
    background: none;
    place-self: center;
`;

const LikeImg = styled.img `
    width: 80%;
    margin: auto;
    display: block;

`;

function Like() {
    return (
    
        <LikeContainer>
            <LikeImg src={ like } />
        </LikeContainer>
          
    )
}

export default Like;