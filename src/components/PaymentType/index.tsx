import { CheckoutFormData } from '@pages/Checkout'
import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { PaymentTypeWrapper } from './styles'

export enum EPaymentMethod {
  CreditCard = 'creditCard',
  DebitCard = 'debitCard',
  Money = 'money',
}

interface PaymentMethodProps {
  icon: ReactNode
  label: string
  value: EPaymentMethod
}
export function PaymentMethod({ icon, label, value }: PaymentMethodProps) {
  const { register, setValue, watch } = useFormContext<CheckoutFormData>()

  const isChecked = watch('paymentMethod') === value
  function handleOnClick() {
    setValue('paymentMethod', value)
  }

  return (
    <>
      <PaymentTypeWrapper checked={isChecked} onClick={handleOnClick}>
        {icon} <span>{label}</span>
      </PaymentTypeWrapper>
      <input {...register('paymentMethod')} type="radio" value={value} hidden />
    </>
  )
}
