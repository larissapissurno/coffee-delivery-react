import { ContentContainer, StyledTitleL } from '../../styles/global'
import { CoffeeCard } from './components/CoffeeCard'
import { IntroSection } from './components/IntroSection'
import { CoffeeCardList } from './styles'
import data from '@assets/coffees/data.json'

export function Home() {
  console.log(data)
  return (
    <>
      <IntroSection />
      <ContentContainer>
        <StyledTitleL>Nossos cafés</StyledTitleL>
        <CoffeeCardList>
          {data.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeCardList>
      </ContentContainer>
    </>
  )
}
