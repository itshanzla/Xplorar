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

const SelectForgot = () => {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const navigation : any = useNavigation();
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
              title="Forgot Password"
              desc="Select which contact details should we use to reset your password"
            />

            <View>
              <View
                style={{
                  padding: 20,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: -20,
                }}>
                <Forgotbtn
                  isSelected={selectedButton == 1}
                  onPress={() => setSelectedButton(1)}
                  icon={AppImages.email}
                  text="Email"
                  subtext1="Send to your email"
                />
                <Forgotbtn
                  isSelected={selectedButton == 2}
                  onPress={() => setSelectedButton(2)}
                  icon={AppImages.phone}
                  text="Phone"
                  subtext1="Send to your phone"
                />
              </View>
            </View>
            <Loginbtn
              txtStyle={{fontSize: AppFontSize.extramedium, color: 'white'}}
              mainStyle={{marginTop: '20%'}}
              btnStyle={{backgroundColor: AppBaseColor.blue}}
              title="Continue"
              onpress={()=> selectedButton===1 ? navigation.navigate('EmailVerify') : navigation.navigate('PhoneVerify')}
            />
          </KeyboardAvoidingView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SelectForgot;

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

// import {
//     ImageBackground,
//     KeyboardAvoidingView,
//     SafeAreaView,
//     ScrollView,
//     StyleSheet,
//     Text,
//     View,
//   } from 'react-native';
//   import React, {useState} from 'react';

//   import {useNavigation} from '@react-navigation/native';
// import StatusBarTrans from '../../../components/StatusBar/StatusBarTrans';
// import { AppImages } from '../../../../assets/images/AppImages';
// import { AppFontSize } from '../../../../assets/Texts/Fontsize';
// import { Fonts } from '../../../../android/app/src/main/assets/fonts/Fonts';
// import TextFields from '../../../components/TextFields/TextFields';
// import Loginbtn from '../../../components/Buttons/Loginbtn';
// import { AppBaseColor } from '../../../../assets/Colors/Colors';

//   const SelectForgot = () => {
//     const navigation: any = useNavigation();
//     const [secureEntry, setSecureEntry] = useState<boolean>(true);
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View style={styles.main}>
//           <StatusBarTrans />
//           <ImageBackground
//             resizeMode="cover"
//             style={styles.backimg}
//             source={AppImages.loginbackimage}>
//             <ScrollView
//               keyboardShouldPersistTaps="handled"
//               contentContainerStyle={{flexGrow: 1}}>
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   flex: 1,
//                 }}>
//                 <KeyboardAvoidingView style={styles.loginView}>
//                   <Text
//                     style={{
//                       fontSize: AppFontSize.header,
//                       padding: 10,
//                       marginLeft: 10,
//                       color: '#336749',
//                       fontFamily: Fonts.outfitBold,
//                       marginBottom: -10,
//                     }}>
//                     {"Let's\t"}
//                     <Text style={{color: '#007A8C'}}>
//                       {'Travel\t'}
//                       <Text style={{color: '#336749'}}>
//                         {'You\t'}
//                         <Text style={{color: '#007A8C'}}>{'In.'}</Text>
//                       </Text>
//                     </Text>
//                   </Text>
//                   <Text style={styles.desc}>
//                     Discover the world with Every Sign In.{' '}
//                   </Text>
//                   <TextFields
//                     mainStyle={{marginBottom: 10}}
//                     Placeholder="Email"
//                   />
//                   <TextFields
//                     secureTextEntry={secureEntry}
//                     onhide={() => {
//                       setSecureEntry(!secureEntry);
//                     }}
//                     ispassword
//                     Placeholder="Password"
//                   />
//                   <View
//                     style={{
//                       justifyContent: 'flex-end',
//                       alignItems: 'flex-end',
//                       paddingRight: 20,
//                       marginTop: 10,
//                       marginBottom: 20,
//                     }}>
//                     <Text
//                       onPress={() => navigation.navigate('SelectForgot')}
//                       style={styles.txt}>
//                       Forgot Password?
//                     </Text>
//                   </View>
//                   <Loginbtn
//                     txtStyle={{color: AppBaseColor.white}}
//                     btnStyle={{backgroundColor: AppBaseColor.blue}}
//                     title="Sign in"
//                     mainStyle={{marginTop: 20}}
//                   />
//                   <View
//                     style={{
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       marginTop: 20,
//                     }}>
//                     <Text
//                       style={{
//                         fontSize: AppFontSize.smalltxt,
//                         fontFamily: Fonts.outfitRegular,
//                       }}>
//                       {"Doesn't Have an Account?\t"}
//                       <Text
//                         onPress={() => navigation.navigate('Signup')}
//                         style={{color: AppBaseColor.blue}}>
//                         {'Signup'}
//                       </Text>
//                     </Text>
//                   </View>
//                 </KeyboardAvoidingView>
//               </View>
//             </ScrollView>
//           </ImageBackground>
//         </View>
//       </SafeAreaView>
//     );
//   };

//   export default SelectForgot;

//   const styles = StyleSheet.create({
//     main: {
//       flex: 1,
//     },
//     backimg: {
//       width: '100%',
//       height: '100%',
//     },
//     loginView: {
//       backgroundColor: '#F6F6F6',
//       width: '90%',
//       borderRadius: 20,
//       elevation: 7,
//       flex: 0.1,
//     },
//     desc: {
//       fontSize: AppFontSize.largetext,
//       padding: 20,
//       paddingTop: 0,
//       fontFamily: Fonts.outfitSemiBold,
//       color: '#336749',
//     },
//     txt: {
//       fontSize: AppFontSize.smalltxt,
//       color: AppBaseColor.lightgreen,
//       fontFamily: Fonts.outfitRegular,
//     },
//   });
