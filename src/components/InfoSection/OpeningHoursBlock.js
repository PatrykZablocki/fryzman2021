import styled from 'styled-components'
import { H2, H3 } from '../reusable/Headings'

const OpeningHoursDiv = styled.div`
    padding: 80px 0;
    text-align: center;
    display: grid;
    justify-content: center;
    row-gap: 30px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        row-gap: 50px;
        padding: 150px 0;
    }
`

const Items = styled.div`
    display: grid;
    row-gap: 25px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        grid-template-columns: repeat(3, 1fr);
        column-gap: 50px;
    }
`

const Item = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.black};
    padding: 5px;
    width: 250px;
    box-shadow: 2px 2px 0px ${({theme}) => theme.colors.orange};

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        padding: 10px;
        width: 260px;
    }
`


const OpeningHoursBlock = () => {
    return (
        <OpeningHoursDiv className="opening-hours">
            <H2 question>Kiedy otwarte</H2>
            <Items className="items" >
                <Item>
                    <H3 boldText="10-18">Poniedziałek</H3>
                </Item>
                <Item>
                    <H3 boldText="8-16">Wtorek-Piątek</H3>
                </Item>
                <Item>
                    <H3 boldText="7-13">Sobota</H3>
                </Item>
            </Items>
        </OpeningHoursDiv>
    )
}

export default OpeningHoursBlock
