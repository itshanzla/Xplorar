import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';

const StatusBarNormal = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View>

    <StatusBar
      barStyle={ThemeMode.mode === 'light' ? 'dark-content' : 'light-content'}
      backgroundColor={
        ThemeMode.mode === 'light'
        ? AppBaseColor?.pearlwhite
        : AppBaseColor?.darkprimary
      }
      />
      </View>
  );
};

export default StatusBarNormal;

const styles = StyleSheet.create({});
