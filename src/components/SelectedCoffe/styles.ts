import styled from 'styled-components'

export const CheckoutInfoBox = styled.div`
  padding: 8px 4px 8px 4px;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ImageAndInfo = styled.div`
  display: flex;
  margin-bottom: 24px;
`
export const ImageAndInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PriceWrapper = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 130%;
  font-weight: bold;
`

export const BottonLine = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.COLORS['base-button']};
  width: 100%;
`

export const AddOrRemoveItemCart = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`
export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  height: 32px;
  width: 91px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.COLORS['base-button']};
  padding: 8px;
  img {
    margin-right: 4px;
  }
`
export const RemoveButtonText = styled.div`
  font-size: 12px;
  line-height: 160%;
`

export const ButtonCount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${(props) => props.theme.COLORS['base-button']};
  height: 32px;
  overflow: hidden;
`

export const ButtonCountLeft = styled(ButtonCount)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const ButtonCountRight = styled(ButtonCount)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const ItemCoffeeValue = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 130%;
  background-color: ${(props) => props.theme.COLORS['base-button']};
  height: 32px;
`

export const CheckoutInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding-left: 20px;
  width: 100%;
  justify-content: space-between;
`

export const CheckoutInfoDescriptionButtons = styled.div`
  display: flex;
`
