import { styled } from 'styled-components';


const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20em;
    color: #9494cc;
    font-size: 12px;

    @media screen and (max-width: 768px) {
        font-size: 7px;
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