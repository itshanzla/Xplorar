import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useSelector} from 'react-redux';
interface ContentComponent {
  source?: any;
  title?: string;
  weather?: string;
  desc?: string;
  onPress?: () => void;
}
const ContentComponent = ({
  source,
  title,
  weather,
  desc,
  onPress,
}: ContentComponent) => {
  const {width} = useWindowDimensions();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View
      style={[
        styles.main,
        {
          width: 180,
          backgroundColor:
            ThemeMode.mode === 'light'
              ? AppBaseColor.white
              : AppBaseColor.cardBg,
        },
      ]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.btn}>
        <Image resizeMode="cover" style={styles.img} source={source} />
        <View>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text style={[styles.title, {color: ThemeMode.wnb}]}>{title}</Text>
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.desc, {color: ThemeMode.wngray}]}>
            {desc}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContentComponent;

const styles = StyleSheet.create({
  main: {
    elevation: 8,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    height: 220,
  },
  img: {
    width: '100%',
    height: 146,
    borderRadius: 10,
  },
  desc: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.red,
  },
  title: {
    fontSize: AppFontSize.largetext,
    fontFamily: Fonts.outfitSemiBold,
  },
  weather: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitlight,
    color: AppBaseColor.yellow,
  },
  btn: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
