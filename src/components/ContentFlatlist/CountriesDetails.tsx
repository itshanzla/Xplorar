import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {countrydetail} from './CountryDetailData';
import CountryDetailComp from './CountryDetailComp';
import {AppImages} from '../../../assets/images/AppImages';
import {useSelector} from 'react-redux';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppFontSize} from '../../../assets/Texts/Fontsize';

const CountriesDetails = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const selectedCountry = useSelector(
    (state: any) => state?.country?.selectedCountry,
  );
  const filteredData = countrydetail.filter(
    (item: any) => item?.id === selectedCountry?.id,
  );

  const RenderItem = ({item}: any) => {
    return (
      <CountryDetailComp
        source={item?.image}
        country={item?.country}
        city={item?.city}
        rating={item?.rating}
        desc={item?.desc}
        data={item?.images}
        populardata={item?.Popular}
      />
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          ThemeMode.mode === 'light'
            ? AppBaseColor?.pearlwhite
            : AppBaseColor?.darkprimary,
      }}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 80}}
        data={filteredData}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={16}
      />
      <View
        style={[
          styles.bottom,
          {
            backgroundColor:
              ThemeMode.mode === 'light'
                ? AppBaseColor.blue
                : AppBaseColor.cardBg,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          },
        ]}>
        <View style={{}}>
          <Text
            style={[
              styles.txt,
              {marginTop: 10, marginBottom: -5, color: ThemeMode?.wnb},
            ]}>
            $30
          </Text>
          <Text style={[styles.txt, {color: ThemeMode?.wnb}]}>/Person</Text>
        </View>
        <TouchableOpacity>
          <Text style={{fontFamily:Fonts.outfitBold,fontSize:AppFontSize.largetext,color:AppBaseColor.white}}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountriesDetails;

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  txt: {
    marginLeft: '5%',
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.largetext,
  },
});
