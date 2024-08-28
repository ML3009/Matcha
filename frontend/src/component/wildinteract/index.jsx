import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ChoicesContainer = styled.div`
`;

const LikeContainer = styled.button`
`;

const SeeProfile = styled(Link) `
`;

const DislikeContainer = styled.button`
`;


function Interact() {
    return (
            <ChoicesContainer>
                <LikeContainer>
                    👍
                </LikeContainer>
                <SeeProfile>
                    📖
                </SeeProfile>
                <DislikeContainer>
                    👎
                </DislikeContainer>
            </ChoicesContainer>
    )
}

export default Interact;