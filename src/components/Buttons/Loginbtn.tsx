import {ActivityIndicator, Image, ImageProps, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppImages } from '../../../assets/images/AppImages';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { useSelector } from 'react-redux';
interface Loginbtn{
    title ?: string,
    source ?: ImageProps,
    tintcolor?: any,
    mainStyle?: any,
    onpress?: ()=>void,
    btnStyle?: any ,
    txtStyle ?: any,
    Loading?:boolean
}
const Loginbtn = ({title,mainStyle,onpress,btnStyle,txtStyle,Loading} : Loginbtn) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View style={[styles.main,mainStyle]}>
      <TouchableOpacity onPress={onpress} activeOpacity={0.8} style={[styles.btn,btnStyle]}>
        {
          Loading ? <ActivityIndicator color={AppBaseColor.white} size={'small'} /> : 
          <Text style={[styles.txt,txtStyle]}>{title}</Text>
        }
        
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
    elevation:8
  },
  txt: {
    color: AppBaseColor.black,
    fontFamily: Fonts.outfitBold,
    fontSize:AppFontSize.mediumtxt
  },
});
