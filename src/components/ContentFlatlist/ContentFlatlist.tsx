import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {contentData} from './ContentData';
import ContentComponent from './ContentComponent';
import { useTranslation } from 'react-i18next';

const ContentFlatlist = () => {
  const {t} = useTranslation()
  const renderItem = ({item}: any) => {
    return (
      <ContentComponent
        source={item?.image}
        title={t(item?.title)}
        weather={item?.weather}
        desc={t(item?.desc)}
      />
    );
  };
  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingHorizontal: '1%', marginTop: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={contentData}
        renderItem={renderItem}
        keyExtractor={(item: any) => item?.id}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={8}
      />
    </View>
  );
};

export default ContentFlatlist;

const styles = StyleSheet.create({});
