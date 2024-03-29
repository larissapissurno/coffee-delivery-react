import { ShoppingCartSimple } from 'phosphor-react'
import {
  CardContent,
  CardFooter,
  ContentWrapper,
  Price,
  ShoppingCartButton,
  ShoppingSection,
  TagList,
} from './styles'
import { SelectQuantity } from '@components/SelectQuantity'
import { useState, useContext } from 'react'
import { ShoppingCartItem } from 'src/reducers/shoppingCart/reducer'
import {
  ShoppingCartContext,
  useShoppingCart,
} from 'src/contexts/ShoppingCartContext'
import { TitleS } from 'src/styles/typography'
import { formattedCurrency } from 'src/_shared/utils/utils'
import c1 from 'src/assets/coffees/american.png'

interface CoffeeCardProps {
  coffee: ShoppingCartItem
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [totalValue, setTotalValue] = useState(formattedCurrency(coffee.price))
  const [quantity, setQuantity] = useState(coffee.quantity)
  const { updateCoffeeQuantity } = useShoppingCart()

  const handleQuantityUpdate = (updatedQuantity: number) => {
    setQuantity(updatedQuantity)
    const minQuantityOnDisplay = Math.max(updatedQuantity, 1)
    const calculatedPrice = coffee.price * minQuantityOnDisplay
    setTotalValue(formattedCurrency(calculatedPrice))
  }

  const handleUpdateShoppingCart = () => {
    updateCoffeeQuantity(coffee, quantity)
  }

  return (
    <ContentWrapper>
      <CardContent>
        <img src={c1} alt="" />

        <TagList>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </TagList>

        <TitleS>{coffee.name}</TitleS>
        <p>{coffee.description}</p>
      </CardContent>

      <CardFooter>
        <Price>
          <h3>{totalValue}</h3>
        </Price>

        <ShoppingSection>
          <SelectQuantity
            quantity={coffee.quantity}
            onValueChange={handleQuantityUpdate}
          />

          <ShoppingCartButton onClick={handleUpdateShoppingCart}>
            <ShoppingCartSimple weight="fill" />
          </ShoppingCartButton>
        </ShoppingSection>
      </CardFooter>
    </ContentWrapper>
  )
}
