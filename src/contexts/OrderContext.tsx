import { EPaymentMethod } from '@components/PaymentType'
import { CheckoutFormData } from '@pages/Checkout'
import { createContext, ReactNode, useContext, useState } from 'react'
import { ShoppingCartItem } from 'src/reducers/shoppingCart/reducer'

type ShippingAddress = Omit<CheckoutFormData, 'paymentMethod'>

interface OrderContextData {
  items: ShoppingCartItem[]
  shippingAddress?: ShippingAddress
  paymentMethod?: EPaymentMethod
  deliveryFee: number
  setItems: (items: ShoppingCartItem[]) => void
  setShippingAddress: (shippingAddress: ShippingAddress) => void
  setPaymentMethod: (paymentMethod: EPaymentMethod) => void
  setDeliveryFee: (deliveryFee: number) => void
}

export const OrderContext = createContext({} as OrderContextData)

export function useOrder(): OrderContextData {
  return useContext(OrderContext)
}

interface OrderContextProviderProps {
  children: ReactNode
}

const DELIVERY_FEE = 3.5

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [items, setItems] = useState<ShoppingCartItem[]>([])
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>()
  const [paymentMethod, setPaymentMethod] = useState<EPaymentMethod>()
  const [deliveryFee, setDeliveryFee] = useState(DELIVERY_FEE)

  return (
    <OrderContext.Provider
      value={{
        items,
        shippingAddress,
        paymentMethod,
        deliveryFee,
        setItems,
        setShippingAddress,
        setPaymentMethod,
        setDeliveryFee,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
