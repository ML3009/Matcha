import styled from 'styled-components';
import Picture from '../../assets/satxie.jpg';

const MiniCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1em;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const MiniCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8F8BAD;
    box-shadow: 0em 1em 1em #999;
    border-radius: 10px;
    border: solid;
    padding: 1em;
    text-align: center;
`;

const MiniCardPicture = styled.img`
    width: 80%;
    border-radius: 1em;
    border: solid;
`;

const MiniCardTitle = styled.h3`
    margin: 0.5em 0;
    color: #DDD7E9;
`;

const MiniCardDescription = styled.p`
    color: #DDD7E9;
`;

function MiniCards() {
    return (
        <MiniCardGrid>
            <MiniCard>
                <MiniCardPicture src={Picture} alt="Profile" />
                <MiniCardTitle>Card 1</MiniCardTitle>
                <MiniCardDescription>Description 1</MiniCardDescription>
            </MiniCard>
            <MiniCard>
                <MiniCardPicture src={Picture} alt="Profile" />
                <MiniCardTitle>Card 2</MiniCardTitle>
                <MiniCardDescription>Description 2</MiniCardDescription>
            </MiniCard>
            <MiniCard>
                <MiniCardPicture src={Picture} alt="Profile" />
                <MiniCardTitle>Card 3</MiniCardTitle>
                <MiniCardDescription>Description 3</MiniCardDescription>
            </MiniCard>
            <MiniCard>
                <MiniCardPicture src={Picture} alt="Profile" />
                <MiniCardTitle>Card 4</MiniCardTitle>
                <MiniCardDescription>Description 4</MiniCardDescription>
            </MiniCard>
            <MiniCard>
                <MiniCardPicture src={Picture} alt="Profile" />
                <MiniCardTitle>Card 5</MiniCardTitle>
                <MiniCardDescription>Description 5</MiniCardDescription>
            </MiniCard>
            <MiniCard>
                <MiniCardPicture src={Picture} alt="Profile" />
                <MiniCardTitle>Card 6</MiniCardTitle>
                <MiniCardDescription>Description 6</MiniCardDescription>
            </MiniCard>
        </MiniCardGrid>
    );
}

export default MiniCards;