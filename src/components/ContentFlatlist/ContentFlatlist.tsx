import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {contentData} from './ContentData';
import ContentComponent from './ContentComponent';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppImages} from '../../../assets/images/AppImages';
import {useNavigation} from '@react-navigation/native';
import { countrydetail } from './CountryDetailData';
import { setSelectedCountry } from '../../views/Redux/RecommendedData';
import CountriesComp from './CountriesComp';

const ContentFlatlist = () => {
  const {t} = useTranslation();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const navigation: any = useNavigation();
  const dispatch = useDispatch()
  // const selectedCountry = useSelector(
  //     (state: any) => state?.country?.selectedCountry,
  //   );
    
  //   const filteredData = countrydetail.filter(
  //       (item: any) => item?.id === selectedCountry?.id,
  //     );

  const renderItem = ({item}: any) => {
    return (
      <ContentComponent
        source={item?.image}
        title={t(item?.title)}
        weather={item?.weather}
        desc={t(item?.desc)}
        onPress={()=>{
          dispatch(setSelectedCountry(item));
        }}
      />
    );
  };
  const ListFooter = () => {
    return (
      <View style={{zIndex: 1, elevation: 6}}>
        <TouchableOpacity
          onPress={() => {
            console.log('Hello my Child', navigation),
              navigation.navigate('ContentCountries');
          }}
          style={{
            backgroundColor: ThemeMode.secondrybg,
            borderRadius: 40,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 50, height: 50}}
            tintColor={AppBaseColor.white}
            source={AppImages.arrowrights}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        contentContainerStyle={{marginTop: 10,zIndex:1}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={contentData}
        renderItem={renderItem}
        keyExtractor={(item: any) => item?.id}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={8}
        ListFooterComponent={ListFooter}
        ListFooterComponentStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          zIndex: 1,
        }}
        refreshing
      />
    </View>
  );
};

export default ContentFlatlist;

const styles = StyleSheet.create({});
