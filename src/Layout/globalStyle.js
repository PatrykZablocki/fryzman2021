import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: ${({theme}) => theme.fontFamily};
    color: ${({theme}) => theme.colors.black};
    overflow-x: hidden;
    letter-spacing: .05em;
    font-size: 15px;

    @media screen and (min-width: ${({theme}) => theme.desktopWidth}){
        font-size: 17px;
    }
}


/* scrollbar */
body::-webkit-scrollbar {
    width: 1rem;
}
body::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0, .6);
  border-radius: 25px;
  border: 3px solid #eee;
}
body::-webkit-scrollbar-track {
  background: #eee;
}
body::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0,0,0, .4);
}


/* gsap pre-load */
  body {opacity: 0};
`
