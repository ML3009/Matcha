import {Container, ButtonContainer, Title, SubTitle, LoginButton, RegisterButton} from './style';

function Homepage() {
	return (
		<Container>
			<Title>Plant your date</Title>
			<SubTitle>Ready to meet your flowermate ?</SubTitle>
			<ButtonContainer>
				<LoginButton>Login</LoginButton>
				<RegisterButton>Register</RegisterButton>
			</ButtonContainer>
		</Container>
	);
}

export default Homepage;