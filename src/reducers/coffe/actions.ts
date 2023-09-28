import { AdressProps, CoffeProps, CreateCoffeCartProps } from './reducer'

export enum ActionTypes {
  CREATE_NEW_COFFE = 'CREATE_NEW_COFFE',
  DELETE_COFFE = 'DELETE_COFFE',
  INCREMENT_COFFE_QUANTITY = 'INCREMENT_COFFE_QUANTITY',
  DECREMENT_COFFE_QUANTITY = 'DECREMENT_COFFE_QUANTITY',
  ADD_PAYMENT_AND_ADDRESS_INFO = 'ADD_PAYMENT_AND_ADDRESS_INFO',
}

export function createCoffeAction(newCoffe: CoffeProps) {
  // console.log(`newCoffe`, newCoffe)
  // criar aqui newCoffe
  // achar o objeto dele na api
  // adicionar o quantitiy criando com +1

  return {
    type: ActionTypes.CREATE_NEW_COFFE,
    payload: {
      newCoffe,
    },
  }
}

export function deleteCoffeAction(id: number) {
  return {
    type: ActionTypes.DELETE_COFFE,
    payload: {
      id,
    },
  }
}

export function incrementCoffeAction(id: number) {
  return {
    type: ActionTypes.INCREMENT_COFFE_QUANTITY,
    payload: {
      id,
    },
  }
}

export function decrementCoffeAction(id: number) {
  return {
    type: ActionTypes.DECREMENT_COFFE_QUANTITY,
    payload: {
      id,
    },
  }
}
export function addPaymentAndAddressInfo(
  address: AdressProps,
  paymentType: string,
) {
  return {
    type: ActionTypes.ADD_PAYMENT_AND_ADDRESS_INFO,
    payload: {
      address,
      paymentType,
    },
  }
}
