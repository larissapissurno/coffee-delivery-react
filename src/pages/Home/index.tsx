import { ContentContainer, StyledTitleL } from '../../styles/global'
import { IntroSection } from './components/IntroSection'

export function Home() {
  return (
    <>
      <IntroSection />
      <ContentContainer>
        <StyledTitleL>Nossos cafés</StyledTitleL>
        {/* <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard /> */}
      </ContentContainer>
    </>
  )
}
