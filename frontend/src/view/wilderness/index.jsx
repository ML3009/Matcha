import styled from 'styled-components';
import Card from '../../component/wildcard';
import Interact from '../../component/wildinteract';

const ProfileWrapper = styled.div`
  display: grid;
  grid-rows: repeat(2, 0.4fr);
  justify-content: center;
  align-items: center;
  gap: 4em;
  
`;



function Wilderness(){
    return (
            <ProfileWrapper>
                <Card />
                <Interact />
            </ProfileWrapper>

    )
}

export default Wilderness;