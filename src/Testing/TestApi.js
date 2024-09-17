import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

const FlightSearch = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState('1');

  const fetchFlights = async () => {
    try {
      // Build the API URL dynamically based on user input
      const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${source}&destinationAirportCode=${destination}&itineraryType=ONE_WAY&sortOrder=ML_BEST_VALUE&numAdults=${adults}&numSeniors=0&classOfService=ECONOMY&pageNumber=1&nearby=yes&nonstop=yes&currencyCode=USD&region=USA`;

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f', // Replace with your RapidAPI key
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
        },
      };

      // Fetch API data
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        // Handle the API response
        console.log('Flight Data:', data);
        Alert.alert('Flight data fetched successfully!');
      } else {
        console.error('Error fetching flight data:', data);
        Alert.alert('Error:', data.message || 'Failed to fetch flight data');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error:', 'Something went wrong!');
    }
  };

  return (
    <View style={{padding: 20}} >
      <Text>Source Airport Code:</Text>
      <TextInput
        value={source}
        onChangeText={setSource}
        placeholder="e.g., BOM"
        style={{borderWidth: 1, marginBottom: 10}}
      />
      <Text>Destination Airport Code:</Text>
      <TextInput
        value={destination}
        onChangeText={setDestination}
        placeholder="e.g., DEL"
        style={{borderWidth: 1, marginBottom: 10}}
      />
      <Text>Travel Date (YYYY-MM-DD):</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="e.g., 2024-09-15"
        style={{borderWidth: 1, marginBottom: 10}}
      />
      <Text>Number of Adults:</Text>
      <TextInput
        value={adults}
        onChangeText={setAdults}
        placeholder="e.g., 1"
        keyboardType="numeric"
        style={{borderWidth: 1, marginBottom: 10}}
      />

      <Button title="Search Flights" onPress={fetchFlights} />
    </View>
  );
};

export default FlightSearch;

// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import { Fonts } from '../../android/app/src/main/assets/fonts/Fonts';

// const TestApi = () => {
//     const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights/';

//   const API = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
//       'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
//     },
//   };
//   const TestApi = async () => {
//     try{
//         const response = await fetch(url,API);
//         const Result = await response.json();
//         console.log('Result of API is =>',Result)
//     }catch(err){
//         console.error(err)
//     }
//   };
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <TouchableOpacity onPress={()=>{
//         TestApi()
//       }} style={{height:55,width:'90%',backgroundColor:'black',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
//         <Text style={{fontSize:16,fontFamily:Fonts.outfitRegular,color:'white'}}>{"Press me to get API Reponse"}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default TestApi;

// const styles = StyleSheet.create({});

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
// 		'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// const url = 
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
// 		'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }