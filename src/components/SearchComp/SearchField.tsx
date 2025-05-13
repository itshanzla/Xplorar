import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppImages} from '../../../assets/images/AppImages';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import { useSelector } from 'react-redux';
interface SearchField {
  placeholder?: string;
  search?: boolean;
}
const SearchField = ({placeholder, search}: SearchField) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View style={styles.main}>
      <View style={[styles.container,{backgroundColor:ThemeMode.mode === 'light' ? AppBaseColor.ivory : AppBaseColor.darkSecondry}]}>
        {search && <Image source={AppImages.Search} style={styles.img} />}
        <TextInput
          placeholderTextColor={AppBaseColor.black}
          style={styles.input}
          placeholder={placeholder}
        />
        {/* <FlatList renderItem={renderItem} data={} /> */}
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 55,
    fontFamily: Fonts.outfitRegular,
  },
  img: {
    width: 20,
    height: 20,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: AppBaseColor.pearlwhite,
    elevation: 7,
  },
});
