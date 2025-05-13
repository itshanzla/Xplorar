import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {AppImages} from '../../../assets/images/AppImages';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import NextBtn from '../Buttons/NextBtn';
interface ImagePicker {
  onChangeText?: any;
  visible?: any;
  onclose?: any;
  value?: any;
  onPress?: any;
  placeholderTextColor?:any,
  placeholder?:any
}
const CustomDaysModal = ({
    value,
  visible,
  onclose,
  onChangeText,
  placeholderTextColor,
  placeholder,
  onPress,
}: ImagePicker) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);

  return (
    <Modal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={onclose}
      isVisible={visible}
      style={styles.modalView}>
      <View
        style={[styles.modal, {backgroundColor: ThemeMode.primarybackground}]}>
        <StatusBar backgroundColor={ThemeMode.primarycolor} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[styles.heading, {color: ThemeMode.primarytext}]}>
            Add Custom Days
          </Text>
          <View style={styles.inputMain}>
            <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
              keyboardType="numeric"
              maxLength={2}
              style={styles.txtInput}
              value={value}
              onChangeText={onChangeText}
            />
          </View>
          <NextBtn text='Save & Continue' onPress={onPress} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomDaysModal;

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
  },
  modal: {
    width: '100%',
    paddingBottom: 20,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 40,
  },
  heading: {
    fontSize: 20,
    fontFamily: Fonts.outfitBold,
    color: 'black',
    margin: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    height: 50,
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  icon: {
    width: 18,
    height: 18,
  },
  itemtxt: {
    marginLeft: 10,
    fontFamily: Fonts.outfitSemiBold,
  },
  inputMain: {
    width: '20%',
    height: 60,
    backgroundColor: AppBaseColor.cardBg,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.largetext,
  },
});
