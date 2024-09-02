import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppBaseColor } from '../../../assets/Colors/Colors';
import { AppFontSize } from '../../../assets/Texts/Fontsize';

interface Forgotbtn{
    stylecontainer ?: any
    text ?: string
    subtext1 ?: string
    icon ?: any
    styletxt ?: any
     onPress ?: ()=>void
    isSelected ?: any
}
const Forgotbtn = ({stylecontainer,text,subtext1,icon,styletxt, onPress, isSelected}:Forgotbtn) => {
  return (

    <View style={[styles.container,stylecontainer]}>
      <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={[styles.Pressable,{borderColor:isSelected ? AppBaseColor.blue : AppBaseColor.gray}]}>
        <Image
          style={styles.Image}
          tintColor={isSelected ? AppBaseColor.blue : AppBaseColor.gray}
          source={icon}
        />
        <Text style={[styles.Txt,styletxt,{color:isSelected ? AppBaseColor.blue : AppBaseColor.gray}]}>{text}</Text>
        <Text style={styles.Txt1}>{subtext1}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Forgotbtn;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: '40%',
    height: 120,
    borderRadius: 8,
  },
  Pressable: {
    width: '100%',
    height:120,
    borderRadius: 8,
    borderWidth: 1,
    padding:10
  },
  Txt: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily:Fonts.outfitRegular,fontSize:AppFontSize.mediumtxt
  },
  Txt1: {
    alignSelf: 'flex-start',
    fontFamily: Fonts.outfitRegular,
    fontSize:AppFontSize.extrasmalltxt
    
  },
  Image: {
    width: 35,
    height: 35,
    marginBottom:10
  },
});
