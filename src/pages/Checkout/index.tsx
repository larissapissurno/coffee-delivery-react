import { Input } from '@components/Input/styles'
import { PaymentType } from '@components/PaymentType'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { TextRegularM, TextRegularS, TitleXS } from 'src/styles/typography'
import {
  ContentWrapper,
  Grid,
  LocaleInfo,
  OrderHeader,
  PaymentInfo,
  PaymentTypeSection,
  StyledForm,
} from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'

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

          <SelectedCoffees />
        </div>
      </StyledForm>
    </ContentWrapper>
  )
}
