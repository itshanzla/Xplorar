import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppImages} from '../../../assets/images/AppImages';
import {useSelector} from 'react-redux';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppBaseColor} from '../../../assets/Colors/Colors';
interface Themebutton{
  onPress?: ()=>void
  tintColor?: any
  source?: any
}
const Themebutton = ({onPress,tintColor,source}:Themebutton) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.mainView}>
      <Image style={styles.img} source={source} tintColor={tintColor} />
    </TouchableOpacity>
  );
};

export default Themebutton;

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    top: 30,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  title: {
    color: 'black',
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
  },
  img: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});
