import { ActionTypes } from './actions'

export interface CoffeProps {
  id: number
  photo: string
  coffeeName: string
  price: string
  quantity: number
}

export interface AdressProps {
  bairro: string
  cep: string
  cidade: string
  complemento: string
  numero: number | string
  rua: string
  uf: string
}

export interface CreateCoffeCartProps {
  coffeCart: CoffeProps[]
  coffeCartAdress: AdressProps | null
  paymentType: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO' | null
}

export function coffeReducer(state: CreateCoffeCartProps, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_COFFE:
      return {
        ...state,
        coffeCart: [...state.coffeCart, action.payload.newCoffe],
      }

    case ActionTypes.DELETE_COFFE:
      return {
        ...state,
        coffeCart: state.coffeCart.filter(
          (myCoffeCart) => myCoffeCart.id !== action.payload.id,
        ),
      }

    case ActionTypes.INCREMENT_COFFE_QUANTITY:
      return {
        ...state,
        coffeCart: state.coffeCart.map((coffee) => {
          if (coffee.id === action.payload.id) {
            // Increment the quantity of the specific coffee item
            return {
              ...coffee,
              quantity: coffee.quantity + 1,
            }
          }

          return coffee
        }),
      }

    case ActionTypes.DECREMENT_COFFE_QUANTITY:
      return {
        ...state,
        coffeCart: state.coffeCart.map((coffee) => {
          if (coffee.id === action.payload.id) {
            // Decrement the quantity of the specific coffee item
            return {
              ...coffee,
              quantity: coffee.quantity - 1,
            }
          }
          return coffee
        }),
      }

    case ActionTypes.ADD_PAYMENT_AND_ADDRESS_INFO:
      return {
        ...state,
        coffeCartAdress: action.payload.address,
        paymentType: action.payload.paymentType,
      }

    default:
      return state
  }
}
