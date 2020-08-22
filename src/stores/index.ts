import React, { useContext } from "react"
import TestStore from './test'

const storeContext = React.createContext({
  testStore: new TestStore()
})

export const useStores = () => useContext(storeContext)