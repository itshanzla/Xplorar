import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppImages} from '../../../assets/images/AppImages';
import {useSelector} from 'react-redux';
interface CountriesComp {
  source?: any;
  city?: string;
  country?: string;
  cancel?: string;
  price?: string;
  onPress?: () => void;
}
const CountriesComp = ({
  source,
  city,
  country,
  cancel,
  price,
  onPress,
}: CountriesComp) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.btn,
          {
            backgroundColor:
              ThemeMode.mode === 'light'
                ? AppBaseColor.white
                : AppBaseColor.cardBg,
          },
        ]}>
        <Image style={styles.img} source={source} resizeMode="cover" />
        <View style={{zIndex: 1}}>
          <Text style={[styles.txt1, {color: ThemeMode.wnb}]}>{city}</Text>
          <Text style={[styles.txt2, {color: ThemeMode.wngray}]}>
            {country}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              resizeMode="contain"
              source={AppImages.currency}
              style={styles.currency}
            />
            <Text style={[styles.cancel, {color: ThemeMode.wnb}]}>
              {cancel}
            </Text>
            <TouchableOpacity activeOpacity={0.5} style={styles.infobtn}>
              <Image
                tintColor={ThemeMode.wnb}
                source={AppImages.cancelinfo}
                style={styles.cancelinfo}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.price, {color: ThemeMode.wnb}]}>{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CountriesComp;

const styles = StyleSheet.create({
  img: {
    width: 122,
    height: '100%',
    borderRadius: 10,
    marginRight: 10,
  },
  btn: {
    elevation: 8,
    width: '95%',
    height: 112,
    borderRadius: 10,
    flexDirection: 'row',
  },
  txt1: {
    marginTop: 10,
    fontSize: AppFontSize.largetext,
    fontFamily: Fonts.outfitBold,
    color: AppBaseColor.black,
  },
  txt2: {
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.gray,
  },
  currency: {
    width: 14,
    height: 14,
  },
  cancel: {
    marginLeft: 5,
    fontFamily: Fonts.outfitRegular,
    fontSize: AppFontSize.smalltxt,
  },
  infobtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelinfo: {
    width: 18,
    height: 18,
  },
  price: {
    marginTop: -6,
    fontFamily: Fonts.outfitRegular,
    fontSize: AppFontSize.smalltxt,
    color: AppBaseColor.lightgreen,
  },
});
