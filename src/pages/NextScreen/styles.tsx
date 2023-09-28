import styled from 'styled-components'

interface ButtonProps {
  activeborder: string | undefined
}

export const Container = styled.main`
  padding: 40px 10rem 157px 10rem;
  display: flex;
  gap: 32px;
`
export const InputForm = styled.div``
export const LeftAndRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export const LeftSide = styled.div``

export const RightSide = styled.div``

export const TittleWrapper = styled.div`
  margin-bottom: 16px;
`

export const InfoWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.COLORS['base-card']};
  padding: 40px;
  width: 640px;
  height: 372px;
  flex-direction: column;
  border-radius: 6px;
`

export const PaymentAddress = styled.div`
  display: flex;
`
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const BaseInput = styled.input`
  border: 0;
  background-color: ${(props) => props.theme.COLORS['base-input']};
  border-radius: 4px;
  padding: 12px;
  height: 42px;
  border: 1px solid ${(props) => props.theme.COLORS['base-button']};
`

export const FirstLine = styled(BaseInput)`
  width: 200px;
`

export const SecoundLine = styled(BaseInput)`
  width: 100%;
`

export const ThirdLine1 = styled(BaseInput)`
  width: 200px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const ThirdLine2 = styled(BaseInput)`
  width: 100%;
`

export const FourthLine1 = styled(BaseInput)`
  width: 200px;
`
export const FourthLine2 = styled(BaseInput)`
  width: 100%;
`
export const FourthLine3 = styled(BaseInput)`
  width: 60px;
`

export const ThirdWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`
export const FourthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

export const PaymentFormWrapper = styled.div`
  background-color: ${(props) => props.theme.COLORS['base-card']};

  margin-top: 12px;
  padding: 40px;
  width: 640px;
  border-radius: 6px;
`

export const PaymentFormInfoWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-content: center;
  border-radius: 6px;
`

export const TittleAndSubtitleWrapper = styled.div`
  padding-left: 8px;
`

export const PaymentTittleWrapper = styled.div`
  padding-bottom: 2px;
`

export const PaymentSubtitleWrapper = styled.div`
  padding-bottom: 32px;
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.activeborder === 'true'
      ? props.theme.COLORS['purple-light']
      : props.theme.COLORS['base-button']};

  justify-content: flex-start;
  width: 178px;
  height: 51px;
  font-size: 12px;
  border-radius: 6px;

  img {
    padding: 17.5px 12px 17.5px 16px;
  }

  border: ${(props) =>
    props.activeborder === 'true'
      ? `1px solid ${props.theme.COLORS['purple-dark']}`
      : `1px solid transparent`};

  padding-left: ${(props) => (props.activeborder === 'true' ? `-1px` : `0 `)};
`

export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.COLORS['base-card']};
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  gap: 24px;
  display: flex;
  border-radius: 6px 44px 6px 44px;
`
export const Baloo2TitleXS = styled.span`
  font-family: ${(props) => props.theme.FONTS.BALOO};

  font-size: 18px;
  font-weight: bold;
  line-height: 130%;
`
export const Roboto2TitleL = styled.span`
  font-size: 18px;
  font-weight: normal;
  line-height: 130%;
`

export const Roboto2TitleM = styled.span`
  font-size: 16px;
  font-weight: normal;
  line-height: 130%;
`
export const CheckOutInfo = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`

export const TotalItensWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  font-size: 14px;
  line-height: 130%;
`

export const TotalItensText = styled.span``

export const TotalItensPrice = styled.span``

export const DeliveryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 130%;
  width: 100%;
  flex-direction: row;
`

export const DeliveryText = styled.span``

export const DeliveryPrice = styled.span``

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  font-size: 20px;
  line-height: 130%;
  font-weight: bold;
`

export const TotalText = styled.span``

export const TotalPrice = styled.span``

export const ConfirmButton = styled.button`
  height: 46px;
  width: 368px;
  border: 0;
  background-color: ${(props) => props.theme.COLORS.yellow};
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.COLORS.white};
`
