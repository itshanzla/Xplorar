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
import Loginbtn from '../Buttons/Loginbtn';
interface ImagePicker {
  selectedLanguage?: any;
  visible?: any;
  onclose?: any;
  cancel?: () => void;
  proceed?: () => void;
}
const LogoutModal = ({visible, onclose, cancel, proceed}: ImagePicker) => {
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[styles.heading, {color: ThemeMode.primarytext}]}>
            Logout
          </Text>
          <Text style={[styles.headtxt, {color: ThemeMode.wnb}]}>
            Logging out will end your session. Are you Sure?
          </Text>
        </View>
        <View>
          <Loginbtn
            onpress={proceed}
            btnStyle={{backgroundColor: AppBaseColor.red}}
            txtStyle={{
              color: AppBaseColor.white,
              fontSize: AppFontSize.largetext,
            }}
            mainStyle={{marginTop: 20}}
            title="Proceed"
          />
          <Loginbtn
            onpress={cancel}
            txtStyle={{fontSize: AppFontSize.largetext}}
            mainStyle={{marginTop: 20}}
            title="Cancel"
          />
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
  },
  headtxt: {
    fontFamily: Fonts.outfitRegular,
    fontSize: AppFontSize.mediumtxt,
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
    fontSize: AppFontSize.extralarge,
    fontFamily: Fonts.outfitBold,
    paddingTop: 20,
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
