import styled from 'styled-components';
import Card from '../../component/wildcard';
import Like from '../../component/like';
import Dislike from '../../component/dislike';
import Biography from '../../component/biography';



const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 0.4fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

`;

function Wilderness(){
    return (
            <ProfileWrapper>
                <Card />
                <Like />
                <Dislike />
                <Biography />
            </ProfileWrapper>

    )
}

export default Wilderness;
