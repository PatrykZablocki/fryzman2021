import styled from 'styled-components'
import HeroImagePNG from '../../images/hero-image.png'

const Wrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    z-index: 1;
`

const HeroImg = styled.img`
    width: 36%;
    max-width: 218px;
    position: relative;
    top: -5%;
    overflow: hidden;
`

const CircleBg = styled.div`
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    width: 50%;
    max-width: 292px;
    aspect-ratio: 1;
    background-color: ${({theme}) => theme.colors.orange};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .circle {
        content: '';
        position: absolute;
        aspect-ratio: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: inherit;

        &--one {
            width: 105%;
            border: 1px solid ${({theme}) => theme.colors.orange};
        }

        &--two {
            width: 125%;
            border: 1px solid ${({theme}) => theme.colors.yellow};
        }
    }
`

const HeroImage = ({className}) => {
    return (
        <Wrapper className={className}>
            <HeroImg src={HeroImagePNG} alt="" className='heroImg' />
            <CircleBg className='heroCircleBg' >
                <div className="circle circle--one"></div>
                <div className="circle circle--two"></div>
            </CircleBg>
        </Wrapper>
    )
}

export default HeroImage
