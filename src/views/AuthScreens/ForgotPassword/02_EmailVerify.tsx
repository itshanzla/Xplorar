import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Forgotbtn from '../../../components/Buttons/Forgotbtn';
import {AppImages} from '../../../../assets/images/AppImages';
import BackButton from '../../../components/Buttons/BackButton';
import {AppFontSize} from '../../../../assets/Texts/Fontsize';
import {Fonts} from '../../../../android/app/src/main/assets/fonts/Fonts';
import {AppBaseColor} from '../../../../assets/Colors/Colors';
import TextHeader from '../../../components/Headers/TextHeader';
import Loginbtn from '../../../components/Buttons/Loginbtn';
import {useNavigation} from '@react-navigation/native';
import TextFields from '../../../components/TextFields/TextFields';

const EmailVerify = () => {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'dark-content'} />
      <LinearGradient
        style={styles.LinearGradient}
        colors={['#8ce7f5', '#c0fad9']}>
        <BackButton
          onPress={() => navigation.goBack()}
          tintColor={AppBaseColor.blue}
        />

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <KeyboardAvoidingView style={styles.content}>
            <TextHeader
              title="Reset Password"
              desc="Please enter your email, we will send verification code to your email."
            />
            <View style={{marginTop: 20}}>
              <TextFields
                mainStyle={{marginTop: 10, marginBottom: -20}}
                icons={AppImages.email}
                tintcolor={AppBaseColor.blue}
                Placeholder="Email"
              />
            </View>
            <Loginbtn
              txtStyle={{fontSize: AppFontSize.extramedium, color: 'white'}}
              mainStyle={{marginTop: '20%'}}
              btnStyle={{backgroundColor: AppBaseColor.blue}}
              title="Send"
              onpress={() => navigation.navigate('EmailCode')}
            />
          </KeyboardAvoidingView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default EmailVerify;

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 0.7,
    width: '95%',
    borderRadius: 20,
    elevation: 7,
  },
});
