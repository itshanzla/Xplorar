
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginLanding from '../AuthScreens/LoginLanding';
import LoginScreen from '../AuthScreens/LoginScreen';
import OnBoarding from '../OnBoarding/OnBoarding';
import SignupScreen from '../AuthScreens/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import ForgotPassword from '../AuthScreens/ForgotPassword/ForgotPassword';
import ResetPassword from '../AuthScreens/ForgotPassword/ResetPassword';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const hasCompletedOnBoarding = await AsyncStorage.getItem('onBoardingCompleted');
        console.log('onBoardingCompleted value:', hasCompletedOnBoarding);
        if (hasCompletedOnBoarding != null) {
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking onboarding:', error);
      }
    };
    checkOnboarding();
  }, []);

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('onBoardingCompleted', 'true');
      setIsFirstLaunch(false);
      console.log('Onboarding completed and saved to AsyncStorage');
    } catch (error) {
      console.error('Error setting onboarding completed:', error);
    }
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
      {!isFirstLaunch && (
        <Stack.Screen name="OnBoarding">
          {props => <OnBoarding {...props} onComplete={completeOnboarding} />}
        </Stack.Screen>
      )}
      <Stack.Screen name="LoginLanding" component={LoginLanding} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
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
