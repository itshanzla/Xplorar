import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
interface content {
  title?: string;
  subtitle?: string;
  onPress?: () => void;
}
const RecommendHeader = ({title, subtitle, onPress}: content) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const {t} = useTranslation()
  return (
    <View style={styles.main}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.txt1,
            {
              color:
                ThemeMode.mode === 'light'
                  ? AppBaseColor.blue
                  : AppBaseColor.white,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={{
            marginRight: '4%',
            fontFamily: Fonts.outfitRegular,
            color:
              ThemeMode.mode === 'light'
                ? AppBaseColor.gray
                : AppBaseColor.darkSecondry,
          }}>
          {t('viewall')}
        </Text>
      </View>
      <Text
        onPress={onPress}
        style={[
          styles.txt2,
          {
            color:
              ThemeMode.mode === 'light'
                ? AppBaseColor.gray
                : AppBaseColor.darkSecondry,
          },
        ]}>
        {subtitle}
      </Text>
    </View>
  );
};

export default RecommendHeader;

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    paddingLeft: '4%',
  },
  txt1: {
    fontSize: AppFontSize.extralarge,
    fontFamily: Fonts.outfitBold,
    color: AppBaseColor.blue,
  },
  txt2: {
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.gray,
  },
});
