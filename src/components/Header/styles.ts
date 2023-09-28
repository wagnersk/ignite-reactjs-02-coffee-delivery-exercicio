import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem 157px 10rem;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const GpsPingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.COLORS['purple-light']};
  color: ${(props) => props.theme.COLORS.purple};
  height: 38px;
  width: 143px;

  span {
    font-size: 14px;
    padding-left: 4px;
    color: ${(props) => props.theme.COLORS['purple-dark']};
  }
`

export const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`

export const CartButtonImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  height: 38px;
  width: 38px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.COLORS['yellow-light']};
`

export const TotalItenCartWrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 20px;
  height: 20px;
`

export const TotalItenCartWrapper2 = styled.div`
  position: relative;
  left: -6px;
  top: -6px;
  width: 20px;
  height: 20px;
`

export const TotalItenCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;

  color: ${(props) => props.theme.COLORS.white};
  background-color: ${(props) => props.theme.COLORS['yellow-dark']};
`
