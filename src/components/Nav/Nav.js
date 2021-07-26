import styled from 'styled-components'
import Container from '../reusable/Container'
import Logo from '../reusable/Logo'
import InstagramIcon from '../reusable/InstagramIcon'
import FacebookIcon from '../reusable/FacebookIcon'

const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 10px;
`

const SocialMediaLinks = styled.div`
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-right: 9px;
`

const LinkLogo = styled.a`
    text-decoration: none;
`

const Nav = () => {
    return (
        <StyledContainer className='nav'>

            {/* logo */}
            <LinkLogo href="/#">
                <Logo />
            </LinkLogo>

            <SocialMediaLinks>

                {/* instagram link */}
                <a href="https://www.instagram.com/" target="blank" aria-label='instagram'>
                    <InstagramIcon />
                </a>

                {/* facebook link */}
                <a href="https://www.facebook.com/" target="blank" aria-label='facebook'>
                    <FacebookIcon />
                </a>

            </SocialMediaLinks>
        </StyledContainer>
    )
}

export default Nav
