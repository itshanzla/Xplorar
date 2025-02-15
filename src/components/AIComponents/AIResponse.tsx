import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { AppBaseColor } from '../../../assets/Colors/Colors';

const AIResponse = () => {
  const [days, setDays] = useState<any[]>([]);
  const [time, setTime] = useState<any[][]>([]);
  const [activity, setActivity] = useState<any[][]>([]);
  const [location, setLocation] = useState<any[][]>([]);

  const route: any = useRoute();
  const response = route.params?.response;

  useEffect(() => {
    if (response?.plan?.itinerary) {
      setDays(response.plan.itinerary.map((item: any) => item.day));
      setTime(
        response.plan.itinerary.map((item: any) =>
          item.activities.map((act: any) => act.time),
        ),
      );
      setActivity(
        response.plan.itinerary.map((item: any) =>
          item.activities.map((act: any) => act.activity),
        ),
      );
      setLocation(
        response.plan.itinerary.map((item: any) =>
          item.activities.map((act: any) => act.location),
        ),
      );
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Your AI Plan is:
      </Text>
      <FlatList
        data={days}
        keyExtractor={(day, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.dayContainer}>
            <Text style={styles.dayTitle}>Day {item}</Text>
            {activity[index].map((act: string, actIndex: number) => (
              <View key={actIndex} style={styles.activityContainer}>
                <Text style={styles.timeText}>{time[index][actIndex]}</Text>
                <Text style={styles.activityText}>{act}</Text>
                <Text style={styles.locationText}>
                  📍 {location[index][actIndex]}
                </Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default AIResponse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  txt:{
    fontFamily:Fonts.outfitBold,
    fontSize:AppFontSize.header,
    color:AppBaseColor.darkprimary,
    marginBottom:20,
    marginTop:20
  },
  dayContainer: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  activityContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 6,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007bff',
  },
  activityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
