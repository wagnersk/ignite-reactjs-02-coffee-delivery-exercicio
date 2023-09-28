import { useContext } from 'react'
import { Container, CoffeeWrapper, Baloo2TitleL } from './styles'

import { CoffeeItem } from '../CoffeeItem'

import { CoffeeContext } from '../../../contexts/CoffeeContext'

export function CofffeList() {
  const { coffeeList } = useContext(CoffeeContext)
  // gerar uuid aqui
  return (
    <Container>
      <Baloo2TitleL style={{ paddingBottom: '2rem' }}>
        Nossos Cafés
      </Baloo2TitleL>

      <CoffeeWrapper>
        {coffeeList &&
          coffeeList.map((value) => (
            <CoffeeItem
              key={value.coffeeName}
              photo={value.photo}
              type={value.type}
              coffeeName={value.coffeeName}
              description={value.description}
              price={value.price}
            />
          ))}
      </CoffeeWrapper>
    </Container>
  )
}
