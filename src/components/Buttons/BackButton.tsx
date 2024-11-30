import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppImages} from '../../../assets/images/AppImages';
import { useSelector } from 'react-redux';
interface BackButton{
    tintColor?:any
    onPress?:()=>void
}
const BackButton = ({tintColor,onPress}:BackButton) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.btn,{backgroundColor:ThemeMode.primarycolor}]}>
      <Image tintColor={tintColor} style={styles.img} source={AppImages.leftnav} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  img: {
    width: 24,
    height: 24,
  },
  btn: {
    alignSelf: 'flex-start',
    borderRadius: 100,
    height: 34,
    width: 34,
    top: 30,
    left: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 7,
    zIndex:1
  },
});
