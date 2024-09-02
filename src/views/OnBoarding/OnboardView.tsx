import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppBaseColor } from '../../../assets/Colors/Colors';
interface OnBoardData{
    id?: number,
    title ?: string,
    desc ?: string,
    image ?: any
}
const OnboardView = ({image,title,desc}:OnBoardData) => {
    const {width} = useWindowDimensions();
  return (
    <View style={{flex:1,justifyContent:'center',width:width,paddingBottom:20}}>
      <Image resizeMode='contain' source={image} style={[styles.img,{width:width}]} />
      <Text style={[styles.title,{width:width}]}>{title}</Text>
      <Text style={[styles.desc,{width:width}]}>{desc}</Text>
    </View>
  )
}

export default OnboardView

const styles = StyleSheet.create({
    img:{
        height:400,
        elevation:7,
        borderRadius:100
    },
    title:{
        textAlign:'center',
        fontSize:28,
        fontFamily:Fonts.outfitSemiBold,
        color:AppBaseColor.blue
    },
    desc:{
        textAlign:'center',
        color:AppBaseColor.lightgreen,
        fontWeight:300,
        fontFamily:Fonts.outfitRegular,paddingHorizontal:40

    }
})