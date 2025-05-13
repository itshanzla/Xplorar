import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTabNavBar from '../../navigation/BottomTab/BottomTabNavBar'
import PopularScreen from '../../components/PopularFlatlist/PopularScreen'
import ContentCountries from '../../components/ContentFlatlist/ContentCountries'
import CountriesDetails from '../../components/ContentFlatlist/CountriesDetails'
import ProfileInfo from '../ProfileScreens/ProfileInfo'
import PrivacyPolicy from '../ProfileScreens/PrivacyPolicy'
import AIDays from '../../components/AIComponents/AIDays'
import AIDestination from '../../components/AIComponents/AIDestination'
import Interests from '../../components/AIComponents/Interests'
import TravelMode from '../../components/AIComponents/TravelMode'
import AIBudget from '../../components/AIComponents/AIBudget'
import AIResponse from '../../components/AIComponents/AIResponse'
const HomeStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='BottomTabNavBar' component={BottomTabNavBar} />
      <Stack.Screen name='PopularScreen' component={PopularScreen} />
      <Stack.Screen name='ContentCountries' component={ContentCountries} />
      <Stack.Screen name='CountriesDetails' component={CountriesDetails} />
      <Stack.Screen name='ProfileInfo' component={ProfileInfo} />
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
      <Stack.Screen name='AIDays' component={AIDays} />
      <Stack.Screen name='AIDestination' component={AIDestination} />
      <Stack.Screen name='Interests' component={Interests} />
      <Stack.Screen name='TravelMode' component={TravelMode} />
      <Stack.Screen name='AIBudget' component={AIBudget} />
      <Stack.Screen name='AIResponse' component={AIResponse} />
    </Stack.Navigator>
    
  )
}

export default HomeStack

const styles = StyleSheet.create({})