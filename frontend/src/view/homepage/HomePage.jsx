import {Container, ButtonContainer, Title, SubTitle} from './style';
import Register from '../../component/HomeRegister/HomeRegister';
import Login from '../../component/HomeLogin/HomeLogin';

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