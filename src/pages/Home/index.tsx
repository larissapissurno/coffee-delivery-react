import { ContentContainer, StyledTitleL } from '../../styles/global'
import { CoffeeCard } from './components/CoffeeCard'
import { IntroSection } from './components/IntroSection'
import { CoffeeCardList } from './styles'

export function Home() {
  return (
    <>
      <IntroSection />
      <ContentContainer>
        <StyledTitleL>Nossos cafés</StyledTitleL>
        <CoffeeCardList>
          <CoffeeCard />
        </CoffeeCardList>
      </ContentContainer>
    </>
  )
}
