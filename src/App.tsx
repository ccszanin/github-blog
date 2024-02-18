import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { GlobalStyle } from "./styles/global"
import AppRoutes from './Routes';




function App() {

  return (
    <>
       <ThemeProvider theme={defaultTheme}>
       <AppRoutes/>
      <GlobalStyle/>
      </ThemeProvider>
    </>
  )
}

export default App;
