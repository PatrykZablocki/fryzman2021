import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './globalStyle'
import GsapAnim from './GsapAnim'

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
            <GlobalStyle />
            <GsapAnim />
                {children}
            </>
        </ThemeProvider>
    )
}

export default Layout
