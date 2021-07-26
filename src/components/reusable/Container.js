import styled from 'styled-components'

const ContainerDiv = styled.div`
    padding: 0 16px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth} ){
        margin-left: auto;
        margin-right: auto;
        max-width: ${({wide}) => wide ? '1200px' : '1000px'};
    }
`


const Container = ({className ,children, wide}) =>
    <ContainerDiv wide={wide} className={className}>
        {children}
    </ContainerDiv>


export default Container
