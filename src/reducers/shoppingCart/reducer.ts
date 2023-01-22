import produce from 'immer'
import { WritableDraft } from 'immer/dist/internal'
import { IAction, EActionTypes, TUpdateCoffeeAction } from './actions'

export interface Coffee {
  id: string
  name: string
  tags: string[]
  description: string
  price: number
  imageUrl: string
}

export interface ShoppingCartItem {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface ShoppingCartState {
  items: ShoppingCartItem[]
}

export function shoppingCartReducer(
  state: ShoppingCartState,
  action: IAction<any>,
): ShoppingCartState {
  const map = new Map<
    EActionTypes,
    (state: ShoppingCartState, action: any) => ShoppingCartState
  >([
    [EActionTypes.UPDATE_COFFEE_QUANTITY, updateCoffeeQuantity],
    [EActionTypes.REMOVE_COFFEE, removeCoffee],
  ])

  return map.has(action.type) ? map.get(action.type)!(state, action) : state
}

function updateCoffeeQuantity(
  state: ShoppingCartState,
  action: IAction<TUpdateCoffeeAction>,
): ShoppingCartState {
  const addCoffeeToCart = (
    draft: WritableDraft<ShoppingCartState>,
    coffee: Coffee,
    quantity: number,
  ) => {
    draft.items.push({
      ...coffee,
      quantity,
    })
  }

  const removeCoffeFromCart = (
    draft: WritableDraft<ShoppingCartState>,
    existentCoffee: WritableDraft<ShoppingCartItem>,
  ) => {
    draft.items = draft.items.filter(
      (coffee) => coffee.id !== existentCoffee.id,
    )
  }

  return produce(state, (draft) => {
    const { coffee, quantity } = action.payload
    const existentCoffee = draft.items.find((item) => item.id === coffee.id)

    if (existentCoffee && quantity === 0) {
      removeCoffeFromCart(draft, existentCoffee)

      return
    }

    if (!existentCoffee && quantity > 0) {
      addCoffeeToCart(draft, coffee, quantity)

      return
    }

    if (existentCoffee) {
      existentCoffee.quantity = quantity
    }
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
