import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginLanding from '../AuthScreens/LoginLanding';
import LoginScreen from '../AuthScreens/LoginScreen';
import OnBoarding from '../OnBoarding/OnBoarding';
import SignupScreen from '../AuthScreens/SignupScreen';
import SelectForgot from '../AuthScreens/ForgotPassword/01_SelectForgot';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import EmailVerify from '../AuthScreens/ForgotPassword/02_EmailVerify';
import PhoneVerify from '../AuthScreens/ForgotPassword/02_PhoneVerify';
import EmailCode from '../AuthScreens/ForgotPassword/03_EmailCode';
import PhoneCode from '../AuthScreens/ForgotPassword/03_PhoneCode';
import Resetpassword from '../AuthScreens/ForgotPassword/04_Resetpassword';
import SuccessPassword from '../AuthScreens/ForgotPassword/05_SuccessPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const hasCompletedOnBoarding = await AsyncStorage.getItem('onBoardingCompleted');
      if (hasCompletedOnBoarding === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    };
    checkOnboarding();
  }, []);

  const completeOnboarding = async () => {
    await AsyncStorage.setItem('onBoardingCompleted', 'true');
    setIsFirstLaunch(false);
  };

  if (isFirstLaunch === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={AppBaseColor.blue} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isFirstLaunch && (
        <Stack.Screen name="OnBoarding">
          {props => <OnBoarding {...props} onComplete={completeOnboarding} />}
        </Stack.Screen>
      )}
      <Stack.Screen name="LoginLanding" component={LoginLanding} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="SelectForgot" component={SelectForgot} />
      <Stack.Screen name="EmailVerify" component={EmailVerify} />
      <Stack.Screen name="PhoneVerify" component={PhoneVerify} />
      <Stack.Screen name="EmailCode" component={EmailCode} />
      <Stack.Screen name="PhoneCode" component={PhoneCode} />
      <Stack.Screen name="ResetPassword" component={Resetpassword} />
      <Stack.Screen name="SuccessPassword" component={SuccessPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
