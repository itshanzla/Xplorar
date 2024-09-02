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

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <StatusBarTrans />
        <ImageBackground
          resizeMode="cover"
          style={styles.backimg}
          source={AppImages.loginbackimage}>
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
                    fontSize: AppFontSize.header,
                    padding: 10,
                    marginLeft: 10,
                    color: '#336749',
                    fontFamily: Fonts.outfitBold,
                    marginBottom: -10,
                  }}>
                  {"Let's\t"}
                  <Text style={{color: '#007A8C'}}>
                    {'Travel\t'}
                    <Text style={{color: '#336749'}}>
                      {'You\t'}
                      <Text style={{color: '#007A8C'}}>{'In.'}</Text>
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.desc}>
                  Discover the world with Every Sign In.{' '}
                </Text>
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
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  <Text
                    onPress={() => navigation.navigate('SelectForgot')}
                    style={styles.txt}>
                    Forgot Password?
                  </Text>
                </View>
                <Loginbtn
                  txtStyle={{color: AppBaseColor.white}}
                  btnStyle={{backgroundColor: AppBaseColor.blue}}
                  title="Sign in"
                  mainStyle={{marginTop: 20}}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: AppFontSize.smalltxt,
                      fontFamily: Fonts.outfitRegular,
                    }}>
                    {"Doesn't Have an Account?\t"}
                    <Text
                      onPress={() => navigation.navigate('SignupScreen')}
                      style={{color: AppBaseColor.blue}}>
                      {'Signup'}
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
  },
});
