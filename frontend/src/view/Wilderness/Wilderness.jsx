import styled from 'styled-components';
import Card from '../../component/WildCard/WildCard';
import Like from '../../component/Like/Like';
import Dislike from '../../component/Dislike/Dislike';
import Biography from '../../component/Biography/Biography';



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
