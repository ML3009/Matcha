import { styled } from 'styled-components';


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%; height: 50px;
    bottom: 0; left: 0; right: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;

    div {
        margin: 0 100px;
    }

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