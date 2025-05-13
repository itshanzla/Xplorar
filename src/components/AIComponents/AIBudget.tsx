import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import AIDaysBtn from '../Buttons/AIDaysBtn';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import NextBtn from '../Buttons/NextBtn';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {BudgetData} from './AIData/BudgetData';
import {setBudget} from '../../views/Redux/AISlice';

const AIBudget = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);
  const [ApiResponse, setApiResponse] = useState<any | null>(null);
  const dispatch = useDispatch();
  const TravelDays = useSelector((state: any) => state.AI.days);
  const TravelDestination = useSelector((state: any) => state.AI.destination);
  const TravelInterests = useSelector((state: any) => state.AI.interests);
  const TravelBudget = useSelector((state: any) => state.AI.budget);
  const TravelMode = useSelector((state: any) => state.AI.travelMode);
  const navigation: any = useNavigation();

  const RenderItem = ({item}: any) => {
    return (
      <AIDaysBtn
        onPress={() => {
          setSelectedBox(item.id);
        }}
        txt={item.name}
        isSelected={selectedBox === item.id}
      />
    );
  };

  const HandleTravelAPI = async () => {
    const url = `https://ai-trip-planner.p.rapidapi.com/detailed-plan`;
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '4f2013887amsh7816108ac2bd269p190f1fjsn90dd3443844f',
        'x-rapidapi-host': 'ai-trip-planner.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        days: TravelDays,
        destination: TravelDestination,
        interests: TravelInterests,
        budget: TravelBudget,
        travelMode: TravelMode,
      }),
    };
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      console.log('result is this=>', result);
      setApiResponse(result);
      navigation.navigate('AIResponse', {response: result});
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          ThemeMode.mode === 'light'
            ? AppBaseColor.pearlwhite
            : AppBaseColor.darkprimary,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: Fonts.outfitBold,
            fontSize: AppFontSize.header,
            color: AppBaseColor.white,
            marginBottom: 40,
            marginTop: 40,
          }}>
          What would be your desired Budget?
        </Text>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          numColumns={2}
          data={BudgetData}
          renderItem={RenderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
        <NextBtn
          text={'Generate'}
          onPress={() => {
            const selectedBudget = BudgetData.find(
              item => item.id === selectedBox,
            );
            dispatch(setBudget(selectedBudget?.name));
            HandleTravelAPI();
          }}
          loading={Loading}
        />
      </View>
    </View>
  );
};

export default AIBudget;

const styles = StyleSheet.create({});
