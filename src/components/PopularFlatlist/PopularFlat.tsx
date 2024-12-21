import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PopularData} from './PopularData';
import PopularComp from './PopularComp';
import { useTranslation } from 'react-i18next';

const PopularFlat = () => {
  const {t} = useTranslation()
  const RenderItem = ({item}: any) => {
    return <PopularComp source={item?.image} text={t(item?.title)} />;
  };
  return (
    <View style={{marginBottom: 100}}>
      <FlatList
        data={PopularData}
        renderItem={RenderItem}
        style={{paddingHorizontal: '2%'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item?.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={8}
      />
    </View>
  );
};

export default PopularFlat;

const styles = StyleSheet.create({});
