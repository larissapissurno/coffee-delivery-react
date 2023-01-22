import {
  SelectedCoffee,
  SelectedCoffeeDescription,
  SelectedCoffeesTotals,
  SelectedCoffeesWrapper,
} from './styles'
import coffeeImg from 'src/assets/coffees/american.png'
import { SelectQuantity } from '@components/SelectQuantity'
import { Trash } from 'phosphor-react'
import { TextRegularM, TextRegularS, TextRegularL } from 'src/styles/typography'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesWrapper>
      <SelectedCoffee>
        <div>
          <img src={coffeeImg} alt="a cup of coffee" />

          <SelectedCoffeeDescription>
            <TextRegularM>Expresso Tradicional</TextRegularM>

            <div>
              <SelectQuantity
                quantity={1}
                onValueChange={() => true}
              ></SelectQuantity>
              <button type="button">
                <Trash size={16} /> Remover
              </button>
            </div>
          </SelectedCoffeeDescription>
        </div>

        <span>R$ 9,90</span>
      </SelectedCoffee>

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
