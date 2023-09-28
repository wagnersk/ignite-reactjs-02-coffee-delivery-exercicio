import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

import {
  HeaderContainer,
  LeftContainer,
  RightContainer,
  GpsPingWrapper,
  CartButtonWrapper,
  CartButtonImageWrapper,
  TotalItenCartWrapper,
  TotalItenCartWrapper2,
  TotalItenCart,
} from './styles'
import cartImg from '../../assets/cart.svg'

import gpspin2 from '../../assets/gpspin2.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useContext } from 'react'

export function Header() {
  const { cartState } = useContext(CoffeeContext)

  const totalItensInCart = cartState.coffeCart.reduce((sum, item) => {
    if (item.quantity === undefined) {
      return 1
    }
    return sum + item.quantity
  }, 0)

  return (
    <HeaderContainer>
      <LeftContainer>
        <img src={Logo} alt="" />
      </LeftContainer>

      <RightContainer>
        <GpsPingWrapper>
          <img src={gpspin2} alt="" />
          <span>Porto Alegre, RS</span>
        </GpsPingWrapper>
        <CartButtonWrapper>
          <CartButtonImageWrapper>
            <NavLink
              to={totalItensInCart ? '/nextscreen' : '/'}
              title="Próxima tela"
            >
              <img src={cartImg} alt="" />
            </NavLink>
          </CartButtonImageWrapper>
          <TotalItenCartWrapper>
            {totalItensInCart > 0 && (
              <TotalItenCartWrapper2>
                <TotalItenCart>{totalItensInCart}</TotalItenCart>
              </TotalItenCartWrapper2>
            )}
          </TotalItenCartWrapper>
        </CartButtonWrapper>
      </RightContainer>
    </HeaderContainer>
  )
}
