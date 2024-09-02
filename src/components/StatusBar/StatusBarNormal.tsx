import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusBarNormal = () => {
  return (
    <StatusBar
    translucent={false}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
  )
}

export default StatusBarNormal

const styles = StyleSheet.create({})