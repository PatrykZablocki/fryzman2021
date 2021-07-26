import styled from 'styled-components'
import { ReactComponent as AddressImageSVG } from '../../images/address-unDraw.svg'

const StyledAddressImage = styled(AddressImageSVG)`
    justify-self: center;
    width: 70%;
    max-width: 400px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth} ){
        margin-right: 10%;
        justify-self: end;
    }
`

const AddressImage = () => <StyledAddressImage className="address-image" />

export default AddressImage
