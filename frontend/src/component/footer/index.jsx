import { styled } from 'styled-components';


const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20em;
    color: #9494cc;
    font-size: 12px;

    @media screen and (max-width: 768px) {
        position: relative;
        font-size: 10px;
         div {
            margin: 0 10px;
        }
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