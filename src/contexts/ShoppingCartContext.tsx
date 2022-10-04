import { createContext, ReactNode } from 'react'
import { Coffee } from 'src/reducers/shoppingCart/reducer'

interface ShoppingCartContextData {
  coffees: Coffee[]
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: string) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)

interface ShoppingCartContextProviderProps {
  children: ReactNode
}
export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{} as ShoppingCartContextData}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
