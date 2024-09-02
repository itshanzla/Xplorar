import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/views/AuthStack/AuthStack';
import SplashScreen from './src/components/Splash/SplashScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const [initializing, setInitializing] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setInitializing(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {initializing ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
