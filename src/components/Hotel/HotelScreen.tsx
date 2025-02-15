import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect, useMemo, useState} from 'react';
import fs from 'react-native-fs'
interface Hotel {
  data?: any;
}
const HotelScreen = () => {
  const [HotelName, setHotelName] = useState<string>('');
  const [HotelRating, setHotelRating] = useState<string>('');
  const [HotelTagline, setHotelTagline] = useState<string>('');
  const [loading, setloading] = useState<boolean>();
  const [apiData, setApiData] = useState<string[]>([]);
  const HotelData = async () => {
    const url =
      'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?amenities=WIFI%2CPARKING&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY&price_min=10&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5&guest_rating_min=8&children_ages=4%2C0%2C15&checkin_date=2025-05-26&locale=es_AR&adults_number=1&sort_order=REVIEW&page_number=1&domain=AR&price_max=500&region_id=2872&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&checkout_date=2025-05-27';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
        'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
      },
    };
    try {
      setloading(true);
      const response = await fetch(url, options);
      const result: any = await response.json();
      // fs.writeFile('reponse.json',JSON.stringify(result))
      
      //   const Data = JSON.parse(result)
      // console.log('Data from Api is:', result);
      //   setHotelName(Data.data.summary.name);
      //   setHotelTagline(Data.data.summary.tagline);
      //   setHotelRating(Data.data.summary.overview.rating);

      //   setApiData(Data);
      //   console.log('Data is=>',HotelName);
      setloading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    HotelData();
  }, []);
  const renderItem = (item: any) => {
    // console.log('data is=>',item)
    return <View></View>;
  };
  useEffect(() => {
    HotelData();
  }, []);
  return (
    <View style={{marginBottom: 100}}>
        {loading && <ActivityIndicator size={'large'} />}
      <FlatList data={apiData} renderItem={renderItem} />
    </View>
  );
};

export default HotelScreen;

const styles = StyleSheet.create({});
