import styled from 'styled-components'
import { H2 } from '../reusable/Headings'

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

const Items = styled.div`
    padding: 0 20px;
    width: 100%;
    max-width: 800px;
    display: grid;
    row-gap: 12px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        row-gap: 25px;
    }
`

const Item = styled.div`
    font-size: 16px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px dashed ${({theme}) => theme.colors.white};

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        padding: 10px;
    }
`

const ServicePrice = styled.span`
    font-weight: 700;
`


const PriceListSection = () => {
    return (
        <StyledSection className='price-list'>
            <StyledH2 boldText="Cennik"></StyledH2>
            <Items className="items">
                <Item>
                    Strzyżenie włosów
                    <ServicePrice>40zł</ServicePrice>
                </Item>
                <Item>
                    Strzyżenie włosów (do lat 15)
                    <ServicePrice>35zł</ServicePrice>
                </Item>
                <Item>
                    Strzyżenie włosów (ojciec + syn)
                    <ServicePrice>70zł</ServicePrice>
                </Item>
                <Item>
                    Golenie głowy brzytwą
                    <ServicePrice>40zł</ServicePrice>
                </Item>
                <Item>
                    Golenie twarzy brzytwą
                    <ServicePrice>25zł</ServicePrice>
                </Item>
                <Item>
                    Strzyżenie brody
                    <ServicePrice>30zł</ServicePrice>
                </Item>
            </Items>
        </StyledSection>
    )
}

export default PriceListSection
