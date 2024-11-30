import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useSelector} from 'react-redux';
interface OnBoardData {
  id?: number;
  title?: string;
  desc?: string;
  image?: any;
}
const OnboardView = ({image, title, desc}: OnBoardData) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const [loaded, setloaded] = useState<boolean>(false);
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        width: width,
        paddingBottom: 20,
      }}>
      <Image
        onLoad={() => setloaded(true)}
        resizeMode="contain"
        source={image}
        style={[styles.img, {width: width, opacity: loaded ? 1 : 0.5}]}
      />
      <Text
        style={[styles.title, {width: width, color: ThemeMode.primarytext}]}>
        {title}
      </Text>
      <Text
        style={[styles.desc, {width: width, color: ThemeMode.secondrytext}]}>
        {desc}
      </Text>
    </View>
  );
};

export default OnboardView;

const styles = StyleSheet.create({
  img: {
    height: 400,
    elevation: 7,
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: Fonts.outfitSemiBold,
    color: AppBaseColor.blue,
  },
  desc: {
    textAlign: 'center',
    color: AppBaseColor.lightgreen,
    fontWeight: 300,
    fontFamily: Fonts.outfitRegular,
    paddingHorizontal: 40,
  },
});
