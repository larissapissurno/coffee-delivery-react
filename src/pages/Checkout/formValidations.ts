import { EPaymentMethod } from '@components/PaymentType'
import { z as schema } from 'zod'

export const CheckoutSchema = schema.object({
  zipCode: schema.string().min(8).max(8),
  street: schema.string().min(1),
  number: schema.string().min(1),
  complement: schema.string().optional(),
  district: schema.string().min(1),
  city: schema.string().min(1),
  state: schema.string().min(1),
  paymentMethod: schema.nativeEnum(EPaymentMethod),
})
