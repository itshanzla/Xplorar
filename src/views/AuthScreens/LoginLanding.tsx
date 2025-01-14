import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {AppImages} from '../../../assets/images/AppImages';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import SocialLogin from '../../components/Buttons/SocialLogin';
import Loginbtn from '../../components/Buttons/Loginbtn';
import { useNavigation } from '@react-navigation/native';
import StatusBarTrans from '../../components/StatusBar/StatusBarTrans';

const LoginLanding = () => {
  const navigation : any = useNavigation()
  return (
    <View style={styles.main}>
      <StatusBarTrans />
      <Image
        resizeMode="cover"
        style={styles.img}
        source={AppImages.loginback}
      />
      <View style={styles.ChildContainer}>
        <Text style={styles.headertxt}>Xplorer</Text>
        <Text style={styles.desc}>
          Discover the world with ease and make every journey unforgettable.
          Whether you're planning your next adventure or just exploring nearby
          spots
        </Text>
        <Loginbtn onpress={()=>navigation.navigate('LoginScreen')}  mainStyle={{marginBottom: 20}} title="Login with Email" />
        <Text style={{marginTop:10,fontSize:AppFontSize.smalltxt,fontFamily:Fonts.outfitRegular,color:AppBaseColor.black,alignSelf:'center'}}>{'Doesn\'t Have an Account?\t'}<Text onPress={()=>navigation.navigate('SignupScreen')} style={{color:AppBaseColor.blue}}>Signup</Text></Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.lineView} />
          <Text
            style={{
              fontSize: AppFontSize.mediumtxt,
              padding: 3,
              fontFamily: Fonts.outfitBold,
              color: AppBaseColor.gray,
            }}>
            Or
          </Text>
          <View style={styles.lineView} />
        </View>
        <SocialLogin
          mainStyle={{marginBottom: 5}}
          source={AppImages.google}
          title="Login With Google"
        />
        <SocialLogin
          tintcolor="white"
          source={AppImages.apple}
          title="Login With Apple"
        />
      </View>
    </View>
  );
};

export default LoginLanding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 320,
  },
  ChildContainer: {
    backgroundColor: AppBaseColor.white,
    height: '100%',
    marginTop: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  headertxt: {
    fontSize: AppFontSize.header,
    textAlign: 'center',
    fontFamily: Fonts.outfitBold,
    color: AppBaseColor.black,
    paddingTop: 10,
  },
  desc: {
    fontSize: AppFontSize.mediumtxt,
    textAlign: 'center',
    fontFamily: Fonts.outfitRegular,
    padding: 20,
    marginTop: -10,
    color: AppBaseColor.gray,
  },
  lineView: {
    width: '50%',
    height: 1,
    backgroundColor: AppBaseColor.gray,
    marginVertical: 20,
  },
});
