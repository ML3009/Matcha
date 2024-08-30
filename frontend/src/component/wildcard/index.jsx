import styled from 'styled-components';
import Picture from '../../assets/satxie.jpg';


const CardContainer = styled.div`
    display: grid;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    place-self: center;
    gap: 0.6em;
    width: 90%;
    max-width: 20em;
    padding: 0 1em;
    margin: 3em auto;
    background-color: #8F8BAD;
    box-shadow: 0em 1em 1em #999;
    border-radius: 10px;
    border: solid;

     @media screen and (max-width: 768px) {
        width: 95%;
        padding: 1em;
    }

     @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0.5em;
    }

`;

const ProfilePicture = styled.img`
    width: 90%;
    margin: auto;
    border-radius: 1em;
    border: solid;
    filter: grayscale(0);
    &:hover {
        filter: grayscale(1);
    }
`;

const AgeName = styled.div`
    background-color: #DDD7E9;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    border-radius: 1em;
    border: solid;
    display: flex;
    align-items: center;
    margin: 1em auto;
`;

const HumorContainer = styled.div`
    margin-left: 1em;
    margin-right: 6em;
`;

const NameContainer = styled.div`
`;

const AgeContainer = styled.div`
    margin-left: 5em;
`;

const DescriptionContainer = styled.div`
    background-color: #DDD7E9;
    text-align: center;
    width: 100%;
    padding: 0.4em 0.8em;
    box-sizing: border-box;
    border-radius: 1em;
    border: solid;
    margin: 0.4em auto;
`;

const TagContainer = styled.div`
    color: #DDD7E9;
    text-align: center;
    box-sizing: border-box;
    margin: 1em auto;
`;




function Card() {

    return (   
        <CardContainer>
            <AgeName>
                <HumorContainer>
                    ✨
                </HumorContainer>
                <NameContainer>
                    Satxie 
                </NameContainer>
                <AgeContainer>
                    18
                </AgeContainer>
            </AgeName>
            <ProfilePicture src={Picture} />
            <DescriptionContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam  tristique, orci non interdum euismod, lectus metus tempus justo, 
            quis`suscipit ex nisl a sapien.
            </DescriptionContainer>
            <TagContainer>
                #dog #walk #love #food
            </TagContainer>
        </CardContainer>
   
    )

}

export default Card;