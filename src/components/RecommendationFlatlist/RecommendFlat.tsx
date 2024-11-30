import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecommendData} from './RecommendData';
import RecommendComponent from './RecommendComponent';

const RecommendFlat = () => {
  const renderItem = ({item}: any) => {
    return (
      <RecommendComponent
        source={item.image}
        title={item.title}
        weather={item.weather}
        desc={item.desc}
      />
    );
  };

  return (
    <View>
      <FlatList
      style={{marginBottom:40}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        data={RecommendData}
        keyExtractor={(item: any) => item.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={8}
      />
    </View>
  );
};

export default RecommendFlat;

const styles = StyleSheet.create({});
