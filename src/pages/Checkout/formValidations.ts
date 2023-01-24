import { EPaymentMethod } from '@components/PaymentType'
import { z as schema } from 'zod'

export const CheckoutSchema = schema.object({
  zipCode: schema
    .string()
    .min(8, 'CEP deve conter 8 números')
    .max(8, 'CEP deve conter 8 números'),
  street: schema.string().min(1, 'Informe o nome da rua'),
  number: schema.string().min(1, 'Informe o número'),
  complement: schema.string().optional(),
  district: schema.string().min(1, 'Informe o bairro'),
  city: schema.string().min(1, 'Informe a cidade'),
  state: schema.string().min(1, 'Informe o estado'),
  paymentMethod: schema.nativeEnum(EPaymentMethod, {
    invalid_type_error: 'Informe o método de pagamento',
    required_error: 'Informe o método de pagamento',
  }),
})
