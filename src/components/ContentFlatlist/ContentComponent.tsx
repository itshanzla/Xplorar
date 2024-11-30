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
import { useSelector } from 'react-redux';
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
    <View style={[styles.main, {width: width / 2}]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.btn}>
        <Image resizeMode="contain" style={styles.img} source={source} />
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={[styles.title,{color:ThemeMode.wnb}]}>{title}</Text>
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.desc,{color:ThemeMode.wngray}]}>
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
    marginTop: 10,
    // marginHorizontal:18
  },
  img: {
    width: 161,
    height: 146,
   
  },
  desc: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.red,
  },
  title: {
    fontSize:AppFontSize.largetext,
    fontFamily: Fonts.outfitSemiBold,
  },
  weather: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitlight,
    color: AppBaseColor.yellow,
  },
  btn: {
    width: 161,
    height: 200,
  },
});
