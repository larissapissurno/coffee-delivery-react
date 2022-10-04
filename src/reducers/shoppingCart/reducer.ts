import produce from 'immer'
import { IAction, EActionTypes, TUpdateCoffeeAction } from './actions'

export interface Coffee {
  id: string
  name: string
  tags: string[]
  description: string
  price: number
  imageUrl: string
}

export interface ShoppingCartItem extends Coffee {
  quantity: number
}

interface ShoppingCartState {
  items: ShoppingCartItem[]
}

export function shoppingCartReducer(
  state: ShoppingCartState,
  action: IAction<any>,
): ShoppingCartState {
  console.log(state)
  console.log(action)

  const map = new Map<
    EActionTypes,
    (state: ShoppingCartState, action: any) => ShoppingCartState
  >([
    [EActionTypes.UPDATE_COFFEE_QUANTITY, updateCoffee],
    [EActionTypes.REMOVE_COFFEE, removeCoffee],
  ])

  return map.has(action.type) ? map.get(action.type)!(state, action) : state
}

function updateCoffee(
  state: ShoppingCartState,
  action: IAction<TUpdateCoffeeAction>,
): ShoppingCartState {
  return produce(state, (draft) => {
    const { coffee, quantity } = action.payload
    const existentCoffee = draft.items.find((item) => item.id === coffee.id)

    if (existentCoffee && quantity === 0) {
      draft.items = draft.items.filter(
        (coffee) => coffee.id !== existentCoffee.id,
      )

      return
    }

    if (!existentCoffee) {
      draft.items.push({
        ...coffee,
        quantity,
      })

      return
    }

    existentCoffee.quantity = quantity
  })
}

function removeCoffee(
  state: ShoppingCartState,
  action: IAction<{ coffeeId: string }>,
): ShoppingCartState {
  return produce(state, (draft) => {
    draft.items = draft.items.filter(
      (coffee) => coffee.id !== action.payload.coffeeId,
    )
  })
}
