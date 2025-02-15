import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {PopularData} from './PopularData';
import PopularComp from './PopularComp';
import { useTranslation } from 'react-i18next';
import GetLocation from 'react-native-get-location'

const PopularFlat = () => {
  const [destination,setDestination] =useState<any>('')
  const {t} = useTranslation()
  const RenderItem = ({item}: any) => {
    return <PopularComp showimage source={item?.image} text={t(item?.title)} />;
  };
  
  return (
    <View>
      <FlatList
        data={PopularData}
        renderItem={RenderItem}
        style={{paddingHorizontal: '3%'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item?.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={16}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

export default PopularFlat;

const styles = StyleSheet.create({});
// const handleHotels = async () => {
  //   const url =
  //     'https://hotels-com-provider.p.rapidapi.com/v3/hotels/offers?children_ages=4%2C0&domain=AR&adults_number=1&hotel_id=1105156&locale=es_AR&checkin_date=2025-05-26&checkout_date=2025-05-27';
  //   try {
  //     const data = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key':
  //           '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
  //         'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
  //         'content-type':"application/json; charset=utf-8"
  //       },
  //     });
  //     const convertedData = await data.text();
  //     const ParsedData = JSON.parse(convertedData);
  //     // setDestination(convertedData)
  //     console.log('data from Api is =>', ParsedData.data.rooms.map((room:any)=>({
  //      id : room.propertyUnit.id
  //     })));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  

  // const ParameterizedAPI = (id : string, sortBy = "trending", page : any = 1, currencyCode = "INR", languageCode = "en-us")  =>{
  //   const baseurl =
  //     'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=new&languagecode=en-us';
  //     const params  = new URLSearchParams({
  //       id : encodeURIComponent(id),
  //       sortBy,
  //       page,
  //       currencyCode : currencyCode,
  //       languageCode : languageCode
  //     })

  //     return `${baseurl}?${params.toString()}`

  // }
  // const handleAttractionLocations = async () => {
  //   const url =
  //     'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=new&languagecode=en-us';
  //   try {
  //     const data = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key':
  //           '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
  //         'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
  //         'content-type':"application/json; charset=utf-8"
  //       },
  //     });
  //     const convertedData = await data.arrayBuffer();
  //     setDestination(convertedData)
  //     console.log('data from Api is =>', destination);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const UserLocation = async ()=>{
  //   await GetLocation.getCurrentPosition({
  //     enableHighAccuracy:true,
  //     timeout:60000
  //   }).then((location:any)=>console.log("User Location is=>",location)).catch((err)=>{
  //     const {code,message} = err;
  //     console.warn(code,message)
  //   })
  // }
  // useEffect(()=>{
  //   handleHotels();
  // },[])