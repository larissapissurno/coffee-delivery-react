import { MapPin, ShoppingCart } from 'phosphor-react'
import { useShoppingCart } from 'src/contexts/ShoppingCartContext'
import logo from '../../assets/images/logo-coffee-delivery.png'
import { ContentContainer } from '../../styles/global'
import { ButtonAccent, ButtonPrimary, StyledNav } from './styles'

export function Navbar() {
  const { items } = useShoppingCart()

  const totalItems = items.reduce((prev, curr) => {
    return (prev += curr.quantity)
  }, 0)

  return (
    <ContentContainer>
      <StyledNav>
        <img src={logo} alt="" />

        <div>
          <ButtonAccent type="button">
            <MapPin size={22} weight="fill" /> Curitiba, PR
          </ButtonAccent>
          <ButtonPrimary badge={totalItems}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonPrimary>
        </div>
      </StyledNav>
    </ContentContainer>
  )
}
