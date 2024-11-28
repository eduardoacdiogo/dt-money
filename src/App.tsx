import { ThemeProvider } from 'styled-components';

import { Transactions } from './pages/Transactions';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}

export default App
