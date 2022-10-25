import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { TitleXS } from 'src/styles/typography'
import { ContentWrapper, StyledForm } from './styles'

export function Checkout() {
  return (
    <ContentWrapper>
      <StyledForm>
        <div>
          <TitleXS>Complete seu pedido</TitleXS>

          <div>
            <div>
              <MapPinLine />

              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div>
              <input id="zipCode" />
              <input id="street" />
              <input id="number" />
              <input id="complement" />
              <input id="district" />
              <input id="town" />
              <input id="state" />
            </div>
          </div>
          <div>
            <div>
              <CurrencyDollar />

              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </StyledForm>
    </ContentWrapper>
  )
}
