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
import { z } from 'zod'
import { CheckoutSchema } from './formValidations'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShippingAddressForm } from './components/ShippingAddress'

export type CheckoutFormData = z.infer<typeof CheckoutSchema>

export function Checkout() {
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
  })

  return (
    <ContentWrapper>
      <StyledForm onSubmit={form.handleSubmit((data) => console.log(data))}>
        <div>
          <TitleXS>Complete seu pedido</TitleXS>

          <FormProvider {...form}>
            <ShippingAddressForm />

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
          </FormProvider>
        </div>

        <div>
          <TitleXS>Cafés selecionados</TitleXS>

          <SelectedCoffees />
        </div>
      </StyledForm>
    </ContentWrapper>
  )
}
