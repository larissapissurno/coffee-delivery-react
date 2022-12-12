import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import {
  ImageWrapper,
  BulletList,
  Content,
  Background,
  ContentWrapper,
} from './styles'
import introCoffeeImg from '../../../../assets/images/intro-coffee.png'
import { TextRegularL, TextRegularM, TitleXL } from 'src/styles/typography'
import { Bullet } from 'src/styles/global'

export function IntroSection() {
  return (
    <Background>
      <Content>
        <ContentWrapper>
          <TitleXL color="base-title">
            Encontre o café perfeito para qualquer hora do dia
          </TitleXL>
          <TextRegularL color="base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextRegularL>
          <BulletList>
            <Bullet variant="primary-700">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <TextRegularM>Compra simples e segura</TextRegularM>
            </Bullet>

            <Bullet variant="base-text">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <TextRegularM>Embalagem mantém o café intacto</TextRegularM>
            </Bullet>

            <Bullet variant="primary-500">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <TextRegularM>Entrega rápida e rastreada</TextRegularM>
            </Bullet>

            <Bullet variant="accent-500">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <TextRegularM>O café chega fresquinho até você</TextRegularM>
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
