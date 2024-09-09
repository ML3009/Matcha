import { styled } from 'styled-components';


const FooterContainer = styled.footer`
    grid-area: footer;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
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
