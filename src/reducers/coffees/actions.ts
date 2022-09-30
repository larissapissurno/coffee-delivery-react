import { Coffee } from './reducer'

export enum EActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export interface IAction<T> {
  type: EActionTypes
  payload: T
}

export type TAddCoffeeAction = { coffee: Coffee }
export function addCoffeeAction(coffee: Coffee): IAction<TAddCoffeeAction> {
  return {
    type: EActionTypes.ADD_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function removeCoffeeAction(
  coffeeId: string,
): IAction<{ coffeeId: string }> {
  return {
    type: EActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}
