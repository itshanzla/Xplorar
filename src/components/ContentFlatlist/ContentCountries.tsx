import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../Headers/CommonHeader';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import {countriesData} from './CountriesData';
import CountriesComp from './CountriesComp';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedCountry} from '../../views/Redux/RecommendedData';

const ContentCountries = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [Address, setAddress] = useState<string[]>([]);
  const [PlaceId, setPlaceId] = useState<string[]>([]);
  const [RestaurantRating, setRestaurantRating] = useState<string[]>([]);
  const [TotalUserRating, setTotalUserRating] = useState<string[]>([]);
  const [RestaurantName, setRestaurantName] = useState<string[]>([]);
  const [Photos, setPhotos] = useState<any[]>([]);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const ThemeMode = useSelector((state: any) => state.theme.mode);

  const AITripPlanner = async () => {
    if (loading) return;
    const url = 'https://ai-trip-planner.p.rapidapi.com/detailed-plan';
    const options: any = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
        'x-rapidapi-host': 'ai-trip-planner.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        days: 3,
        destination: 'New York',
        interests: ['fine dining', 'cuisine'],
        budget: 'high',
        travelMode: 'public transport',
      }),
    };
    try {
      setloading(true);
      const response = await fetch(url, options);
      const result = await response.text();
      console.log('API Plan is =>', result);
      setloading(false);
    } catch (err) {
      setloading(false);
      console.error("API Didn't reponse well", err);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    AITripPlanner();
  }, []);
  const RenderItem = ({item}: any) => {
    return (
      <CountriesComp
        source={item?.image}
        city={item?.city}
        country={item?.country}
        cancel={item?.canceltxt}
        price={item?.price}
        onPress={() => {
          dispatch(setSelectedCountry(item));
          navigation.navigate('CountriesDetails');
        }}
      />
    );
  };
  // const ImageRender =(item:any)=>{
  //   console.log("Image is=>",item)
  //   return(
  //     <View>
  //       <Image source={{uri:item.item}} />

  //     </View>
  //   )
  // }

  return (
    <View style={{flex: 1, backgroundColor: ThemeMode.primarybackground}}>
      <CommonHeader title="Countries" showRight showLeft />

      <View style={{marginBottom: 60, marginTop: 10}}>
        {loading && (
          <ActivityIndicator size={'large'} color={AppBaseColor.white} />
        )}
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={countriesData}
          renderItem={RenderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item?.id?.toString()}
          keyboardShouldPersistTaps="always"
          scrollEventThrottle={16}
        />
      </View>
    </View>
  );
};

export default ContentCountries;

const styles = StyleSheet.create({});

// const CountriesName = async () => {
//   const url =
//     'https://google-map-places.p.rapidapi.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&radius=1000&opennow=true&location=40%2C-110&language=en&region=en';
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
//       'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
//       'Content-Type': 'application/json',
//     },
//   };

//   try {
//     setloading(true);
//     const response = await fetch(url, options);
//     const result = await response.text();
//     const EndResult = await JSON.parse(result);
//     setAddress(EndResult.results.map((item: any) => item.formatted_address));
//     setRestaurantName(EndResult.results.map((item: any) => item.name));
//     setPlaceId(EndResult.results.map((item: any) => item.place_id));
//     setRestaurantRating(EndResult.results.map((item: any) => item.rating));
//     setTotalUserRating(
//       EndResult.results.map((item: any) => item.user_ratings_total),
//     );
//     // setPhotos();
//     console.log(
//       'The Result from Countires API is=>',
//       EndResult.results.map((item: any) => item.types),
//     );
//     setloading(false);
//   } catch (error) {
//     console.error(error);
//     setloading(false);
//   }
// };
// useEffect(() => {
//   CountriesName();
// }, []);
