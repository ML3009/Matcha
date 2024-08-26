import styled from 'styled-components';
import picture from '../../assets/satxie.jpg';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 10px;

`;

const Picture = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 75px;
`;


function Wilderness(){
    return (
            <ProfileWrapper>
                <Picture src={picture} />
            </ProfileWrapper>

    )
}

export default Wilderness;