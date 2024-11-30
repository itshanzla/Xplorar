import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBaseColor } from '../../../assets/Colors/Colors'
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts'
import SearchField from '../../components/SearchComp/SearchField'

const Search = ({navigation} : any) => {
  return (
    <View style={{backgroundColor:AppBaseColor.ivory,flex:1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppBaseColor.ivory}
      />
      <SearchField search placeholder='Search' />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})