import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonHeader from '../Headers/CommonHeader';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import {countriesData} from './CountriesData';
import CountriesComp from './CountriesComp';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCountry } from '../../views/Redux/RecommendedData';

const ContentCountries = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const RenderItem = ({item}: any) => {
    return (
      <CountriesComp
        source={item?.image}
        city={item?.city}
        country={item?.country}
        cancel={item?.canceltxt}
        price={item?.price}
        onPress={()=>{
          dispatch(setSelectedCountry(item))
          navigation.navigate('CountriesDetails')
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor:ThemeMode.primarybackground}}>
      <CommonHeader title="Countries" showRight showLeft />

      <View style={{marginBottom: 60,marginTop:10}}>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={countriesData}
          renderItem={RenderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item.id}
          keyboardShouldPersistTaps="always"
          scrollEventThrottle={16}
        />
      </View>
    </View>
  );
};

export default ContentCountries;

const styles = StyleSheet.create({});
