import { Background } from './styles'

import background from '../../assets/Background.png'
import { Banner } from '../../components/Banner'
import { CofffeList } from '../../components/Coffee/CofffeList'

export function Home() {
  return (
    <main>
      <Background src={background} />
      <Banner />
      <CofffeList />
    </main>
  )
}
