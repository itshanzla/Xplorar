import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonHeader from '../Headers/CommonHeader';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import {PopularData} from './PopularData';
import PopularComp from './PopularComp';
import { useSelector } from 'react-redux';

const PopularScreen = () => {
  const navigation = useNavigation();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const RenderItem = ({item}: any) => {
    return <PopularComp showimage text={item?.title} source={item?.image }/>;
  };
  return (
    <View style={{backgroundColor: ThemeMode.mode === 'light' ? AppBaseColor.pearlwhite : AppBaseColor.darkprimary, flex: 1}}>
      <CommonHeader
        onLeftPress={() => navigation.goBack()}
        showLeft
        showRight
        title="Destination"
      />
      <View >
        <FlatList
        style={{marginBottom:80}}
        contentContainerStyle={{flexGrow:1}}
          numColumns={2}
          data={PopularData}
          renderItem={RenderItem}
          keyExtractor={(item: any) => item.id}
          keyboardShouldPersistTaps="always"
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default PopularScreen;

const styles = StyleSheet.create({});
