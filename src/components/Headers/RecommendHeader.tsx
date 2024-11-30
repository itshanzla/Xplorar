import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppBaseColor } from '../../../assets/Colors/Colors';
interface content{
    title?: string,
    subtitle?: string
    onPress?:()=>void
}
const RecommendHeader = ({title,subtitle,onPress}:content) => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt1}>{title}</Text>
      <Text onPress={onPress} style={styles.txt2}>{subtitle}</Text>
    </View>
  );
};

export default RecommendHeader;

const styles = StyleSheet.create({
  main: {
    marginTop:10,
    paddingLeft:'4%'
  },
  txt1: {
    fontSize:AppFontSize.extralarge,
    fontFamily:Fonts.outfitBold,
    color:AppBaseColor.blue

  },
  txt2: {
    fontSize:AppFontSize.mediumtxt,
    fontFamily:Fonts.outfitRegular,
    color:AppBaseColor.gray
  },
});
