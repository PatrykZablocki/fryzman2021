import styled from 'styled-components'
import Container from '../reusable/Container'
import { H2, H3 } from '../reusable/Headings'

const PhoneDiv = styled.div`
    padding: 0 20px;
`

const StyledContainer = styled(Container)`
    position: relative;
    text-align: center;
    background-color: ${({theme}) => theme.colors.light};
    padding-top: 30px;
    padding-bottom: 30px;
    display: grid;
    row-gap: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        padding-top: 50px;
        padding-bottom: 50px;
    }
`

const Circle = styled.div`
    position: absolute;
    width: 30px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.orange};
    transform: translate(-50%, -50%);

    &::before {
        content: '';
        position: absolute;
        width: 80%;
        aspect-ratio: 1;
        border-radius: inherit;
        background-color: ${({theme}) => theme.colors.white};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        width: 45px;
    }
`

const PhoneBlock = () => {
    return (
        <PhoneDiv>
            <StyledContainer className="phone-container">
                <Circle />

                <H2 boldText="Zadzwoń!">Chcesz umówić się na wizytę?</H2>
                <H3 boldText="321 222 123">Nasz numer to</H3>
            </StyledContainer>
        </PhoneDiv>
    )
}

export default PhoneBlock
