import { Input } from '@components/Input/styles'
import { PaymentType } from '@components/PaymentType'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  TextRegularL,
  TextRegularM,
  TextRegularS,
  TitleXS,
} from 'src/styles/typography'
import {
  ContentWrapper,
  Grid,
  LocaleInfo,
  OrderHeader,
  PaymentInfo,
  PaymentTypeSection,
  SelectedCoffee,
  SelectedCoffeeDescription,
  SelectedCoffees,
  SelectedCoffeesTotals,
  StyledForm,
} from './styles'
import coffeeImg from 'src/assets/coffees/american.png'
import { SelectQuantity } from '@components/SelectQuantity'

export function Checkout() {
  return (
    <ContentWrapper>
      <StyledForm>
        <div>
          <TitleXS>Complete seu pedido</TitleXS>

          <LocaleInfo>
            <OrderHeader variant="primary-700">
              <MapPinLine size={22} />

              <div>
                <TextRegularM color="base-subtitle">
                  Endereço de Entrega
                </TextRegularM>
                <TextRegularS>
                  Informe o endereço onde deseja receber seu pedido
                </TextRegularS>
              </div>
            </OrderHeader>

            <Grid>
              <Input size={30} id="zipCode" placeholder="CEP" />
              <Input size={100} id="street" placeholder="Rua" />
              <Input size={30} id="number" placeholder="Número" />
              <Input size={65} id="complement" placeholder="Complemento" grow />
              <Input size={30} id="district" placeholder="Bairro" />
              <Input size={55} id="town" placeholder="Cidade" />
              <Input size={10} id="state" placeholder="UF" grow />
            </Grid>
          </LocaleInfo>
          <PaymentInfo>
            <OrderHeader variant="accent-700">
              <CurrencyDollar size={22} />

              <div>
                <TextRegularM color="base-subtitle">Pagamento</TextRegularM>
                <TextRegularS>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextRegularS>
              </div>
            </OrderHeader>

            <PaymentTypeSection>
              <PaymentType icon={<CreditCard />} label="Cartão de Crédito" />
              <PaymentType icon={<Bank />} label="Cartão de Débito" />
              <PaymentType icon={<Money />} label="Dinheiro" />
            </PaymentTypeSection>
          </PaymentInfo>
        </div>

        <div>
          <TitleXS>Cafés selecionados</TitleXS>

          <SelectedCoffees>
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
          </SelectedCoffees>
        </div>
      </StyledForm>
    </ContentWrapper>
  )
}
