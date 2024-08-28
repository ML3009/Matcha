import { styled } from 'styled-components';


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 90px 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;

    div {
        margin: 0 100px;
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