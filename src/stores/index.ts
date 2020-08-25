import React, { useContext } from "react"
import TestStore from './test'
import AppStore from './app';

const storeContext = React.createContext({
  testStore: new TestStore(),
  appStore: new AppStore()
})

export const useStores = () => useContext(storeContext)