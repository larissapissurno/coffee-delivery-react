import { MapPin, ShoppingCart } from 'phosphor-react'
import { useShoppingCart } from 'src/contexts/ShoppingCartContext'
import logo from '../../assets/images/logo-coffee-delivery.png'
import { ContentContainer } from '../../styles/global'
import { ButtonAccent, ButtonPrimary, FixedNav, StyledContent } from './styles'

export function Navbar() {
  const { items } = useShoppingCart()

  const totalItems = items.reduce((prev, curr) => {
    return (prev += curr.quantity)
  }, 0)

  return (
    <FixedNav>
      <ContentContainer>
        <StyledContent>
          <img src={logo} alt="" />

          <div>
            <ButtonAccent type="button">
              <MapPin size={22} weight="fill" /> Curitiba, PR
            </ButtonAccent>
            <ButtonPrimary badge={totalItems}>
              <ShoppingCart size={22} weight="fill" />
            </ButtonPrimary>
          </div>
        </StyledContent>
      </ContentContainer>
    </FixedNav>
  )
}
