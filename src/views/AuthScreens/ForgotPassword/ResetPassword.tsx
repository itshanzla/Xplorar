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

const ResetPassword = () => {
  const navigation: any = useNavigation();
  const [Email, SetEmail] = useState<string>('');
  const [Password, SetPassword] = useState<string>('');
  const [NewPassword, SetNewPassword] = useState<string>('');
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
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
              ? AppImages.forgotcode
              : AppImages.forgotcodedark
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
                  {t('createpass')}
                </Text>
                <Text style={[styles.desc, {color: ThemeMode.secondrytext}]}>
                  {t('resetpass')}
                </Text>
                <TextFields
                  value={Password}
                  onChangeText={(value: any) => SetPassword(value)}
                  secureTextEntry={secureEntry}
                  onhide={() => {
                    setSecureEntry(!secureEntry);
                  }}
                  ispassword
                  Placeholder={t("password")}
                  placeholderTextColor={ThemeMode.secondrytext}
                />
                <TextFields
                  value={NewPassword}
                  onChangeText={(value: any) => SetNewPassword(value)}
                  secureTextEntry={secureEntry}
                  onhide={() => {
                    setSecureEntry(!secureEntry);
                  }}
                  // ispassword
                  Placeholder={t("confirmPassword")}
                  mainStyle={{marginTop:10}}
                  placeholderTextColor={ThemeMode.secondrytext}
                />
                <Loginbtn
                  txtStyle={{color: AppBaseColor.white}}
                  btnStyle={{backgroundColor: ThemeMode.primarycolor}}
                  title={t('resetPassword')}
                  mainStyle={{marginTop: 20, marginBottom: 50}}
                />
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
