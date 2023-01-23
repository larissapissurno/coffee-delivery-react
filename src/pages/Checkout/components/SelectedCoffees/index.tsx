import {
  RemoveCoffeeButton,
  SelectedCoffee,
  SelectedCoffeeDescription,
  SelectedCoffeesTotals,
} from './styles'
import { SelectQuantity } from '@components/SelectQuantity'
import { Trash } from 'phosphor-react'
import { TextRegularM, TextRegularS, TextRegularL } from 'src/styles/typography'
import { useShoppingCart } from 'src/contexts/ShoppingCartContext'
import { formattedCurrency } from 'src/_shared/utils/utils'

export function SelectedCoffees() {
  const { items, updateCoffeeQuantity, removeCoffee } = useShoppingCart()

  const deliveryFee = 3.5
  const totalItemsValue = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const totalValue = totalItemsValue + deliveryFee

  return (
    <>
      {items.map((item) => (
        <SelectedCoffee key={item.id}>
          <div>
            <img src={item.imageUrl} alt="" />

            <SelectedCoffeeDescription>
              <TextRegularM>{item.name}</TextRegularM>

              <div>
                <SelectQuantity
                  quantity={item.quantity}
                  onValueChange={(quantity: number) =>
                    updateCoffeeQuantity(item, quantity)
                  }
                ></SelectQuantity>
                <RemoveCoffeeButton
                  type="button"
                  onClick={() => removeCoffee(item.id)}
                >
                  <Trash size={16} /> Remover
                </RemoveCoffeeButton>
              </div>
            </SelectedCoffeeDescription>
          </div>

          <span>{formattedCurrency(item.price)}</span>
        </SelectedCoffee>
      ))}

      <SelectedCoffeesTotals>
        <div>
          <TextRegularS>Total de itens</TextRegularS>

          <TextRegularM>{formattedCurrency(totalItemsValue)}</TextRegularM>
        </div>

        <div>
          <TextRegularS>Entrega</TextRegularS>

          <TextRegularM>{formattedCurrency(deliveryFee)}</TextRegularM>
        </div>

        <div>
          <TextRegularL bold>Total</TextRegularL>

          <TextRegularL bold>{formattedCurrency(totalValue)}</TextRegularL>
        </div>
      </SelectedCoffeesTotals>
    </>
  )
}
