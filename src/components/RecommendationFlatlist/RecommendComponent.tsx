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
import {AppImages} from '../../../assets/images/AppImages';
import LottieView from 'lottie-react-native';
interface RecommendComponent {
  source?: any;
  title?: string;
  weather?: string;
  desc?: string;
  onPress?: () => void;
  location?: string;
  rating?: string
}
const RecommendComponent = ({
  source,
  title,
  weather,
  location,
  onPress,
  rating
}: RecommendComponent) => {
  const {width} = useWindowDimensions();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View
      style={[
        styles.main,
        {
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
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={[styles.title, {color: ThemeMode.wnb}]}>{title}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Image style={styles.star} source={AppImages.star} />
              <Text style={[styles.txt, {color: ThemeMode.wnb}]}>{rating}</Text>
            </View>
          </View>
          <View style={styles.container}>
            {/* <Image
              resizeMode="cover"
              tintColor={AppBaseColor.lightgreen}
              style={styles.locimg}
              source={AppImages.Location}
            /> */}
            <LottieView
              source={require('../../components/LotteFile/lottieJson/location.json')}
              autoPlay
              loop
              style={styles.locimg}
            />
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[styles.location, {color: ThemeMode.wnb}]}>
              {location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendComponent;

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    marginHorizontal: 6,
    elevation: 7,
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  img: {
    width: 318,
    height: 160,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  location: {
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitSemiBold,
    marginLeft: 10,
  },
  title: {
    fontSize: AppFontSize.extramedium,
    fontFamily: Fonts.outfitBold,
    paddingLeft: 10,
  },
  btn: {
    width: 318,
    height: 230,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 8,
  },
  locimg: {
    width: 30,
    height: 30,
    marginRight: -8,
    marginLeft: -4,
  },
  star: {
    width: 15,
    height: 15,
  },
  txt: {
    fontFamily: Fonts.outfitRegular,
    fontSize: AppFontSize.mediumtxt,
    marginLeft: 3,
  },
});
