import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppBaseColor } from '../../../assets/Colors/Colors';
interface LangBtn {
  selectlanguage?: any;
  source?: any;
  onPress?: any
  tintColor?:any
}
const LangBtn = ({source, selectlanguage,onPress,tintColor}: LangBtn) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.btn}>
      {/* <Text style={styles.title}>{selectlanguage}</Text> */}
      <Image tintColor={tintColor} source={source} style={styles.img} />
    </TouchableOpacity>
  );
};

export default LangBtn;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderColor: '#9e9e9e',
    position: 'absolute',
    top: 30,
    right: 10,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex:1
  },
  title: {
    color: 'black',
    fontSize:AppFontSize.mediumtxt,
    fontFamily:Fonts.outfitRegular
  },
  img: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});
