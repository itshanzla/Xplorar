import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import HomeHeader from '../../components/Headers/HomeHeader';
import {AppImages} from '../../../assets/images/AppImages';
import SnapCorousel from '../../components/Corousel/SnapCorousel';
import Corousel from '../../components/Corousel/Corousel';

const Home = ({navigation}: any) => {
  return (
    <View
      style={{
        backgroundColor: AppBaseColor.pearlwhite,
        flex: 1,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppBaseColor.pearlwhite}
      />
      <HomeHeader
        // RightTint={AppBaseColor.black}
        LeftTint={AppBaseColor.lightgreen}
        name="Home"
        icon1={AppImages.wishlist}
        icon={AppImages.Location}
      />
      <ScrollView>
        <Corousel />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
