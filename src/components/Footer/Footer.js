import styled from 'styled-components'
import Logo from '../reusable/Logo'
import InstagramIcon from '../reusable/InstagramIcon.js'
import FacebookIcon from '../reusable/FacebookIcon.js'

const StyledFooter = styled.footer`
    position: relative;
    padding: 80px 0;
    background-color: ${({theme}) => theme.colors.dark};
    display: grid;
    justify-items: center;
    row-gap: 50px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: -20px;
        height: 25px;
        width: 100%;
        background-color: inherit;
        clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
    }
`

const LinkLogo = styled.a`
    text-decoration: none;
`

const SocialMediaLinks = styled.div`
    display: flex;
    align-items: center;
    column-gap: 30px;
`

const CreatedBy = styled.p`
    color: ${({theme}) => theme.colors.white};
    opacity: .8;
    font-size: 12px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <LinkLogo href="/#">
                <Logo white />
            </LinkLogo>
            <SocialMediaLinks>
                <a href="https://www.instagram.com/" target="blank" aria-label='instagram'>
                    <InstagramIcon white />
                </a>
                <a href="https://www.facebook.com/" target="blank" aria-label='facebook'>
                    <FacebookIcon white />
                </a>
            </SocialMediaLinks>
            <CreatedBy>Created by Patryk Zabłocki</CreatedBy>
        </StyledFooter>
    )
}

export default Footer
