import styled from 'styled-components'
import logoIcon from '../../images/logo-icon.png'

const LogoWrapper = styled.div`
display: flex;
align-items: center;
`

const LogoText = styled.p`
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: .2em;
    margin-left: 10px;
    color: ${({white, theme}) => white ? theme.colors.white : theme.colors.black};
`

const Logo = ({white}) =>
    <LogoWrapper>
        <img src={logoIcon} alt="" />
        <LogoText white={white}>Fryzman</LogoText>
    </LogoWrapper>

export default Logo
