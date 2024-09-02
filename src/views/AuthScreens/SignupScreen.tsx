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
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const navigation: any = useNavigation();
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
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
                <TextFields mainStyle={{marginBottom: 10}} Placeholder="Name" />
                <TextFields
                  mainStyle={{marginBottom: 10}}
                  Placeholder="Email"
                />
                <TextFields
                  secureTextEntry={secureEntry}
                  onhide={() => {
                    setSecureEntry(!secureEntry);
                  }}
                  ispassword
                  Placeholder="Password"
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
                />
                <View style={{justifyContent:'center',alignItems:'center',marginTop:20,marginHorizontal:10,}}>
                  <Text style={styles.txt}>
                    By clicking{' '}
                    <Text style={{color:AppBaseColor.blue}}>
                      'Sign Up'
                      <Text style={{color:AppBaseColor.lightgreen}}>
                        , you agree to our <Text style={{color:AppBaseColor.lightblue,marginTop:5}}>{"\n'Terms'\t"}<Text style={{color:AppBaseColor.lightgreen}}>{"and\t"}<Text style={{color:AppBaseColor.lightblue}}>{"'Policies'"}</Text></Text></Text>
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
    textAlign:'center',
    lineHeight:20
  },
});
