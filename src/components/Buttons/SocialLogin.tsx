import {Image, ImageProps, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppImages } from '../../../assets/images/AppImages';
interface SocialLogin{
    title ?: string,
    source ?: ImageProps,
    tintcolor?: any,
    mainStyle?: any,
    onPress?: ()=>void
}
const SocialLogin = ({title,source,tintcolor,mainStyle,onPress} : SocialLogin) => {
  return (
    <View style={[styles.main,mainStyle]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.btn}>
        <Image tintColor={tintcolor} resizeMode='contain' style={styles.icon} source={source}/>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  main: {justifyContent: 'center', alignItems: 'center'},
  btn: {
    backgroundColor: AppBaseColor.black,
    width: '90%',
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    elevation:7
  },
  txt: {
    color: AppBaseColor.white,
    fontFamily: Fonts.outfitmedium,
  },
  icon:{
    width:18,
    height:18,
    marginRight:10
  }
});
