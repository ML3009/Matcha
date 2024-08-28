import styled from 'styled-components';
import Card from '../../component/wildcard';
import Interact from '../../component/wildinteract';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 10px;

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