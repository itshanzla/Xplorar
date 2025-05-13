import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import StatusBarTrans from '../../../components/StatusBar/StatusBarTrans';
import BackButton from '../../../components/Buttons/BackButton';
import TextFields from '../../../components/TextFields/TextFields';
import Loginbtn from '../../../components/Buttons/Loginbtn';
import {AppBaseColor} from '../../../../assets/Colors/Colors';
import {AppFontSize} from '../../../../assets/Texts/Fontsize';
import {Fonts} from '../../../../android/app/src/main/assets/fonts/Fonts';
import {AppImages} from '../../../../assets/images/AppImages';
// import NotifyToast from '../../components/NotifyToast/NotifyToast';

const ForgotPassword = () => {
  const navigation: any = useNavigation();
  const [Email, SetEmail] = useState<string>('');
  const {t} = useTranslation();
  const ThemeMode = useSelector((state: any) => state.theme.mode);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <StatusBarTrans />
        <ImageBackground
          resizeMode="stretch"
          style={styles.backimg}
          source={
            ThemeMode.mode === 'light'
              ? AppImages.forgotpass
              : AppImages.forgotDark
          }>
          <BackButton
            onPress={() => navigation.goBack()}
            tintColor={ThemeMode.white}
          />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <KeyboardAvoidingView
                style={[
                  styles.loginView,
                  {backgroundColor: ThemeMode.mode === 'light' ? AppBaseColor.pearlwhite : AppBaseColor.cardBg},
                ]}>
                <Text style={[styles.txt1, {color: ThemeMode.firsttxt}]}>
                  {t('ForgotPassword')}
                </Text>
                <Text style={[styles.desc, {color: ThemeMode.secondrytext}]}>
                  {t('forgotdesc')}
                </Text>
                <TextFields
                  value={Email}
                  onChangeText={(value: any) => SetEmail(value)}
                  mainStyle={{marginBottom: 10}}
                  Placeholder={t('email')}
                  placeholderTextColor={ThemeMode.secondrytext}
                />
                <Loginbtn
                  txtStyle={{color: AppBaseColor.white}}
                  btnStyle={{backgroundColor: ThemeMode.primarycolor}}
                  title={t('sendcode')}
                  mainStyle={{marginTop: 20, marginBottom: 50}}
                  onpress={()=>navigation.navigate('ResetPassword')}
                />
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  backimg: {
    width: '100%',
    height: '100%',
  },
  loginView: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  desc: {
    fontSize: AppFontSize.mediumtxt,
    padding: 20,
    paddingTop: 0,
    fontFamily: Fonts.outfitSemiBold,
    color: '#336749',
  },
  txt: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitRegular,
  },
  txt1: {
    fontSize: AppFontSize.header,
    padding: 10,
    marginLeft: 10,
    fontFamily: Fonts.outfitBold,
    marginBottom: -10,
  },
});
