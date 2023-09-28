import {
  BannerContainer,
  BannerTittleWrapper,
  BannerInfoWrapper,
  BannerSubTittleWrapper,
  BannerCopyWritterWrapper,
  BannerCopyWritterLeftWrapper,
  BannerCopyWritterRightWrapper,
  BannerCopyWritterItemWrapper,
  Baloo2TitleXL,
  Roboto2TitleM,
  Roboto2TitleL,
} from './styles'

import imagem from '../../assets/Imagem.png'
import cafe from '../../assets/cafe.png'
import cartImg from '../../assets/cart.png'
import embalagem from '../../assets/embalagem.png'
import timer from '../../assets/timer.png'

export function Banner() {
  return (
    <BannerContainer>
      <BannerInfoWrapper>
        <BannerTittleWrapper>
          <Baloo2TitleXL>
            Encontre o café perfeito para qualquer hora do dia
          </Baloo2TitleXL>
        </BannerTittleWrapper>
        <BannerSubTittleWrapper>
          <Roboto2TitleL>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Roboto2TitleL>
        </BannerSubTittleWrapper>

        <BannerCopyWritterWrapper>
          <BannerCopyWritterLeftWrapper>
            <BannerCopyWritterItemWrapper>
              <img
                style={{ marginRight: 12 }}
                src={cartImg}
                alt="imagem de fundo"
              />
              <Roboto2TitleM>Compra simples e segura</Roboto2TitleM>
            </BannerCopyWritterItemWrapper>

            <BannerCopyWritterItemWrapper>
              <img
                style={{ marginRight: 12 }}
                src={timer}
                alt="imagem de fundo"
              />
              <Roboto2TitleM>Entrega rápida e rastreada</Roboto2TitleM>
            </BannerCopyWritterItemWrapper>
          </BannerCopyWritterLeftWrapper>

          <BannerCopyWritterRightWrapper>
            <BannerCopyWritterItemWrapper>
              <img
                style={{ marginRight: 12 }}
                src={embalagem}
                alt="imagem de fundo"
              />
              <Roboto2TitleM>Embalagem mantém o café intacto</Roboto2TitleM>
            </BannerCopyWritterItemWrapper>

            <BannerCopyWritterItemWrapper>
              <img
                style={{ marginRight: 12 }}
                src={cafe}
                alt="imagem de fundo"
              />
              O café chega fresquinho
              <Roboto2TitleM>até você</Roboto2TitleM>
            </BannerCopyWritterItemWrapper>
          </BannerCopyWritterRightWrapper>
        </BannerCopyWritterWrapper>
      </BannerInfoWrapper>

      <img src={imagem} height={360} width={476} alt="caffe logo" />
    </BannerContainer>
  )
}
