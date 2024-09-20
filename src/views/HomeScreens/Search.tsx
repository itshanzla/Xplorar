import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBaseColor } from '../../../assets/Colors/Colors'
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts'

const Search = ({navigation} : any) => {
  return (
    <View style={{backgroundColor:AppBaseColor.blue,flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:24,color:'white',fontFamily:Fonts.outfitBold}}>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})