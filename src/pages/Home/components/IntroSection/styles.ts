import styled from 'styled-components'
import { ContentContainer } from '../../../../styles/global'

export const Background = styled.section`
  width: calc(100vw - (100vw - 100%));
  height: 34rem;
  background-image: url(../../../src/assets/images/intro-background.png);
  background-size: 100vw 34rem;
  background-repeat: no-repeat;
`
export const Content = styled(ContentContainer)`
  padding: 5.75rem 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 37rem;
`

export const ImageWrapper = styled.div`
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none !important;
  }
`

export const BulletList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  margin-top: 4.125rem;
`

interface BulletProps {
  variant: 'primary-500' | 'primary-700' | 'base-text' | 'accent-500'
}
export const Bullet = styled.div<BulletProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  & > div {
    flex: 0 0 auto;
    height: 2rem;
    width: 2rem;

    border-radius: 50%;
    background-color: ${(props) => props.theme[props.variant]};
    color: ${(props) => props.theme.background};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
