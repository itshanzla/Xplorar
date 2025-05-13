import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecommendData} from './RecommendData';
import RecommendComponent from './RecommendComponent';
import { useTranslation } from 'react-i18next';

const RecommendFlat = () => {
  const {t} = useTranslation()
  const renderItem = ({item}: any) => {
    return (
      <RecommendComponent
        source={item?.image}
        title={t(item?.title)}
        location={t(item?.location)}
        rating={item?.rating}
      />
    );
  };

  return (
    <View>
      <FlatList
      style={{paddingHorizontal:'2%'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        data={RecommendData}
        keyExtractor={(item: any) => item?.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={8}
      />
    </View>
  );
};

export default RecommendFlat;

const styles = StyleSheet.create({});
