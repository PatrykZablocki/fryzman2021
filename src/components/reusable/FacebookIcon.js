import styled from 'styled-components'
import { ReactComponent as FacebookSVG } from '../../images/fb-icon.svg'

const StyledFacebookIcon = styled(FacebookSVG)`
    display: block;

    path {
        fill: ${({white, theme}) => white ? theme.colors.white : theme.colors.black};
    }
`

const FacebookIcon = ({white}) => <StyledFacebookIcon white={white && 1} />

export default FacebookIcon
