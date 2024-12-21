import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {AppImages} from '../../../assets/images/AppImages';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
interface ImagePicker{
    selectedLanguage?:any
    visible?:any
    onclose?:any
    onSelect?:any
    onPress?:()=>void
    onPress1?:()=>void
}
const ImagePickerModal = ({
  selectedLanguage,
  visible,
  onclose,
  onSelect,
  onPress,
  onPress1
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
        <StatusBar animated backgroundColor={ThemeMode.primarycolor} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[styles.heading, {color: ThemeMode.primarytext}]}>
            Profile Photo
          </Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
              style={{
                backgroundColor: ThemeMode.Darkbg,
                elevation: 7,
                width: 80,
                height: 80,
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{width: 40, height: 40}}
                tintColor={ThemeMode.mode === 'light' ?  AppBaseColor.gray : AppBaseColor.white}
                source={AppImages.camera}
              />
              <Text
                style={{
                  fontFamily: Fonts.outfitmedium,
                  color: ThemeMode.wngray,
                  fontSize: AppFontSize.smalltxt,
                }}>
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress1}
              style={{
                backgroundColor: ThemeMode.Darkbg,
                elevation: 7,
                width: 80,
                height: 80,
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{width: 40, height: 40}}
                tintColor={ThemeMode.mode === 'light' ?  AppBaseColor.gray : AppBaseColor.white}
                source={AppImages.gallery}
              />
              <Text
                style={{
                  fontFamily: Fonts.outfitmedium,
                  color: ThemeMode.wngray,
                  fontSize: AppFontSize.smalltxt,
                }}>
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
  },
  modal: {
    width: '100%',
    paddingBottom: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
});
