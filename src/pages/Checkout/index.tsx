import { Input } from '@components/Input/styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { TextRegularM, TitleXS } from 'src/styles/typography'
import {
  ContentWrapper,
  Grid,
  LocaleInfo,
  OrderHeader,
  PaymentInfo,
  StyledForm,
} from './styles'

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
                <p>Informe o endereço onde deseja receber seu pedido</p>
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
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </OrderHeader>
          </PaymentInfo>
        </div>

        <div>
          <TitleXS>Complete seu pedido</TitleXS>
        </div>
      </StyledForm>
    </ContentWrapper>
  )
}
