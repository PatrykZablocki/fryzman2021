import styled from 'styled-components'

const BoldText = styled.span`
    color: ${({theme}) => theme.colors.orange};
    font-weight: 700;
`


// h1
const StyledH1 = styled.h1`
    font-size: 30px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        font-size: 40px;
    }
`

export const H1 = ({children, className}) => {
    return (
        <StyledH1 className={className}>
            {children}
        </StyledH1>
    )
}


// h2
const StyledH2 = styled.h2`
    font-size: 21px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        font-size: 30px;
    }
`
const QuestionMark = styled.span`
    color: ${({theme}) => theme.colors.orange};
`

export const H2 = ({children, className, question, boldText}) => {
    return (
        <StyledH2 className={className}>
            {children}
            {boldText && <BoldText> {boldText}</BoldText>}
            {question && <QuestionMark>?</QuestionMark>}
        </StyledH2>
    )
}


// h3
const StyledH3 = styled.h3`
    font-weight: 400;
    font-size: 16px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        font-size: 20px;
    }
`

export const H3 = ({children, className, boldText}) => {
    return (
        <StyledH3 className={className}>
            {children}
            {boldText && <BoldText> {boldText}</BoldText>}
        </StyledH3>
    )
}
