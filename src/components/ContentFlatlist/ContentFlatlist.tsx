import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {contentData} from './ContentData';
import ContentComponent from './ContentComponent';

const ContentFlatlist = () => {
  const renderItem = ({item}: any) => {
    return (
      <ContentComponent
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
        contentContainerStyle={{paddingHorizontal: '4%',}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={contentData}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={8}
      />
    </View>
  );
};

export default ContentFlatlist;

const styles = StyleSheet.create({});
