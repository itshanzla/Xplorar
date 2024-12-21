import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useSelector} from 'react-redux';
interface content {
  title?: string;
  subtitle?: string;
  onPress?: () => void;
}
const ContentHeader = ({title, subtitle, onPress}: content) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View style={styles.main}>
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
        onPress={onPress}
        style={[
          styles.txt2,
          {
            color:
              ThemeMode.mode === 'light'
                ? AppBaseColor.gray
                : AppBaseColor.white,
          },
        ]}>
        {subtitle}
      </Text>
    </View>
  );
};

export default ContentHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    marginTop: 10,
    alignItems: 'center',
  },
  txt1: {
    fontSize: AppFontSize.extralarge,
    fontFamily: Fonts.outfitBold,
    color: AppBaseColor.blue,
  },
  txt2: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.lightgreen,
  },
});
