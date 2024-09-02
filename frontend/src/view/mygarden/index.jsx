import styled from 'styled-components';
import MiniCards from '../../component/miniwildcard';

const MyGardenWrapper = styled.div `
    display: grid;
    min-height: 100vh;
    place-items: center;
    grid-template-rows: auto auto auto auto ;
    grid-template-columns: auto auto auto;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

const LoveContainer = styled.div`
    grid-column: 1 / 2;
    display: grid;
    gird-template-rows: repeat(3, 1fr);
    gap: 4em;
    justify-content: center;
    align-items: center;
    margin: 1em 3em 2em;
    @media screen and (max-width: 1024px) {
        grid-column: 1 / -1;
        margin: 1em 2em;
    }
`;

const LikeButton = styled.button`
    grid-column: 1 / 2;
    grid-row: 1 / 2;

`;

const LikedButton = styled.button `
    grid-column: 2 / 3;
    grid-row: 1 / 2;
`;

const MatchButton = styled.button`
    grid-row: 1 / 2;
    grid-column: 3 / 4;
`;
    
const ProfileLoveContainer = styled.div`
    grid-row: 3 / 4;
    display: grid;
    grid-template-rows: repeat(3, auto);
    
    @media screen and (max-width: 1024px) {
        grid-row: auto;
        grid-column: 1 / -1;
    }
`;



const PresentationContainer = styled.h1 `
    @media screen and (max-width: 1024px) {
        grid-column: 1 / -1;
        text-align: center;
    }`;

function MyGarden() {
    return (
        <MyGardenWrapper>
            <PresentationContainer>
                All the flowers in your garden.
            </PresentationContainer>
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
                <MiniCards>
                    Hello
                </MiniCards>
            </ProfileLoveContainer>
        </MyGardenWrapper>
    );
}

export default MyGarden;