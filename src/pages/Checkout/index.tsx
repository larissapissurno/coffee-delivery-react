import { TitleXS } from 'src/styles/typography'
import {
  ContentWrapper,
  SelectedCoffeesWrapper,
  StyledForm,
  SubmitButton,
} from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'
import { z } from 'zod'
import { CheckoutSchema } from './formValidations'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutForm } from './components/CheckoutForm'
import { useNavigate } from 'react-router-dom'

export type CheckoutFormData = z.infer<typeof CheckoutSchema>

export function Checkout() {
  const navigate = useNavigate()
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
  })

  console.log('form errors: ', form.formState.errors)

  function formSubmitHandler(data: CheckoutFormData) {
    console.log(data)
    navigate('/checkout-success')
  }

  return (
    <ContentWrapper>
      <StyledForm onSubmit={form.handleSubmit(formSubmitHandler)}>
        <div>
          <TitleXS>Complete seu pedido</TitleXS>

          <FormProvider {...form}>
            <CheckoutForm />
          </FormProvider>
        </div>

        <div>
          <TitleXS>Cafés selecionados</TitleXS>

          <SelectedCoffeesWrapper>
            <SelectedCoffees />

            <SubmitButton type="submit">confirmar pedido</SubmitButton>
          </SelectedCoffeesWrapper>
        </div>
      </StyledForm>
    </ContentWrapper>
  )
}
