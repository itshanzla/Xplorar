import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { persistStore } from 'redux-persist'
import ReduxStore from '../Redux/ReduxStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from '../../../App'

const Main = () => {

    let persistor = persistStore(ReduxStore)
  return (
    <Provider store={ReduxStore}>
        <PersistGate persistor={persistor}>
            <App />

        </PersistGate>

    </Provider>
    
  )
}

export default Main

const styles = StyleSheet.create({})