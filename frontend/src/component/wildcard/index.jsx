import styled from 'styled-components';
import Picture from '../../assets/satxie.jpg';


const CardContainer = styled.div`
    grid-row: 1 / 2;
    width: 90%;
    max-width: 20em;
    padding: 1em 2em;
    background-color: #8F8BAD;
    box-shadow: 0em 1em 1em #999;
    border-radius: 10px;
    border: solid;
    div {
        margin: 1em auto;
    }

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
    display: grid;
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
`;

const HumorContainer = styled.div`
      display: inline-block; 
      margin-right: 1em;
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
    padding: 1em 1em;
    box-sizing: border-box;
    border-radius: 1em;
    border: solid;
`;

const TagContainer = styled.div`
    color: #DDD7E9;
    text-align: center;
    box-sizing: border-box;
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