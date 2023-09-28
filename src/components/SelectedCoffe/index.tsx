import { useContext, useState } from 'react'

import {
  CheckoutInfoBox,
  ImageAndInfoWrapper,
  ImageAndInfo,
  PriceWrapper,
  BottonLine,
  AddOrRemoveItemCart,
  RemoveButton,
  RemoveButtonText,
  ButtonCountLeft,
  ButtonCountRight,
  ItemCoffeeValue,
  CheckoutInfoDescription,
  CheckoutInfoDescriptionButtons,
} from './styles'

import trash from '../../assets/TRASH.svg'

import iconMore from '../../assets/IconMore.svg'
import iconLess from '../../assets/IconLess.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'

interface Props {
  imageUrl?: string
  coffeeName?: string
  price?: string
  quantity?: number
  id?: number
}

export function SelectedCoffee({
  imageUrl,
  coffeeName,
  price,
  quantity,
  id,
}: Props) {
  const { deleteCoffe, incrementCoffe, decrementCoffe, cartState } =
    useContext(CoffeeContext)
  const [itemCoffee, setItemCoffee] = useState(quantity || 0)

  const totalPrice = handleTotalPrice(price, quantity)

  function handleAddCoffee() {
    setItemCoffee((prev) => prev + 1)

    if (!id) {
      return
    }
    incrementCoffe(id)
  }

  function handleRemoveCoffee() {
    if (itemCoffee === 0) {
      return
    }
    if (!id) {
      return
    }
    if (itemCoffee > 1) {
      console.log(`handleRemoveCoffee REMOVENDO`)
      setItemCoffee((prev) => prev - 1)
      decrementCoffe(id)
    }

    if (itemCoffee === 1) {
      console.log(`handleRemoveCoffee DELETANDO`)

      setItemCoffee(0)

      deleteCoffe(id)
    }
  }

  function handleDeleteCoffee() {
    if (!id) {
      return
    }

    console.log(`handleRemoveCoffee DELETANDO`)

    setItemCoffee(0)

    deleteCoffe(id)
  }

  function handleTotalPrice(price?: string, quantity?: number) {
    if (price === undefined || quantity === undefined) {
      return
    }

    const numberValue = parseFloat(price.replace(',', '.'))

    const totalPrice = numberValue * quantity

    return totalPrice.toFixed(2).replace('.', ',')
  }

  return (
    <CheckoutInfoBox>
      <ImageAndInfoWrapper>
        <ImageAndInfo>
          <img src={imageUrl} width={64} height={64} alt="" />
          <CheckoutInfoDescription>
            <span>{coffeeName}</span>
            <CheckoutInfoDescriptionButtons>
              <AddOrRemoveItemCart>
                <ButtonCountLeft onClick={handleRemoveCoffee}>
                  <img style={{ padding: 12 }} src={iconLess} alt="" />
                </ButtonCountLeft>
                <ItemCoffeeValue>{itemCoffee}</ItemCoffeeValue>
                <ButtonCountRight onClick={handleAddCoffee}>
                  <img style={{ padding: 12 }} src={iconMore} alt="" />
                </ButtonCountRight>
              </AddOrRemoveItemCart>

              <RemoveButton onClick={handleDeleteCoffee}>
                <img src={trash} alt="" />
                <RemoveButtonText>REMOVER</RemoveButtonText>
              </RemoveButton>
            </CheckoutInfoDescriptionButtons>
          </CheckoutInfoDescription>
        </ImageAndInfo>
        <PriceWrapper>{totalPrice}</PriceWrapper>
      </ImageAndInfoWrapper>
      <BottonLine />
    </CheckoutInfoBox>
  )
}
