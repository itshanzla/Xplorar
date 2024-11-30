import {
  ActivityIndicator,
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
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {useSelector} from 'react-redux';
import BackButton from '../../components/Buttons/BackButton';

const SignupScreen = () => {
  const navigation: any = useNavigation();
  const [Name, Setname] = useState<string>('');
  const [Email, SetEmail] = useState<string>('');
  const [Message, SetMessage] = useState<string>('');
  const [Password, SetPassword] = useState<string>('');
  const [Loading, SetLoading] = useState<boolean>(false);
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const {t} = useTranslation();
  const ThemeMode = useSelector((state: any) => state.theme.mode);

  // const handleSignup = async () => {
  //   try {
  //     if (Email && Password) {
  //       SetLoading(true);
  //       const isuserCreated = await auth().createUserWithEmailAndPassword(
  //         Email,
  //         Password,
  //       );
  //       firestore().collection('Users').doc(isuserCreated?.user?.uid).set({
  //         email: isuserCreated?.user?.email,
  //         uid: isuserCreated?.user?.uid,
  //         name: Name,
  //       });
  //       navigation.navigate('LoginScreen');
  //       SetLoading(false);
  //     } else {
  //       console.log('Auth failed');
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleRegister = async () => {
    SetLoading(true);
    try {
      await axios.post('http://192.168.10.3:3000/register', {
        Username: Name.trim(),
        email: Email.trim(),
        password: Password,
      });
      SetMessage('Registration Successful');
      console.log(Message);
      Setname('');
      SetEmail('');
      SetPassword('');
    } catch (err) {
      console.error('Registration error:', err);
      SetMessage('Registration Failed');
    } finally {
      SetLoading(false);
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
              ? AppImages.signupbackground
              : AppImages.signupdark
          }>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
                <BackButton tintColor={AppBaseColor.white} />
              <KeyboardAvoidingView
                style={[
                  styles.loginView,
                  {backgroundColor: ThemeMode.secondrybg},
                ]}>
                <Text
                  style={{
                    fontSize: 28,
                    padding: 10,
                    marginLeft: 10,
                    color: ThemeMode.firsttxt,
                    fontFamily: Fonts.outfitBold,
                    marginBottom: -10,
                  }}>
                  {t('Join')}
                  <Text style={{color: ThemeMode.secondtxt}}>
                    {t('the')}
                    <Text style={{color: ThemeMode.firsttxt}}>
                      {t('Journey')}
                      <Text style={{color: ThemeMode.secondtxt}}>
                        {t('Now')}
                      </Text>
                    </Text>
                  </Text>
                </Text>
                <Text style={[styles.desc, {color: ThemeMode.primarycolor}]}>
                  {t('Unlockendlessjourneysahead')}
                </Text>
                <TextFields
                  value={Name}
                  onChangeText={(value: any) => Setname(value)}
                  mainStyle={{marginBottom: 10}}
                  placeholderTextColor={ThemeMode.secondrytext}
                  Placeholder="Name"
                />
                <TextFields
                  mainStyle={{marginBottom: 10}}
                  Placeholder="Email"
                  value={Email}
                  onChangeText={(value: any) => SetEmail(value)}
                  placeholderTextColor={ThemeMode.secondrytext}
                />
                <TextFields
                  secureTextEntry={secureEntry}
                  onhide={() => {
                    setSecureEntry(!secureEntry);
                  }}
                  value={Password}
                  onChangeText={(value: any) => SetPassword(value)}
                  ispassword
                  Placeholder="Password"
                  placeholderTextColor={ThemeMode.secondrytext}
                />
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    paddingRight: 20,
                    marginBottom: 10,
                  }}></View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: AppFontSize.smalltxt,
                      fontFamily: Fonts.outfitRegular,
                      color: ThemeMode.secondrytext,
                    }}>
                    {t('Alreadyhaveanaccount')}
                    <Text
                      onPress={() => navigation.navigate('LoginScreen')}
                      style={{color: ThemeMode.primarycolor}}>
                      {t('login')}
                    </Text>
                  </Text>
                </View>
                <Loginbtn
                  txtStyle={{color: AppBaseColor.white}}
                  btnStyle={{backgroundColor: ThemeMode.primarycolor}}
                  title={t('signup')}
                  mainStyle={{marginTop: 20}}
                  onpress={() => handleRegister()}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginBottom: 10,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={[
                      styles.txt,
                      {
                        color:
                          ThemeMode.mode === 'light'
                            ? AppBaseColor.lightgreen
                            : AppBaseColor.pearlwhite,
                      },
                    ]}>
                    {t('Byclicking')}
                    <Text
                      style={{
                        color:
                          ThemeMode.mode === 'light'
                            ? AppBaseColor.blue
                            : AppBaseColor.blue,
                      }}>
                      {t('Signup')}
                      <Text
                        style={{
                          color:
                            ThemeMode.mode === 'light'
                              ? AppBaseColor.lightgreen
                              : AppBaseColor.pearlwhite,
                        }}>
                        ,{t('youagreetoour')}
                        <Text
                          style={{
                            color:
                              ThemeMode.mode === 'light'
                                ? AppBaseColor.lightblue
                                : AppBaseColor.yellow,
                            marginTop: 5,
                          }}>
                          {t('terms')}
                          <Text
                            style={{
                              color:
                                ThemeMode.mode === 'light'
                                  ? AppBaseColor.lightgreen
                                  : AppBaseColor.pearlwhite,
                            }}>
                            {t('and')}
                            <Text
                              style={{
                                color:
                                  ThemeMode.mode === 'light'
                                    ? AppBaseColor.lightblue
                                    : AppBaseColor.yellow,
                              }}>
                              {t('policies')}
                            </Text>
                          </Text>
                        </Text>
                      </Text>
                    </Text>
                  </Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  backimg: {
    width: '100%',
    height: '100%',
  },
  loginView: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    position: 'absolute',
  },
  desc: {
    fontSize: AppFontSize.extramedium,
    padding: 20,
    paddingTop: 0,
    fontFamily: Fonts.outfitSemiBold,
  },
  txt: {
    fontSize: AppFontSize.smalltxt,
    color: AppBaseColor.lightgreen,
    fontFamily: Fonts.outfitRegular,
    textAlign: 'center',
    lineHeight: 20,
  },
});
