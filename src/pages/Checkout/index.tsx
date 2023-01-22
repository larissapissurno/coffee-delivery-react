import { TitleXS } from 'src/styles/typography'
import { ContentWrapper, StyledForm } from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'
import { z } from 'zod'
import { CheckoutSchema } from './formValidations'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutForm } from './components/ShippingAddress'

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
            <CheckoutForm />
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
