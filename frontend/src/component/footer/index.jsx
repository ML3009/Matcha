import { styled } from 'styled-components';


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 0; /* Ajustez le padding selon vos besoins */
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    width: 100%;
    background-color: black;

    div {
        margin: 0 50px;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <div>© 2024 Plant your date</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
        </FooterContainer>
    )
}

export default Footer;