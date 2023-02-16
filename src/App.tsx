import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrderContextProvider } from './contexts/OrderContext'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename="/coffee-delivery-react">
        <ShoppingCartContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </ShoppingCartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
