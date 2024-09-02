import {Image, ImageProps, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppImages } from '../../../assets/images/AppImages';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
interface Loginbtn{
    title ?: string,
    source ?: ImageProps,
    tintcolor?: any,
    mainStyle?: any,
    onpress?: ()=>void,
    btnStyle?: any ,
    txtStyle ?: any
}
const Loginbtn = ({title,mainStyle,onpress,btnStyle,txtStyle} : Loginbtn) => {
  return (
    <View style={[styles.main,mainStyle]}>
      <TouchableOpacity onPress={onpress} activeOpacity={0.8} style={[styles.btn,btnStyle]}>
        <Text style={[styles.txt,txtStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loginbtn;

const styles = StyleSheet.create({
  main: {justifyContent: 'center', alignItems: 'center'},
  btn: {
    backgroundColor: AppBaseColor.white,
    width: '90%',
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    elevation:7
  },
  txt: {
    color: AppBaseColor.black,
    fontFamily: Fonts.outfitBold,
    fontSize:AppFontSize.mediumtxt
  },
});
