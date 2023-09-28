import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 2rem;
    padding-bottom: 16px;
    font-family: ${(props) => props.theme.FONTS.BALOO};
    font-weight: bold;
    color: ${(props) => props.theme.COLORS['yellow-dark']};
  }

  span + span {
    font-size: 20px;
    padding-bottom: 40px;
    font-family: ${(props) => props.theme.FONTS.ROBOTO};
    font-weight: normal;
    color: ${(props) => props.theme.COLORS['base-title']};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 40px;

  border-radius: 6px 36px 6px 36px;
  gap: 32px;
  width: 526px;
  height: 270px;

  background: linear-gradient(
        ${(props) => props.theme.COLORS.background},
        ${(props) => props.theme.COLORS.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.COLORS.yellow},
        ${(props) => props.theme.COLORS.purple}
      )
      border-box;

  border-radius: 2px;

  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;

  //  border: 2px solid rgba(255, 122, 255, 256);

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 12px;
    }
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 102px;
`
