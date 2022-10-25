import { useEffect, useState } from 'react'
import { useShoppingCart } from 'src/contexts/ShoppingCartContext'
import { ShoppingCartItem } from 'src/reducers/shoppingCart/reducer'
import { ContentContainer, TitleL } from '../../styles/global'
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
        <TitleL color="base-subtitle">Nossos cafés</TitleL>
        <CoffeeCardList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={{ ...coffee, quantity: 1 }} />
          ))}
        </CoffeeCardList>
      </ContentContainer>
    </>
  )
}
