import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
interface NextBtn {
  onPress?: () => void;
  text?:string
  btnStyle?:any
  loading?:boolean
}
const NextBtn = ({onPress,text,btnStyle,loading}: NextBtn) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn,btnStyle]}>
      {
        loading ? 
        <ActivityIndicator size={'large'} color={'black'}/> :
        <Text style={styles.btnTxt}>{text}</Text>
      }
      
    </TouchableOpacity>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  btn: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop:20,
    marginBottom:20
  },
  btnTxt: {
    fontFamily: Fonts.outfitRegular,
    fontSize: AppFontSize.mediumtxt,
    color: AppBaseColor.white,
  },
});
