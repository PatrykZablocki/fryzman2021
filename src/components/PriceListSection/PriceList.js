import styled from 'styled-components'

import { priceList } from './priceList.data'

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

const PriceList = ({className}) => {
    return (
        <Items className={className}>
            {
                priceList.map(({name, price}) =>
                    <Item key={name}>
                        {name}
                        <ServicePrice>
                            {price}zł
                        </ServicePrice>
                    </Item>
                )
            }
        </Items>
    )
}

export default PriceList
