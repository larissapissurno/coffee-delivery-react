import { ReactNode } from 'react'
import { PaymentTypeWrapper } from './styles'

interface PaymentTypeProps {
  icon: ReactNode
  label: string
}
export function PaymentType({ icon, label, ...otherProps }: PaymentTypeProps) {
  return (
    <>
      <PaymentTypeWrapper>
        {icon} <span>{label}</span>
      </PaymentTypeWrapper>

      <input type="radio" hidden {...otherProps} />
    </>
  )
}
