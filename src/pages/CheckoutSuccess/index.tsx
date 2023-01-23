import { ContentWrapper } from '@pages/Checkout/styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { TextRegularL, TitleL } from 'src/styles/typography'
import { OrderInfo, OrderInfoWrapper } from './styles'
import successFigure from '@assets/images/checkout-success-figure.svg'
import { useOrder } from 'src/contexts/OrderContext'
import { EPaymentMethodsMap } from '@components/PaymentType'

export function CheckoutSuccess() {
  const { shippingAddress, paymentMethod } = useOrder()
  const { street, number, state, city, district } = shippingAddress || {}

  return (
    <ContentWrapper>
      <TitleL color="primary-700">Uhu! Pedido confirmado</TitleL>
      <TextRegularL>
        Agora é só aguardar que logo o café chegará até você
      </TextRegularL>

      <OrderInfoWrapper>
        <div>
          <OrderInfo variant="accent-500">
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
              </p>
              <p>{`${district} - ${city}, ${state}`}</p>
            </div>
          </OrderInfo>

          <OrderInfo variant="primary-500">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </OrderInfo>

          <OrderInfo variant="primary-700">
            <div>
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{EPaymentMethodsMap.get(paymentMethod!)}</strong>
            </div>
          </OrderInfo>
        </div>

        <img src={successFigure} alt="" />
      </OrderInfoWrapper>
    </ContentWrapper>
  )
}
