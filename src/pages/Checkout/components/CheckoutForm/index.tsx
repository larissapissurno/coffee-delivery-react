import { ErrorMessage, Input, InputWrapper } from '@components/Input/styles'
import { EPaymentMethod, PaymentMethod } from '@components/PaymentType'
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
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>()

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
          <InputWrapper size={30}>
            <Input
              placeholder="CEP"
              {...register('zipCode')}
              error={!!errors.zipCode?.message}
            />
            {!!errors.zipCode?.message && (
              <ErrorMessage>{errors.zipCode?.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper size={100}>
            <Input
              placeholder="Rua"
              {...register('street')}
              error={!!errors.street?.message}
            />
            {!!errors.street?.message && (
              <ErrorMessage>{errors.street?.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper size={30}>
            <Input
              placeholder="Número"
              {...register('number')}
              error={!!errors.number?.message}
            />
            {!!errors.number?.message && (
              <ErrorMessage>{errors.number?.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper size={65} grow>
            <Input
              size={65}
              placeholder="Complemento"
              {...register('complement')}
              error={!!errors.complement?.message}
            />
            {!!errors.complement?.message && (
              <ErrorMessage>{errors.complement?.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper size={30}>
            <Input
              size={30}
              placeholder="Bairro"
              {...register('district')}
              error={!!errors.district?.message}
            />
            {!!errors.district?.message && (
              <ErrorMessage>{errors.district?.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper size={55}>
            <Input
              size={55}
              placeholder="Cidade"
              {...register('city')}
              error={!!errors.city?.message}
            />
            {!!errors.city?.message && (
              <ErrorMessage>{errors.city?.message}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper size={10} grow>
            <Input
              size={10}
              placeholder="UF"
              {...register('state')}
              error={!!errors.state?.message}
            />
            {!!errors.state?.message && (
              <ErrorMessage>{errors.state?.message}</ErrorMessage>
            )}
          </InputWrapper>
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
          <PaymentMethod
            icon={<CreditCard />}
            label="Cartão de Crédito"
            value={EPaymentMethod.CreditCard}
          />
          <PaymentMethod
            icon={<Bank />}
            label="Cartão de Débito"
            value={EPaymentMethod.DebitCard}
          />
          <PaymentMethod
            icon={<Money />}
            label="Dinheiro"
            value={EPaymentMethod.Money}
          />
        </PaymentTypeSection>
        {!!errors.paymentMethod?.message && (
          <ErrorMessage>{errors.paymentMethod?.message}</ErrorMessage>
        )}
      </PaymentInfo>
    </>
  )
}
