import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const CustomPlan = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const navigation : any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          ThemeMode.mode === 'light'
            ? AppBaseColor.pearlwhite
            : AppBaseColor.darkprimary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        style={{width: 400, height: 400, position: 'absolute', top: 20}}
        autoPlay
        loop
        source={require('../../components/LotteFile/lottieJson/ChatBot.json')}
      />
      <View style={{position: 'absolute'}}>
        <Text
          style={{
            fontSize: AppFontSize.header,
            fontFamily: Fonts.outfitBold,
            color:
              ThemeMode.mode === 'light'
                ? AppBaseColor.black
                : AppBaseColor.white,
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: AppFontSize.header,
            fontFamily: Fonts.outfitBold,
            color:
              ThemeMode.mode === 'light'
                ? AppBaseColor.black
                : AppBaseColor.white,
          }}>
          to Xplorar AI
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 8,
          }} activeOpacity={0.8}
          onPress={()=>navigation.navigate('AIDestination')}
          >
          <Text
            style={{
              fontFamily: Fonts.outfitBold,
              fontSize: AppFontSize.largetext,
              color: AppBaseColor.white,
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomPlan;

const styles = StyleSheet.create({});
