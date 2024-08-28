import styled from 'styled-components';
import Picture from '../../assets/satxie.jpg';


const CardContainer = styled.div`
`;

const ProfilePicture = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 75px;
`;

const NameContainer = styled.div`
`;

const DescriptionContainer = styled.div`
`;

const TagContainer = styled.div`
`;




function Card() {

    return (   
        <CardContainer>
            <NameContainer>
                Satxie 18
            </NameContainer>
            <ProfilePicture src={Picture} />
            <DescriptionContainer>
                Hello
            </DescriptionContainer>
            <TagContainer>
                #dog
            </TagContainer>
        </CardContainer>
   
    )

}

export default Card;