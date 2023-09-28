import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { data } from '../data/db'
import {
  AdressProps,
  CoffeProps,
  coffeReducer,
  CreateCoffeCartProps,
} from '../reducers/coffe/reducer'

import {
  deleteCoffeAction,
  createCoffeAction,
  incrementCoffeAction,
  decrementCoffeAction,
  addPaymentAndAddressInfo,
} from '../reducers/coffe/actions'

export interface FakeApiProps {
  photo: string
  type: string[]
  coffeeName: string
  description: string
  price: string
}

interface CreateCoffeData {
  coffeeList: FakeApiProps[]
  cartState: CreateCoffeCartProps

  createCoffe: (data: CoffeProps) => void
  deleteCoffe: (id: number) => void

  incrementCoffe: (id: number) => void
  decrementCoffe: (id: number) => void

  addAdressAndPaymentInfo: (address: AdressProps, paymentType: string) => void
}

interface CoffeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CreateCoffeData)

export function CoffeeContextProvider({ children }: CoffeContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    coffeReducer,
    {
      coffeCart: [],
      coffeCartAdress: null,
      paymentType: null,
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-desafio-02:cart-state-1.0.0',
      )
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
      return initialState
    },
  )
  const coffeeList = data

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite-desafio-02:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function createCoffe(dataProps: CoffeProps) {
    dispatch(createCoffeAction(dataProps))
  }

  function deleteCoffe(id: number) {
    dispatch(deleteCoffeAction(id))
  }

  function incrementCoffe(id: number) {
    dispatch(incrementCoffeAction(id))
  }

  function decrementCoffe(id: number) {
    dispatch(decrementCoffeAction(id))
  }
  function addAdressAndPaymentInfo(address: AdressProps, paymentType: string) {
    dispatch(addPaymentAndAddressInfo(address, paymentType))
  }

  console.log(`O cartState atual =>`, cartState)
  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        cartState,
        createCoffe,
        deleteCoffe,
        incrementCoffe,
        decrementCoffe,
        addAdressAndPaymentInfo,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
