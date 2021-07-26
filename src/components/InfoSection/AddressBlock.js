import styled from 'styled-components'
import { H2, H3 } from '../reusable/Headings'
import Container from '../reusable/Container'
import AddressImage from './AddressImage'

const AddressDiv = styled.div`
    padding-top: 150px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth} ){
        padding-top: 180px;
    }
`

const StyledContainer = styled(Container)`
    display: grid;
    row-gap: 60px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth} ){
        row-gap: 0;
    }
`

const StyledH2 = styled(H2)`
    padding-left: 25px;
    margin-bottom: 10px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 5px;
        left: 0;
        top: 0;
        background-color: ${({theme}) => theme.colors.orange};
    }

    @media screen and (min-width: ${({theme}) => theme.desktopWidth} ){
        margin-bottom: 20px;
    }

`

const StyledH3 = styled(H3)`
    margin-left: 25px;
`

const AddressBlock = () => {
    return (
        <AddressDiv>
            <StyledContainer>
                <div className="address-text">
                    <StyledH2 question>Gdzie nas znaleźć</StyledH2>
                    <StyledH3 boldText="Wyimaginowana 23, 18-400 Łomża">
                        Nasz lokal znajduje się pod adresem
                        <br />
                    </StyledH3>
                </div>
                <AddressImage ></AddressImage>
            </StyledContainer>
        </AddressDiv>
    )
}

export default AddressBlock
