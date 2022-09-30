import produce from 'immer'
import { IAction, EActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  tags: string[]
  description: string
  price: number
  imageUrl: string
}

interface ShoppingCartState {
  coffees: Coffee[]
}

export function coffeesReducer(state: ShoppingCartState, action: IAction<any>) {
  console.log(state)
  console.log(action)

  const map = new Map<
    EActionTypes,
    (state: ShoppingCartState, action: IAction<any>) => void
  >([
    [EActionTypes.ADD_COFFEE, addCoffee],
    [EActionTypes.REMOVE_COFFEE, removeCoffee],
  ])

  return map.has(action.type) ? map.get(action.type)!(state, action) : state
}

function addCoffee(
  state: ShoppingCartState,
  action: IAction<{ coffee: Coffee }>,
) {
  return produce(state, (draft) => {
    draft.coffees.push(action.payload.coffee)
  })
}

function removeCoffee(
  state: ShoppingCartState,
  action: IAction<{ coffeeId: string }>,
) {
  return produce(state, (draft) => {
    draft.coffees = draft.coffees.filter(
      (coffee) => coffee.id !== action.payload.coffeeId,
    )
  })
}
