import styled from 'styled-components';
import dislike from '../../assets/Dislike.png'; 

const DislikeButton = styled.button`
    grid-row: 1;
    grid-column: 3/4;
    background: none;
    place-self: center;
`;

const DislikeImg = styled.img`
    width: 70%;
    display: block;
    margin: auto;
`;

function Dislike() {
    const handleDislike = () => {
        alert('You disliked this person!');
    }
    return (
        <DislikeButton onClick={handleDislike}>
            <DislikeImg src={dislike} />
        </DislikeButton>
    )
}

export default Dislike;