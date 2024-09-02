import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppImages } from '../../../assets/images/AppImages'
import { AppBaseColor } from '../../../assets/Colors/Colors'

const SplashScreen = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Image style={styles.logo} source={AppImages.applogo} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  main:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:AppBaseColor.blue
  },
  logo:{
    width:217,
    height:80
  }
})