import { Input } from '@components/Input/styles'
import { CheckoutFormData } from '@pages/Checkout'
import { OrderHeader } from '@pages/Checkout/styles'
import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { TextRegularM, TextRegularS } from 'src/styles/typography'
import { LocaleInfo, Grid } from './styles'

export function ShippingAddressForm() {
  const { register } = useFormContext<CheckoutFormData>()

  return (
    <LocaleInfo>
      <OrderHeader variant="primary-700">
        <MapPinLine size={22} />

        <div>
          <TextRegularM color="base-subtitle">Endereço de Entrega</TextRegularM>
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
  )
}
