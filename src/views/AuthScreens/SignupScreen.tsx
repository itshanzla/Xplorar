import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import * as animateable from 'react-native-animatable';

const SignupScreen = () => {
  const navigation: any = useNavigation();
  const [Name, Setname] = useState<string>('');
  const [Email, SetEmail] = useState<string>('');
  const [Password, SetPassword] = useState<string>('');
  const [Loading, SetLoading] = useState<boolean>(false);
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const [showState, setShowState] = useState(false);
  const [ValidEmail, setisvalidEmail] = useState(false);

  const handleSignup = async () => {
    try {
      if (Email.length === 0) {
        setShowState(true);
      } else if (Email && Password) {
        SetLoading(true);
        const isuserCreated = await auth().createUserWithEmailAndPassword(
          Email,
          Password,
        );
        firestore().collection('Users').doc(isuserCreated?.user?.uid).set({
          email: isuserCreated?.user?.email,
          uid: isuserCreated?.user?.uid,
          name: Name,
        });
        navigation.navigate('LoginScreen');
        SetLoading(false);
      } else {
        console.log('Auth failed');
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    isValidEmail();
  }, [Email]);
  const isValidEmail = () => {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(Email)) {
      setisvalidEmail(true);
    } else {
      setisvalidEmail(false);
    }
    // return re.match(email);
  };
  const [validations, setValidations] = useState({
    minLength: false,
    hasNumber: false,
    hasLetter: false,
  });
  const validatePassword = (pwd: any) => {
    const minLength = pwd.length >= 8;
    const hasNumber = /\d/.test(pwd);
    const hasLetter = /[A-Z]/.test(pwd);
    setValidations({minLength, hasNumber, hasLetter});
  };
  const handlePasswordChange = (pwd: any) => {
    SetPassword(pwd);
    validatePassword(pwd);
  };
  const isvalidpassword = () => {
    let re =
      /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$_&-+-()/="':;?,.<>%^&*]{8,100}$/;
    return re.test(Password);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <StatusBarTrans />
        <ImageBackground
          resizeMode="cover"
          style={styles.backimg}
          source={AppImages.signupbackground}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <KeyboardAvoidingView style={styles.loginView}>
                <Text
                  style={{
                    fontSize: 28,
                    padding: 10,
                    marginLeft: 10,
                    color: '#336749',
                    fontFamily: Fonts.outfitBold,
                    marginBottom: -10,
                  }}>
                  {'Join\t'}
                  <Text style={{color: '#007A8C'}}>
                    {'the\t'}
                    <Text style={{color: '#336749'}}>
                      {'Journey\t'}
                      <Text style={{color: '#007A8C'}}>{'Now.'}</Text>
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.desc}>Unlock endless journeys ahead! </Text>
                <TextFields
                  value={Name}
                  onChangeText={(value: any) => Setname(value)}
                  mainStyle={{marginBottom: 10}}
                  Placeholder="Name"
                />
                <TextFields
                  mainStyle={{marginBottom: 10}}
                  Placeholder="Email"
                  value={Email}
                  onChangeText={(value: any) => SetEmail(value)}
                />
                {showState == true && Email.length == 0 ? (
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      paddingLeft: '6%',
                      marginTop: -5,
                      marginBottom: 5,
                    }}>
                    <animateable.Text
                      easing={'ease-in'}
                      duration={700}
                      animation={'fadeInLeft'}
                      style={styles.textValid}>
                      Email is Required
                    </animateable.Text>
                  </View>
                ) : null}
                {Email.length > 0 && (
                  <View style={{alignSelf: 'flex-start'}}>
                    {ValidEmail ? (
                      <animateable.View
                        animation={'fadeInRight'}
                        duration={1200}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingLeft: '6%',
                          marginTop: -5,
                          marginBottom: 5,
                        }}>
                        <Image
                          tintColor={AppBaseColor.blue}
                          style={styles.image}
                          resizeMode="contain"
                          source={AppImages.check}
                        />
                        <Text style={[styles.validationText, {color: 'black'}]}>
                          Email is Valid
                        </Text>
                      </animateable.View>
                    ) : (
                      <animateable.View
                        animation={'fadeInRight'}
                        duration={1200}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingLeft: '6%',
                          marginTop: -5,
                          marginBottom: 5,
                        }}>
                        <Image
                          tintColor={'red'}
                          style={styles.image}
                          resizeMode="contain"
                          source={AppImages.cross}
                        />
                        <Text style={[styles.validationText, {color: 'black'}]}>
                          Email is not Valid
                        </Text>
                      </animateable.View>
                    )}
                  </View>
                )}
                <TextFields
                  secureTextEntry={secureEntry}
                  onhide={() => {
                    setSecureEntry(!secureEntry);
                  }}
                  value={Password}
                  onChangeText={handlePasswordChange}
                  ispassword
                  Placeholder="Password"
                />
                {showState == true && Password.length == 0 ? (
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      paddingLeft: '6%',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    <animateable.Text
                      easing={'ease-in'}
                      duration={700}
                      animation={'fadeInLeft'}
                      style={styles.textValid}>
                      Password is Required
                    </animateable.Text>
                  </View>
                ) : null}
                {Password.length > 0 && (
                  <View style={styles.validationContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <animateable.Image
                        duration={1400}
                        animation={'fadeInLeft'}
                        tintColor={
                          validations.minLength ? AppBaseColor.blue : 'red'
                        }
                        style={styles.image}
                        resizeMode="contain"
                        source={
                          validations.minLength
                            ? AppImages.check
                            : AppImages.cross
                        }
                      />
                      <animateable.Text
                        duration={1400}
                        animation={'fadeInLeft'}
                        style={[styles.validationText, {color: 'black'}]}>
                        Minimum 8 characters
                      </animateable.Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <animateable.Image
                        duration={1600}
                        animation={'fadeInLeft'}
                        tintColor={
                          validations.minLength ? AppBaseColor.blue : 'red'
                        }
                        style={styles.image}
                        resizeMode="contain"
                        source={
                          validations.minLength
                            ? AppImages.check
                            : AppImages.cross
                        }
                      />
                      <animateable.Text
                        duration={1600}
                        animation={'fadeInLeft'}
                        style={[styles.validationText, {color: 'black'}]}>
                        Atleast lowercase or uppercase letters
                      </animateable.Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <animateable.Image
                        duration={1800}
                        animation={'fadeInLeft'}
                        tintColor={
                          validations.minLength ? AppBaseColor.blue : 'red'
                        }
                        style={styles.image}
                        resizeMode="contain"
                        source={
                          validations.minLength
                            ? AppImages.check
                            : AppImages.cross
                        }
                      />
                      <animateable.Text
                        duration={1800}
                        animation={'fadeInLeft'}
                        style={[styles.validationText, {color: 'black'}]}>
                        Atleast 1 number (1-9)
                      </animateable.Text>
                    </View>
                  </View>
                )}
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
                    }}>
                    {'Already Have an Account?\t'}
                    <Text
                      onPress={() => navigation.navigate('LoginScreen')}
                      style={{color: AppBaseColor.blue}}>
                      {'Signin'}
                    </Text>
                  </Text>
                </View>
                <Loginbtn
                  txtStyle={{color: AppBaseColor.white}}
                  btnStyle={{backgroundColor: AppBaseColor.blue}}
                  title="Sign up"
                  mainStyle={{marginTop: 20}}
                  onpress={() => handleSignup()}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginHorizontal: 10,
                  }}>
                  <Text style={styles.txt}>
                    By clicking{' '}
                    <Text style={{color: AppBaseColor.blue}}>
                      'Sign Up'
                      <Text style={{color: AppBaseColor.lightgreen}}>
                        , you agree to our{' '}
                        <Text
                          style={{color: AppBaseColor.lightblue, marginTop: 5}}>
                          {"\n'Terms'\t"}
                          <Text style={{color: AppBaseColor.lightgreen}}>
                            {'and\t'}
                            <Text style={{color: AppBaseColor.lightblue}}>
                              {"'Policies'"}
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
    width: '90%',
    borderRadius: 20,
    elevation: 7,
    flex: 0.1,
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
    color: AppBaseColor.lightgreen,
    fontFamily: Fonts.outfitRegular,
    textAlign: 'center',
    lineHeight: 20,
  },
  validationText: {
    fontSize: 14,
    marginVertical: 4,
    marginLeft: 5,
    fontFamily: Fonts.outfitRegular,
  },
  image: {
    width: 16,
    height: 16,
  },
  textValid: {
    fontSize: 14,
    fontFamily: Fonts.outfitRegular,
    color: 'red',
  },
  validationContainer: {
    alignSelf: 'flex-start',
    paddingLeft: '6%',
    marginTop: 5,
  },
});
