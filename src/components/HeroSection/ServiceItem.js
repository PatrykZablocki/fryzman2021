import styled from 'styled-components'
import { ReactComponent as CheckSVG } from '../../images/check-icon.svg'


const ServiceItemDiv = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`


const CheckIcon = styled(CheckSVG)`
    width: 20px;
    height: 20px;
`

const ServiceItem = ({children}) => {
    return (
        <ServiceItemDiv>
            <CheckIcon />
            {children}
        </ServiceItemDiv>
    )
}

export default ServiceItem
