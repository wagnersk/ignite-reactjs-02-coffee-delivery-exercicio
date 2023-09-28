import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS['base-card']};
  outline: none;
  box-shadow: 0 8px 8px 2px ${(props) => props.theme.COLORS['base-hover']};

  padding: 20px;

  img {
    padding-bottom: 12px;
    top: -20px;
  }
`
export const TypeWrapper = styled.div`
  border-radius: 100px;
  padding: 4px 8px 4px 8px;
  margin-bottom: 16px;
  margin-right: 4px;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.COLORS['yellow-light']};
`

export const DescrptionWrapper = styled.div`
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;
`

export const TypeColor = styled.div`
  color: ${(props) => props.theme.COLORS['yellow-dark']};
`
export const DescriptionColor = styled.div`
  color: ${(props) => props.theme.COLORS['base-label']};
`

export const FooterPriceCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 23px;
`

export const AddOrRemoveItemCart = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  background-color: ${(props) => props.theme.COLORS['base-button']};
  border-radius: 8px;
  overflow: hidden;
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS['purple-dark']};
  border-radius: 8px;
  width: 38px;
  height: 38px;
`

export const ButtonCount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS['base-button']};
  border: 0;
`

export const Baloo2TitleS = styled.span`
  font-family: 'Baloo 2';

  font-size: 20px;
  font-weight: bold;
  line-height: 130%;
`
export const Tag = styled.span`
  font-size: 10px;
  font-weight: bold;
  line-height: 130%;
`

export const ButtonG = styled.span`
  font-size: 14px;
  font-weight: regular;
  line-height: 130%;
`

export const Roboto2TitleS = styled.span`
  font-size: 14px;
  font-weight: normal;
  line-height: 130%;
`
export const Baloo2TitleM = styled.span`
  font-family: 'Baloo 2';

  font-size: 24px;
  font-weight: bolder;
  line-height: 130%;
`
