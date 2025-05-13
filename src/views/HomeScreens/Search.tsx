import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import SearchField from '../../components/SearchComp/SearchField';
import {useSelector} from 'react-redux';

const Search = ({navigation}: any) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View
      style={{
        backgroundColor:
          ThemeMode.mode === 'light'
            ? AppBaseColor.pearlwhite
            : AppBaseColor.darkprimary,
        flex: 1,
      }}>
      <StatusBar
        barStyle={ThemeMode.mode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={
          ThemeMode.mode === 'light'
            ? AppBaseColor.pearlwhite
            : AppBaseColor.darkprimary
        }
      />
      <View style={{marginTop: 20}}>
        <SearchField search placeholder="Search" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
