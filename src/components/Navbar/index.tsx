import { MapPin, ShoppingCart } from 'phosphor-react'
import React from 'react'
import logo from '../../assets/images/logo-coffee-delivery.png'
import { ContentContainer } from '../../styles/global'
import { ButtonAccent, ButtonPrimary, StyledNav } from './styles'

export function Navbar() {
  return (
    <ContentContainer>
      <StyledNav>
        <img src={logo} alt="" />

        <div>
          <ButtonAccent type="button">
            <MapPin size={22} weight="fill" /> Curitiba, PR
          </ButtonAccent>
          <ButtonPrimary>
            <ShoppingCart size={22} weight="fill" />
          </ButtonPrimary>
        </div>
      </StyledNav>
    </ContentContainer>
  )
}
