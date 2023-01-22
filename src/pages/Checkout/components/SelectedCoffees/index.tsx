import {
  SelectedCoffee,
  SelectedCoffeeDescription,
  SelectedCoffeesTotals,
  SelectedCoffeesWrapper,
} from './styles'
import { SelectQuantity } from '@components/SelectQuantity'
import { Trash } from 'phosphor-react'
import { TextRegularM, TextRegularS, TextRegularL } from 'src/styles/typography'
import { useShoppingCart } from 'src/contexts/ShoppingCartContext'
import { formattedCurrency } from 'src/_shared/utils/utils'

export function SelectedCoffees() {
  const { items } = useShoppingCart()

  return (
    <SelectedCoffeesWrapper>
      {items.map((item) => (
        <SelectedCoffee key={item.id}>
          <div>
            <img src={item.imageUrl} alt="" />

            <SelectedCoffeeDescription>
              <TextRegularM>{item.name}</TextRegularM>

              <div>
                <SelectQuantity
                  quantity={item.quantity}
                  onValueChange={() => true}
                ></SelectQuantity>
                <button type="button">
                  <Trash size={16} /> Remover
                </button>
              </div>
            </SelectedCoffeeDescription>
          </div>

          <span>{formattedCurrency(item.price)}</span>
        </SelectedCoffee>
      ))}

      <SelectedCoffeesTotals>
        <div>
          <TextRegularS>Total de itens</TextRegularS>

          <TextRegularM>R$ 29,70</TextRegularM>
        </div>

        <div>
          <TextRegularS>Entrega</TextRegularS>

          <TextRegularM>R$ 3,50</TextRegularM>
        </div>

        <div>
          <TextRegularL bold>Total</TextRegularL>

          <TextRegularL bold>R$ 33,20</TextRegularL>
        </div>
      </SelectedCoffeesTotals>
    </SelectedCoffeesWrapper>
  )
}
