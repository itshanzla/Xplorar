import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppImages} from '../../../assets/images/AppImages';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
interface SnapCorousel {
  onPress?: () => void;
  image?: any;
  desc?: string;
  btn?: string;
}
const SnapCorousel = ({onPress, image, desc, btn}: SnapCorousel) => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
      <TouchableOpacity activeOpacity={1} style={styles.corouselbtn}>
        <Image style={styles.img} source={image} />
        <Text style={styles.desc}>{desc}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={styles.txtbtn}>
          <Text style={styles.txt}>{btn}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default SnapCorousel;

const styles = StyleSheet.create({
  corouselbtn: {
    backgroundColor: AppBaseColor.black,
    width: '90%',
    height: 200,
    elevation: 7,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    opacity: 0.8,
  },
  txtbtn: {
    position: 'absolute',
    bottom: 40,
    width: 100,
    height: 40,
    backgroundColor: AppBaseColor.white,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  txt: {
    color: AppBaseColor.black,
    fontSize: AppFontSize.largetext,
    fontFamily: Fonts.outfitBold,
  },
  desc: {
    position: 'absolute',
    bottom: 100,
    color: AppBaseColor.white,
    marginLeft: 30,
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.extramedium,
  },
});
