import {Container, ButtonContainer, Title, SubTitle} from './style';
import Register from '../../component/home_register/index';
import Login from '../../component/home_login/index';

function Homepage() {
	return (
		<Container>
			<Title>Plant your date</Title>
			<SubTitle>✿ Ready to meet your flowermate ? ✿</SubTitle>
			<ButtonContainer>
				<Login />
				<Register/>
			</ButtonContainer>
		</Container>
	);
}

export default Homepage;