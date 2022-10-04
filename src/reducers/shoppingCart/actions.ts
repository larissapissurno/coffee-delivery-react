import { Coffee } from './reducer'

export enum EActionTypes {
  UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export interface IAction<T> {
  type: EActionTypes
  payload: T
}

export type TUpdateCoffeeAction = { coffee: Coffee; quantity: number }
export function updateCoffeeAction({
  coffee,
  quantity,
}: TUpdateCoffeeAction): IAction<TUpdateCoffeeAction> {
  return {
    type: EActionTypes.UPDATE_COFFEE_QUANTITY,
    payload: {
      coffee,
      quantity,
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
