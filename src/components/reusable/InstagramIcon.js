import styled from 'styled-components'
import { ReactComponent as InstagramSVG } from '../../images/ig-icon.svg'

const StyledInstagramIcon = styled(InstagramSVG)`
    display: block;

    path {
        fill: ${({white, theme}) => white ? theme.colors.white : theme.colors.black};
    }
`

const InstagramIcon = ({white}) => <StyledInstagramIcon white={white && 1} />

export default InstagramIcon
