import styled from 'styled-components';
import dislike from '../../assets/Dislike.png'; 

const DislikeContainer = styled.button`
    grid-row: 1;
    grid-column: 3/4;

    background: none;
    place-self: center;
`;

const DislikeImg = styled.img`
    width: 80%;
    display: block;
    margin: auto;
`;

function Dislike() {
    return (
        <DislikeContainer>
            <DislikeImg src={dislike} />
        </DislikeContainer>
    )
}

export default Dislike;