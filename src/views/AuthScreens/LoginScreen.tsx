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
import StatusBarNormal from '../../components/StatusBar/StatusBarNormal';
import StatusBarTrans from '../../components/StatusBar/StatusBarTrans';
import {AppImages} from '../../../assets/images/AppImages';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import TextFields from '../../components/TextFields/TextFields';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import Loginbtn from '../../components/Buttons/Loginbtn';
import {CommonActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useTranslation} from 'react-i18next';
import BackButton from '../../components/Buttons/BackButton';
import {useSelector} from 'react-redux';
import axios from 'axios';
// import NotifyToast from '../../components/NotifyToast/NotifyToast';

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const [Email, SetEmail] = useState<string>('');
  const [Password, SetPassword] = useState<string>('');
  const [Loading, SetLoading] = useState<boolean>(false);
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [Toastmsg, setToastmsg] = useState<any>('');
  const {t} = useTranslation();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  // const visibleToast = (message:any) => {
  //   setToastmsg(message)
  //   setShowToast(true);
  //   setTimeout(() => {
  //     setShowToast(false);
  //   }, 3000);
  // }; 
  // const handleLogin = async () => {
  //   try {
  //     if (Email != '' && Password != '') {
  //       const isUserSignin = await auth().signInWithEmailAndPassword(
  //         Email,
  //         Password,
  //       );
  //       const data = {
  //         email: Email,
  //         passsword: Password,
  //       };
  //       navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{name: 'HomeStack'}],
  //         }),
  //       );
  //       SetEmail('');
  //       SetPassword('');
  //     } else {
  //       console.log('Signin Cancelled');
  //     }
  //   } catch (err : any) {
  //     // visibleToast(err?.message)
  //     console.error(err)
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.10.3:3000/login', {
        email: Email.trim(),
        password: Password,
      });
      console.log('Login Successful=>', response.data.token);
    } catch (err) {
      console.log('Login failed because =>', err);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <StatusBarTrans />
        <ImageBackground
          resizeMode="cover"
          style={styles.backimg}
          source={
            ThemeMode.mode === 'light'
              ? AppImages.loginbackimage
              : AppImages.darkbg2
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
                  {backgroundColor: ThemeMode.secondrybg},
                ]}>
                <Text style={[styles.txt1, {color: ThemeMode.firsttxt}]}>
                  {t('lets')}
                  <Text style={{color: ThemeMode.secondtxt}}>
                    {t('travel')}
                    <Text style={{color: ThemeMode.firsttxt}}>
                      {t('you')}
                      <Text style={{color: ThemeMode.secondtxt}}>
                        {t('in')}
                      </Text>
                    </Text>
                  </Text>
                </Text>
                <Text style={[styles.desc, {color: ThemeMode.primarycolor}]}>
                  {t('DiscovertheworldwithEverySignIn')}
                </Text>
                <TextFields
                  value={Email}
                  onChangeText={(value: any) => SetEmail(value)}
                  mainStyle={{marginBottom: 10}}
                  Placeholder={t('email')}
                  placeholderTextColor={ThemeMode.secondrytext}
                />
                <TextFields
                  value={Password}
                  onChangeText={(value: any) => SetPassword(value)}
                  secureTextEntry={secureEntry}
                  onhide={() => {
                    setSecureEntry(!secureEntry);
                  }}
                  ispassword
                  Placeholder={t('password')}
                  placeholderTextColor={ThemeMode.secondrytext}
                  tintcolor={ThemeMode.secondrytext}
                />
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    paddingRight: 20,
                    marginTop: 10,
                  }}>
                  <Text
                    onPress={() => navigation.navigate('ForgotPassword')}
                    style={[styles.txt, {color: ThemeMode.secondrytext}]}>
                    {t('forgotPassword')}
                  </Text>
                </View>
                <Loginbtn
                  txtStyle={{color: AppBaseColor.white}}
                  btnStyle={{backgroundColor: ThemeMode.primarycolor}}
                  title={t('login')}
                  mainStyle={{marginTop: 20}}
                  onpress={() => handleLogin()}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: AppFontSize.smalltxt,
                      fontFamily: Fonts.outfitRegular,
                      color: ThemeMode.secondrytext,
                    }}>
                    {t('DoesntHaveanAccount')}
                    <Text
                      onPress={() => navigation.navigate('SignupScreen')}
                      style={{color: ThemeMode.primarycolor}}>
                      {t('signup')}
                    </Text>
                  </Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      {/* <View style={{justifyContent:'center',alignItems:'center'}}>
        <NotifyToast
        message={Toastmsg}
        visible={showToast}
        type={'ERROR'}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    fontSize: AppFontSize.largetext,
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
