import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import {
  removeCoffeeAction,
  updateCoffeeAction,
} from 'src/reducers/shoppingCart/actions'
import {
  Coffee,
  ShoppingCartItem,
  shoppingCartReducer,
} from 'src/reducers/shoppingCart/reducer'
import { SHOPPING_CART_STATE } from 'src/_shared/constants/local-storage-keys.constants'
import data from '@assets/coffees/data.json'
interface ShoppingCartContextData {
  items: ShoppingCartItem[]
  updateCoffeeQuantity: (coffee: Coffee, quantity: number) => void
  removeCoffee: (coffeeId: string) => void
  getAllCoffees: () => ShoppingCartItem[]
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export function useShoppingCart(): ShoppingCartContextData {
  return useContext(ShoppingCartContext)
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}
export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shoppingCartState, dispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    },
    () => {
      const storedShoppingCartState = localStorage.getItem(SHOPPING_CART_STATE)

      if (storedShoppingCartState) {
        return JSON.parse(storedShoppingCartState)
      } else {
        return {
          items: [],
        }
      }
    },
  )

  const { items } = shoppingCartState

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCartState)
    localStorage.setItem(SHOPPING_CART_STATE, stateJSON)
  }, [shoppingCartState])

  function updateCoffeeQuantity(coffee: Coffee, quantity: number) {
    dispatch(updateCoffeeAction({ coffee, quantity }))
  }

  function removeCoffee(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  function getAllCoffees() {
    const mapItemQuantity = items.reduce((prev, curr: ShoppingCartItem) => {
      return prev.set(curr.id, curr.quantity)
    }, new Map<string, number>())

    return data.map((coffee: ShoppingCartItem) => {
      coffee.quantity = mapItemQuantity.get(coffee.id) ?? 0
      return coffee
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={
        {
          items,
          updateCoffeeQuantity,
          removeCoffee,
          getAllCoffees,
        } as ShoppingCartContextData
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
