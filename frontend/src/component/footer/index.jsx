import { styled } from 'styled-components';


const FooterContainer = styled.footer`
    
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;

    @media screen and (max-width: 768px) {
        position: relative;
        font-size: 10px;
         div {
            margin: 0 10px;
        }
    }
`;

const RightFooter = styled.div`
    place-self: center;
`;

const CenterFooter = styled.div`
    place-self: center;
`;

const LeftFooter = styled.div`
    place-self: center;
`;


function Footer() {
    return (
        <FooterContainer>
            <RightFooter>© 2024 Plant your date</RightFooter>
            <CenterFooter>Terms & Conditions</CenterFooter>
            <LeftFooter>Privacy Policy</LeftFooter>
        </FooterContainer>
    )
}

export default Footer;