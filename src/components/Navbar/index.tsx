import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useShoppingCart } from 'src/contexts/ShoppingCartContext'
import logo from '../../assets/images/logo-coffee-delivery.png'
import { ContentContainer } from '../../styles/global'
import { ButtonAccent, ButtonPrimary, FixedNav, StyledContent } from './styles'

export function Navbar() {
  const { items } = useShoppingCart()
  const navigate = useNavigate()

  const handleShoppingCartClick = () => {
    navigate('/checkout')
  }

  const totalItems = items.reduce((prev, curr) => {
    return (prev += curr.quantity)
  }, 0)

  return (
    <FixedNav>
      <ContentContainer>
        <StyledContent>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <div>
            <ButtonAccent type="button">
              <MapPin size={22} weight="fill" /> Curitiba, PR
            </ButtonAccent>
            <ButtonPrimary badge={totalItems} onClick={handleShoppingCartClick}>
              <ShoppingCart size={22} weight="fill" />
            </ButtonPrimary>
          </div>
        </StyledContent>
      </ContentContainer>
    </FixedNav>
  )
}
