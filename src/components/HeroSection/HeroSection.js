import styled from 'styled-components'
import Nav from '../Nav/Nav'
import Container from '../reusable/Container'
import { H1, H2 } from '../reusable/Headings'
import ServiceItem from './ServiceItem'
import HeroImage from './HeroImage'

const StyledSection = styled.section`
    background-color: ${({theme}) => theme.colors.white};
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
`

const StyledContainer = styled(Container)`
    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        display: grid;
        column-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        align-content: center;
        height: clamp(500px, 80vh, 1000px);
    }
`

const TextBg = styled.span`
    position: relative;
    display: inline-block;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: -2%;
        left: -3%;
        width: 106%;
        height: 104%;
        background-color: ${({theme}) => theme.colors.yellow};
        z-index: -1;
    }
`;

const TextWrapper = styled.div`
    margin: 100px 0 80px;
    z-index: 1;
`

const StyledH1 = styled(H1)`
    margin-bottom: 50px;
`

const ServicesWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

const StyledHeroImage = styled(HeroImage)`
    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        grid-row-start: 1;
    }
`

const HeroBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.colors.light};
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 98%, 0% 100%);

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
    }
`



const HeroSection = () => {
    return (
        <StyledSection>
            <Nav />

            <StyledContainer wide>
                <TextWrapper className='hero-text'>
                    <StyledH1>Fryzman - fryzjer <TextBg>męski</TextBg></StyledH1>
                    <H2 question>Co oferujemy</H2>
                    <ServicesWrapper className="hero-serivces">
                        <ServiceItem>Strzyżenie męskie</ServiceItem>
                        <ServiceItem>Strzyżenie dziecięce</ServiceItem>
                        <ServiceItem>Usługi barberskie</ServiceItem>
                    </ServicesWrapper>
                </TextWrapper>

                <StyledHeroImage />
            </StyledContainer>

            <HeroBackground className='hero-background'></HeroBackground>
        </StyledSection>
    )
}

export default HeroSection
