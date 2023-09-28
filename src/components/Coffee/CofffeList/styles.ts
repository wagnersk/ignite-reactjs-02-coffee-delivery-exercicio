import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0 10rem 157px 10rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`

export const CoffeeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding-right: 32px;
`
export const Baloo2TitleL = styled.span`
  font-family: ${(props) => props.theme.FONTS.BALOO};

  font-size: 32px;
  font-weight: bolder;
  line-height: 130%;
`
