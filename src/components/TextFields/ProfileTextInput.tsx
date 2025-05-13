import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import { useSelector } from 'react-redux';
interface textinput {
  title?: string;
  value?: any;
  onChangeText?: any;
  stylemain?:any
}
const ProfileTextInput = ({title, value, onChangeText,stylemain}: textinput) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View style={[styles.main,stylemain,{borderColor:ThemeMode.wngray}]}>
      <Text style={[styles.txt,{color:ThemeMode?.wngray}]}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.txtinput,{color:ThemeMode.wnb}]}
      />
    </View>
  );
};

export default ProfileTextInput;

const styles = StyleSheet.create({
  main: {
    width: '90%',
    borderWidth: 1,
    height: 60,
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    borderColor: AppBaseColor.gray,
  },
  txt: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitSemiBold,
    color: AppBaseColor.gray,
  },
  txtinput: {
    width: '95%',
    height: 60,
    position: 'absolute',
    left: 2,
    top: 8,
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.largetext,
  },
});
