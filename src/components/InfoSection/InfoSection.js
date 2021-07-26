import styled from 'styled-components'
import AddressBlock from './AddressBlock'
import PhoneBlock from './PhoneBlock'
import OpeningHoursBlock from './OpeningHoursBlock'

const StyledSection = styled.section`
    background-color: ${({theme}) => theme.colors.white};
`

const InfoSection = () => {
    return (
        <StyledSection>
            <AddressBlock />
            <PhoneBlock />
            <OpeningHoursBlock />
        </StyledSection>
    )
}

export default InfoSection
