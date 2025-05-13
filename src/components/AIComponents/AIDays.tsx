import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import AIDaysBtn from '../Buttons/AIDaysBtn';
import {BtnData} from './AIData/AIBtnData';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import NextBtn from '../Buttons/NextBtn';
import {useNavigation} from '@react-navigation/native';
import CustomDaysModal from '../Modals/CustomDaysModal';
import {setDays} from '../../views/Redux/AISlice';

const AIDays = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [DaysValue, setDaysValue] = useState<number | null>(null);
  const [ModalVisible, setModalVisible] = useState<boolean>(false);
  const [CustomValue, setCustomValue] = useState<number>(0);
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const CustomDays = useSelector((state: any) => state.AI.days);
  const ReduxState = useSelector((state:any)=>state.AI.days)

  const RenderItem = ({item}: any) => {
    return (
      <AIDaysBtn
        onPress={() => {
          setSelectedBox(item.id);
          dispatch(setDays(item?.days))
        }}
        txt={item.days}
        isSelected={selectedBox === item.id}
      />
    );
  };
  
console.log('Days in Redux are:',ReduxState)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          ThemeMode.mode === 'light'
            ? AppBaseColor.pearlwhite
            : AppBaseColor.darkprimary,
      }}>
      <CustomDaysModal
        placeholder={'0'}
        value={CustomValue}
        onChangeText={(value: any) => setCustomValue(value)}
        visible={ModalVisible}
        onclose={() => setModalVisible(false)}
        onPress={() => {
          dispatch(setDays(CustomValue));
          setModalVisible(false);
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: Fonts.outfitBold,
            fontSize: AppFontSize.header,
            color: AppBaseColor.white,
            marginBottom: 40,
            marginTop: 40,
          }}>
          Your Trip is of How many days??
        </Text>
        {CustomDays == 0 ? (
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            numColumns={2}
            data={BtnData}
            renderItem={RenderItem}
            keyExtractor={(item: any) => item.id.toString()}
          />
        ) : (
          CustomDays != 0 && (
            <TouchableOpacity
              style={[
                {
                  backgroundColor: AppBaseColor.cardBg,
                  width: 150,
                  height: 150,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  borderWidth: 1,
                  borderColor: AppBaseColor.darkSecondry,
                },
              ]}
              onPress={() => {}}>
              <Text
                style={{
                  color: AppBaseColor.white,
                  fontSize: AppFontSize.largetext,
                  fontFamily: Fonts.outfitBold,
                }}>
                {CustomDays}
              </Text>
            </TouchableOpacity>
          )
        )}

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text
            style={{
              marginTop: 10,
              fontSize: AppFontSize.extramedium,
              fontFamily: Fonts.outfitRegular,
              color: AppBaseColor.white,
              textDecorationLine: 'underline',
            }}>
            Custom Days??
          </Text>
        </TouchableOpacity>
        <NextBtn
          text="Save & Proceed"
          onPress={() => {
            if (CustomDays === 0) {
              dispatch(setDays(DaysValue));
            } else {
              dispatch(setDays(CustomDays));
            }
            navigation.navigate('Interests');
          }}
        />
      </View>
    </View>
  );
};

export default AIDays;

const styles = StyleSheet.create({});
