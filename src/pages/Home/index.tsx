import { useEffect, useState } from 'react'
import { useShoppingCart } from 'src/contexts/ShoppingCartContext'
import { ShoppingCartItem } from 'src/reducers/shoppingCart/reducer'
import { ContentContainer, StyledTitleL } from '../../styles/global'
import { CoffeeCard } from './components/CoffeeCard'
import { IntroSection } from './components/IntroSection'
import { CoffeeCardList } from './styles'

export function Home() {
  const { getAllCoffees } = useShoppingCart()
  const [coffees, setCoffees] = useState<ShoppingCartItem[]>([])

  useEffect(() => {
    setCoffees(getAllCoffees())
  }, [getAllCoffees])

  return (
    <>
      <IntroSection />
      <ContentContainer>
        <StyledTitleL>Nossos cafés</StyledTitleL>
        <CoffeeCardList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={{ ...coffee, quantity: 1 }} />
          ))}
        </CoffeeCardList>
      </ContentContainer>
    </>
  )
}
