import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTabNavBar from '../../navigation/BottomTab/BottomTabNavBar'
const HomeStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='BottomTabNavBar' component={BottomTabNavBar} />
    </Stack.Navigator>
    
  )
}

export default HomeStack

const styles = StyleSheet.create({})