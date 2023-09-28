import finalLogo from '../../assets/finalLogo.svg'
import timer from '../../assets/timer.png'
import dollar from '../../assets/dollar.png'
import gpspin from '../../assets/gpspin.png'

import { Container, Content, ItemWrapper, Title, ImageWrapper } from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useContext } from 'react'

export function FinishScreen() {
  const { cartState } = useContext(CoffeeContext)
  function converterMetodoDePagamento(texto: string) {
    let textoConvertido = ''
    if (texto === 'CARTÃO DE DÉBITO') {
      // Use a função replace para substituir 'CARTÃO DE DÉBITO' por 'Cartão de Crédito'
      textoConvertido = texto.replace('CARTÃO DE DÉBITO', 'Cartão de Débito')
    }
    if (texto === 'CARTÃO DE CRÉDITO') {
      // Use a função replace para substituir 'CARTÃO DE DÉBITO' por 'Cartão de Crédito'
      textoConvertido = texto.replace('CARTÃO DE CRÉDITO', 'Cartão de Crédito')
    }
    if (texto === 'DINHEIRO') {
      // Use a função replace para substituir 'CARTÃO DE DÉBITO' por 'Cartão de Crédito'
      textoConvertido = texto.replace('DINHEIRO', 'Dinheiro')
    }

    return textoConvertido
  }

  return (
    <Container>
      <aside>
        <Title>
          <span>Uhu! Pedido confirmado</span>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Title>

        <Content>
          <div>
            <img src={gpspin} />
            <ItemWrapper>
              <span>
                <p>
                  Entrega em Rua{' '}
                  <strong>
                    {cartState.coffeCartAdress?.rua}{' '}
                    {cartState.coffeCartAdress?.numero},
                  </strong>
                </p>

                <p>
                  {' '}
                  {cartState.coffeCartAdress?.cidade},{' '}
                  {cartState.coffeCartAdress?.uf}
                </p>
              </span>
            </ItemWrapper>
          </div>

          <div>
            <img src={timer} />
            <ItemWrapper>
              <span>
                <p>Previsão de entrega</p>

                <p>
                  <strong>20 min - 30 min </strong>
                </p>
              </span>
            </ItemWrapper>
          </div>

          <div>
            <img src={dollar} />
            <ItemWrapper>
              <span>
                <p>Pagamento na entrega</p>

                <p>
                  <strong>
                    {cartState?.paymentType &&
                      converterMetodoDePagamento(cartState?.paymentType)}
                  </strong>
                </p>
              </span>
            </ItemWrapper>
          </div>
        </Content>
      </aside>
      <ImageWrapper>
        <img src={finalLogo} />
      </ImageWrapper>
    </Container>
  )
}
