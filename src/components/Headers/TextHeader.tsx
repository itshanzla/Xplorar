import {StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppBaseColor } from '../../../assets/Colors/Colors';
interface textheader{
    title?: string,
    desc?: string
    mainstyle?:any
    forgotTxt?:any
    subtxt?: any
}
const TextHeader = ({title,desc,mainstyle,forgotTxt,subtxt}:textheader) => {
  return (
    <View style={mainstyle}>
      <Text style={[styles.forgottxt,forgotTxt]}>{title}</Text>
      <Text style={[styles.subtext,subtxt]}>
       {desc}
      </Text>
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  forgottxt: {
    paddingTop: 20,
    marginLeft: '5%',
    fontSize: AppFontSize.header,
    fontFamily: Fonts.outfitBold,
    color: AppBaseColor.blue,
    
  },
  subtext: {
    marginLeft: '5%',
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitmedium,
    marginHorizontal:10
  },
});
