import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Container,
  LeftAndRightWrapper,
  LeftSide,
  RightSide,
  TittleWrapper,
  InfoWrapper,
  PaymentAddress,
  InputsWrapper,
  FirstLine,
  SecoundLine,
  ThirdWrapper,
  ThirdLine1,
  ThirdLine2,
  FourthWrapper,
  FourthLine1,
  FourthLine2,
  FourthLine3,
  PaymentFormWrapper,
  PaymentFormInfoWrapper,
  TittleAndSubtitleWrapper,
  PaymentTittleWrapper,
  PaymentSubtitleWrapper,
  OptionsWrapper,
  ButtonWrapper,
  ContentWrapper,
  Baloo2TitleXS,
  Roboto2TitleL,
  Roboto2TitleM,
  CheckOutInfo,
  TotalItensWrapper,
  TotalItensText,
  TotalItensPrice,
  DeliveryWrapper,
  DeliveryText,
  DeliveryPrice,
  TotalWrapper,
  TotalText,
  TotalPrice,
  ConfirmButton,
} from './styles'

import dollar from '../../assets/dollar.svg'
import money from '../../assets/money.svg'
import credit from '../../assets/credit.svg'
import bank from '../../assets/bank.svg'
import gpspin from '../../assets/gpsPin.svg'

import { SelectedCoffee } from '../../components/SelectedCoffe'
import { CoffeeContext } from '../../contexts/CoffeeContext'

const newCoffeCheckoutValidationSchema = zod.object({
  rua: zod.string().min(1, 'Informe sua rua'),
  cep: zod.number().min(1, 'Informe o CEP.').max(99999999, 'CEP inválido.'),
  numero: zod.number().min(1, 'Informe o número da casa.'),
  complemento: zod.string().min(1, 'Informe o complemento.').optional(),
  bairro: zod.string().min(1, 'Informe o bairro.'),
  cidade: zod.string().min(1, 'Informe a cidade.'),
  uf: zod.string().min(1, 'Informe o UF.'),
})

type NewOrderProps = zod.infer<typeof newCoffeCheckoutValidationSchema>

interface DataProps extends NewOrderProps {
  type?: string
}

