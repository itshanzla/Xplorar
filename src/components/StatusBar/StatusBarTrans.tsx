import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'

const StatusBarTrans = () => {
  return (
    <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
  )
}

export default StatusBarTrans

const styles = StyleSheet.create({})