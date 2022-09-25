import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import React from 'react'
import { StyledTextSubtitle, StyledText } from '../../../../styles/global'
import {
  ImageWrapper,
  Bullet,
  BulletList,
  Content,
  Background,
  ContentWrapper,
} from './styles'
import introCoffeeImg from '../../../../assets/images/intro-coffee.png'

export function IntroSection() {
  return (
    <Background>
      <Content>
        <ContentWrapper>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <StyledTextSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </StyledTextSubtitle>
          <BulletList>
            <Bullet variant="primary-700">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <StyledText>Compra simples e segura</StyledText>
            </Bullet>

            <Bullet variant="base-text">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <StyledText>Embalagem mantém o café intacto</StyledText>
            </Bullet>

            <Bullet variant="primary-500">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <StyledText>Entrega rápida e rastreada</StyledText>
            </Bullet>

            <Bullet variant="accent-500">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <StyledText>O café chega fresquinho até você</StyledText>
            </Bullet>
          </BulletList>
        </ContentWrapper>

        <ImageWrapper>
          <img src={introCoffeeImg} alt="" />
        </ImageWrapper>
      </Content>
    </Background>
  )
}
