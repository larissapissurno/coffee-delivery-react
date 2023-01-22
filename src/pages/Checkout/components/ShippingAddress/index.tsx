import { Input } from '@components/Input/styles'
import { PaymentType } from '@components/PaymentType'
import { CheckoutFormData } from '@pages/Checkout'
import { OrderHeader } from '@pages/Checkout/styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { TextRegularM, TextRegularS } from 'src/styles/typography'
import { LocaleInfo, Grid, PaymentInfo, PaymentTypeSection } from './styles'

export function CheckoutForm() {
  const { register } = useFormContext<CheckoutFormData>()

  return (
    <>
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
          <Input size={30} placeholder="CEP" {...register('zipCode')} />
          <Input size={100} placeholder="Rua" {...register('street')} />
          <Input size={30} placeholder="Número" {...register('number')} />
          <Input
            size={65}
            placeholder="Complemento"
            grow
            {...register('complement')}
          />
          <Input size={30} placeholder="Bairro" {...register('district')} />
          <Input size={55} placeholder="Cidade" {...register('city')} />
          <Input size={10} placeholder="UF" grow {...register('state')} />
        </Grid>
      </LocaleInfo>

      <PaymentInfo>
        <OrderHeader variant="accent-700">
          <CurrencyDollar size={22} />

          <div>
            <TextRegularM color="base-subtitle">Pagamento</TextRegularM>
            <TextRegularS>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </TextRegularS>
          </div>
        </OrderHeader>

        <PaymentTypeSection>
          <PaymentType
            icon={<CreditCard />}
            label="Cartão de Crédito"
            {...register('paymentMethod')}
          />
          <PaymentType
            icon={<Bank />}
            label="Cartão de Débito"
            {...register('paymentMethod')}
          />
          <PaymentType
            icon={<Money />}
            label="Dinheiro"
            {...register('paymentMethod')}
          />
        </PaymentTypeSection>
      </PaymentInfo>
    </>
  )
}
