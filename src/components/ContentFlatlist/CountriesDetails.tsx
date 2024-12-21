import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {countrydetail} from './CountryDetailData';
import CountryDetailComp from './CountryDetailComp';
import {AppImages} from '../../../assets/images/AppImages';
import {useSelector} from 'react-redux';
import { multiImages } from './cityMultiImages';

const CountriesDetails = () => {
  const selectedCountry = useSelector(
    (state: any) => state.country.selectedCountry,
  );
  const filteredData = countrydetail.filter(
    (item: any) => item.id === selectedCountry.id,
  );
  useEffect(() => {
    console.info(multiImages);
  }, []);

  const RenderItem = ({item}: any) => {
    console.log(item.multiImages)
    return (
      <CountryDetailComp
        source={item?.image}
        country={item?.country}
        city={item?.city}
        rating={item?.rating}
        desc={item?.desc}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: AppBaseColor.pearlwhite}}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        data={filteredData}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default CountriesDetails;

const styles = StyleSheet.create({});
