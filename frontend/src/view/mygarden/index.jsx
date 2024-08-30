import styled from 'styled-components';

const MyGardenWrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr ;
    justify-content: center;
    align-items: center; 
`;

const LoveContainer = styled.div`
    grid-column: 1 / 2;
    display: grid;
    gird-template-rows: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`;


const LikeButton = styled.button`
    grid-row: 1 / 2;

`;

const LikedButton = styled.button `
    grid-row: 2 / 3;
    
`;

const MatchButton = styled.button`
    grid-row: 3 / 4

`;
    

const ProfileLoveContainer = styled.div`
    grid-column: 2 / 2;
    display: grid;
    gird-template-rows: repeat(3, 1fr);

`;

const MiniCardContainer =styled.div`
    grid-row: 1/2;
`;

function MyGarden() {
    return (
        <MyGardenWrapper>
            <LoveContainer>
                <LikeButton>
                    Like
                </LikeButton>
                <LikedButton>
                    Liked
                </LikedButton>
                <MatchButton>
                    Match
                </MatchButton>
            </LoveContainer>
            <ProfileLoveContainer>
                <MiniCardContainer>
                    Hello
                </MiniCardContainer>
            </ProfileLoveContainer>
        </MyGardenWrapper>
    );
}

export default MyGarden;