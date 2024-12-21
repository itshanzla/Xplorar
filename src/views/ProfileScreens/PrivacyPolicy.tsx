import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import StatusBarNormal from '../../components/StatusBar/StatusBarNormal';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import CommonHeader from '../../components/Headers/CommonHeader';
import {useTranslation} from 'react-i18next';

const PrivacyPolicy = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const {t} = useTranslation();
  return (
    <View
      style={[
        styles?.main,
        {
          backgroundColor:
            ThemeMode?.mode === 'light'
              ? AppBaseColor.pearlwhite
              : AppBaseColor.darkprimary,
        },
      ]}>
      <StatusBarNormal />
      <CommonHeader title={t('Privacy & Policy')} />
      <View style={{padding: '4%'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10, marginBottom: 60}}>
          <Text style={styles.heading}>{t('typeofdata')}</Text>
          <Text style={styles.para1}>{t('PrivacyPara1')}</Text>
          <Text style={[styles.heading, {marginTop: -40}]}>
            {t('useofdata')}
          </Text>
          <Text style={styles.para1}>{t('PrivacyPara2')}</Text>
          <Text style={[styles.heading, {marginTop: -40}]}>
            {t('discloseofdata')}
          </Text>
          <Text style={styles.para1}>{t('PrivacyPara3')}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: AppFontSize.extralarge,
    fontFamily: Fonts.outfitBold,
    textAlign: 'justify',
  },
  para1: {
    color: 'white',
    fontSize: AppFontSize.extramedium,
    fontFamily: Fonts.outfitRegular,
    textAlign: 'justify',
    padding: 20,
    marginTop: -10,
    marginBottom: 20,
  },
});
