import { useContext, useState } from 'react'
import { CoffeeContext, FakeApiProps } from '../../../contexts/CoffeeContext'

import { CoffeProps } from '../../../reducers/coffe/reducer'

import { ShoppingCart } from 'phosphor-react'

import iconMore from '../../../assets/IconMore.svg'
import iconLess from '../../../assets/IconLess.svg'

import {
  Container,
  TypeWrapper,
  TypeColor,
  DescriptionColor,
  FooterPriceCard,
  DescrptionWrapper,
  PriceWrapper,
  AddOrRemoveItemCart,
  CartWrapper,
  ButtonCount,
  Tag,
  Baloo2TitleS,
  ButtonG,
  Roboto2TitleS,
  Baloo2TitleM,
} from './styles'

export function CoffeeItem({
  photo,
  type,
  coffeeName,
  description,
  price,
}: FakeApiProps) {
  const {
    createCoffe,
    deleteCoffe,
    incrementCoffe,
    decrementCoffe,
    cartState,
  } = useContext(CoffeeContext)

  const indexOfElementAlreadyCreated = cartState.coffeCart.findIndex(
    (value) => value.coffeeName === coffeeName,
  )

  const findElement = cartState.coffeCart.find(
    (value) => value.coffeeName === coffeeName,
  )
  const getIdOfElement = findElement?.id

  const alreadtHaveQuantity = findElement?.quantity ? findElement.quantity : 0

  const [quantityState, setQuantityState] = useState(alreadtHaveQuantity)

  function handleAddCoffee() {
    if (indexOfElementAlreadyCreated === -1) {
      setQuantityState(1)

      const data: CoffeProps = {
        coffeeName,
        id: new Date().getTime(),
        quantity: 1,
        photo,
        price,
      }
      createCoffe(data)
    }

    if (indexOfElementAlreadyCreated >= 0) {
      setQuantityState((prev) => prev + 1)
      if (!getIdOfElement) {
        return
      }
      incrementCoffe(getIdOfElement)
    }
  }

  function handleRemoveCoffee() {
    if (quantityState === 0) {
      return
    }
    if (!getIdOfElement) {
      return
    }
    if (quantityState > 1) {
      console.log(`handleRemoveCoffee REMOVENDO`)
      setQuantityState((prev) => prev - 1)
      decrementCoffe(getIdOfElement)
    }

    if (quantityState === 1) {
      console.log(`handleRemoveCoffee DELETANDO`)

      setQuantityState(0)

      deleteCoffe(getIdOfElement)
    }
  }

  return (
    <Container style={{ position: 'relative' }}>
      <img
        style={{ position: 'absolute', top: -20, width: 120 }}
        src={photo}
        alt=""
      />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {type &&
          type.map((item) => (
            <TypeWrapper key={String(item)}>
              <TypeColor>
                <Tag>{item}</Tag>
              </TypeColor>
            </TypeWrapper>
          ))}
      </div>

      <Baloo2TitleS>{coffeeName}</Baloo2TitleS>

      <DescrptionWrapper>
        <ButtonG>
          <DescriptionColor>{description}</DescriptionColor>
        </ButtonG>
      </DescrptionWrapper>

      <FooterPriceCard>
        <PriceWrapper>
          <Roboto2TitleS style={{ paddingRight: 4 }}>R$ </Roboto2TitleS>
          <Baloo2TitleM> {price}</Baloo2TitleM>
        </PriceWrapper>

        <AddOrRemoveItemCart>
          <ButtonCount onClick={handleRemoveCoffee}>
            <img style={{ padding: 12 }} src={iconLess} alt="" />
          </ButtonCount>
          {quantityState}
          <ButtonCount onClick={handleAddCoffee}>
            <img style={{ padding: 12 }} src={iconMore} alt="" />
          </ButtonCount>
        </AddOrRemoveItemCart>

        <CartWrapper>
          <ShoppingCart
            color="white"
            fill="white"
            weight="fill"
            width={22}
            height={22}
          />
        </CartWrapper>
      </FooterPriceCard>
    </Container>
  )
}
