import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImages} from '../../../assets/images/AppImages';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View style={[styles.main, {backgroundColor: ThemeMode.mode === 'light' ? AppBaseColor?.blue : AppBaseColor.darkprimary}]}>
      <StatusBar
        backgroundColor={ThemeMode.mode === 'light' ? AppBaseColor?.blue : AppBaseColor.darkprimary}
        barStyle={'light-content'}
      />
      <Image style={styles.logo} source={AppImages.applogo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: AppBaseColor.blue,
  },
  logo: {
    width: 217,
    height: 80,
  },
});
