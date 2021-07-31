import styled from 'styled-components'
import { H2 } from '../reusable/Headings'

import PriceList from './PriceList'

const StyledSection = styled.section`
    position: relative;
    background-color: ${({theme}) => theme.colors.orange};
    padding: 80px 0 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 60px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        padding: 120px 0 200px;
    }
`

const StyledH2 = styled(H2)`
    background-color: ${({theme}) => theme.colors.white};
    padding: 5px 15px;
    box-shadow: 0px 2px 4px rgba(51, 51, 51, 0.2);

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        padding: 10px 25px;
    }
`


const PriceListSection = () => {
    return (
        <StyledSection className='price-list'>
            <StyledH2 boldText="Cennik"></StyledH2>
            <PriceList className='items' />
        </StyledSection>
    )
}

export default PriceListSection
