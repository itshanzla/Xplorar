import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
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

const EmailCode = () => {
  const [code, setCode] = useState<any[]>(['', '', '', '']);
  const navigation: any = useNavigation();
  const inputRefs = useRef<any[]>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };
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
              title="Verification Code"
              desc="Please enter the code we just sent to email"
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              {code.map((value, index) => (
                <TextInput
                  key={index}
                  style={styles.input3}
                  value={value}
                  onChangeText={text => handleChange(text, index)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={ref => (inputRefs.current[index] = ref)}
                />
              ))}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.txt}>
                {'If you didnt receive a code?\t'}
                <Text style={{color: AppBaseColor.blue}}>{'Resend'}</Text>
              </Text>
            </View>
            <Loginbtn
              txtStyle={{fontSize: AppFontSize.extramedium, color: 'white'}}
              mainStyle={{marginTop: '20%'}}
              btnStyle={{backgroundColor: AppBaseColor.blue}}
              title="Continue"
              onpress={()=>navigation.navigate('ResetPassword')}
            />
          </KeyboardAvoidingView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default EmailCode;

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 0.6,
    width: '95%',
    borderRadius: 20,
    elevation: 7,
  },
  input3: {
    width: 52,
    height: 52,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: AppBaseColor.lightGray,
    marginHorizontal: 4,
    color: 'black',
    fontFamily: Fonts.outfitRegular,
  },
  txt: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.gray,
    marginTop: 20,
    marginBottom: -20,
  },
});