export function NextScreen() {
  const nextScreenForm = useForm<DataProps>({
    resolver: zodResolver(newCoffeCheckoutValidationSchema),
  })

  const { register, handleSubmit, watch, formState, reset } = nextScreenForm
  const { cartState, addAdressAndPaymentInfo } = useContext(CoffeeContext)
  const [next, setNext] = useState(false)

  const [activeId, setActiveId] = useState(-1)
  const [type, setType] = useState('')

  const totalItensInCart = cartState.coffeCart.reduce((sum, item) => {
    if (item.quantity === undefined) {
      return 1
    }
    return sum + item.quantity * parseFloat(item.price.replace(',', '.'))
  }, 0)

  const deliveryValue = 3.5

  const totalItensInCartWithDelivery = deliveryValue + totalItensInCart

  const formattedDeliveryValue = formatName(deliveryValue)
  const formattedTotalItensInCart = formatName(totalItensInCart)
  const formattedTotalItensInCartWithDelivery = formatName(
    totalItensInCartWithDelivery,
  )

  function getActiveId(id: number) {
    const returnActive = activeId === id
    const stringActive = returnActive.toString()
    return stringActive
  }

  function handleCreateNewOrder(data: any) {
    const allInformation = { ...data, type }
    console.log(allInformation)
    // setNewOrder((prev) => ({ ...prev, newOrder: data }))

    if (type) {
      console.log(`exectutou`)
      addAdressAndPaymentInfo(data, type)
      // chmar hook allInformation
      setNext(true)
    }
  }

  function handleSelectPaymentMethod(
    /*     event: MouseEvent<HTMLButtonElement>, */
    paymentMethod: string,
    activeID: number,
  ) {
    setType(paymentMethod)
    setActiveId(activeID)
  }

  function formatName(data: number) {
    return data.toFixed(2).replace('.', ',')
  }

  function getPaymentMethodIcon(paymentMethod: string) {
    switch (paymentMethod) {
      case 'CARTÃO DE CRÉDITO':
        return credit
      case 'CARTÃO DE DÉBITO':
        return bank
      case 'DINHEIRO':
        return money
      default:
        return ''
    }
  }
  return (
    <Container>
      {next && <Navigate to="/finishscreen" replace={true} />}

      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <LeftAndRightWrapper>
          <LeftSide>
            <div>
              <TittleWrapper>
                <Baloo2TitleXS>Complete seu Pedido</Baloo2TitleXS>
              </TittleWrapper>
              <InfoWrapper>
                <PaymentAddress>
                  <img src={gpspin} width={22} height={22} alt="" />

                  <TittleAndSubtitleWrapper>
                    <PaymentTittleWrapper>
                      <Roboto2TitleL>Endereço de Entrega</Roboto2TitleL>
                    </PaymentTittleWrapper>

                    <PaymentSubtitleWrapper>
                      <Roboto2TitleM>
                        Informe o endereço onde deseja receber seu pedido
                      </Roboto2TitleM>
                    </PaymentSubtitleWrapper>
                  </TittleAndSubtitleWrapper>
                </PaymentAddress>
                <InputsWrapper>
                  <SecoundLine
                    id="rua"
                    placeholder="Rua"
                    {...register('rua')}
                  />
                  <FirstLine
                    id="cep"
                    type="number"
                    placeholder="CEP"
                    {...register('cep', { valueAsNumber: true })}
                  />

                  <ThirdWrapper>
                    <ThirdLine1
                      id="numero"
                      placeholder="Número"
                      type="number"
                      {...register('numero', { valueAsNumber: true })}
                    />
                    <ThirdLine2
                      id="complemento"
                      placeholder="Complemento"
                      {...register('complemento')}
                    />
                  </ThirdWrapper>

                  <FourthWrapper>
                    <FourthLine1
                      id="bairro"
                      placeholder="Bairro"
                      {...register('bairro')}
                    />
                    <FourthLine2
                      id="cidade"
                      placeholder="Cidade"
                      {...register('cidade')}
                    />
                    <FourthLine3 id="uf" placeholder="UF" {...register('uf')} />
                  </FourthWrapper>
                </InputsWrapper>
              </InfoWrapper>
            </div>
            <PaymentFormWrapper>
              <PaymentFormInfoWrapper>
                <img src={dollar} width={22} height={22} alt="" />
                <TittleAndSubtitleWrapper>
                  <PaymentTittleWrapper>
                    <Roboto2TitleL>Pagamento</Roboto2TitleL>
                  </PaymentTittleWrapper>

                  <PaymentSubtitleWrapper>
                    <Roboto2TitleM>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </Roboto2TitleM>
                  </PaymentSubtitleWrapper>
                </TittleAndSubtitleWrapper>
              </PaymentFormInfoWrapper>
              <OptionsWrapper>
                {['CARTÃO DE CRÉDITO', 'CARTÃO DE DÉBITO', 'DINHEIRO'].map(
                  (paymentMethod, index) => (
                    <ButtonWrapper
                      key={index}
                      onClick={() =>
                        handleSelectPaymentMethod(paymentMethod, index)
                      }
                      activeborder={getActiveId(index)}
                    >
                      <img src={getPaymentMethodIcon(paymentMethod)} alt="" />
                      <span>{paymentMethod}</span>
                    </ButtonWrapper>
                  ),
                )}
              </OptionsWrapper>
            </PaymentFormWrapper>
          </LeftSide>

          <RightSide>
            <TittleWrapper>
              <Baloo2TitleXS>Cafés Selecionados</Baloo2TitleXS>
            </TittleWrapper>
            <ContentWrapper>
              {cartState &&
                cartState.coffeCart &&
                cartState.coffeCart.map((value) => {
                  return (
                    <SelectedCoffee
                      key={value.id}
                      id={value.id}
                      imageUrl={value.photo}
                      coffeeName={value.coffeeName}
                      price={value.price}
                      quantity={value.quantity}
                    />
                  )
                })}
              <CheckOutInfo>
                <TotalItensWrapper>
                  <TotalItensText>Total de Itens</TotalItensText>
                  <TotalItensPrice>
                    R$ {formattedTotalItensInCart}
                  </TotalItensPrice>
                </TotalItensWrapper>

                <DeliveryWrapper>
                  <DeliveryText>Entrega</DeliveryText>
                  <DeliveryPrice>R$ {formattedDeliveryValue}</DeliveryPrice>
                </DeliveryWrapper>

                <TotalWrapper>
                  <TotalText>Total</TotalText>
                  <TotalPrice>
                    R$ {formattedTotalItensInCartWithDelivery}
                  </TotalPrice>
                </TotalWrapper>
              </CheckOutInfo>

              <ConfirmButton disabled={!type} type="submit">
                CONFIRMAR PEDIDO
              </ConfirmButton>
            </ContentWrapper>
          </RightSide>
        </LeftAndRightWrapper>
      </form>
    </Container>
  )
}
