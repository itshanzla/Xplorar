import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {useSelector} from 'react-redux';
import BackButton from '../Buttons/BackButton';
import {AppImages} from '../../../assets/images/AppImages';
interface HomeHeaderProps {
  icon1?: any;
  icon?: any;
  name?: string;
  dot?: boolean;
  style?: any;
  onPress1?: () => void;
  onPress?: () => void;
  RightTint?: any;
  txtStyle?: any;
  LeftTint?: any;
}

const HomeHeader = ({
  icon1,
  icon,
  name,
  dot,
  style,
  onPress1,
  onPress,
  RightTint,
  txtStyle,
  LeftTint,
}: HomeHeaderProps) => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View
      style={[
        styles.container,
        style,
        {backgroundColor: ThemeMode.primarybackground},
      ]}>
      {icon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={[styles.btn, {backgroundColor: ThemeMode.primarycolor}]}>
          <Image
            tintColor={ThemeMode.white}
            style={styles.img}
            source={AppImages.leftnav}
          />
        </TouchableOpacity>
      )}

      <View style={styles.textContainer}>
        <Text style={[styles.text, txtStyle, {color: ThemeMode?.wnb}]}>{name}</Text>
      </View>

      {icon1 && (
        <TouchableOpacity style={styles.iconContainerRight} onPress={onPress1}>
          <Image
            tintColor={RightTint}
            resizeMode="contain"
            style={styles.icon}
            source={icon1}
          />
          {dot && <View style={styles.dot} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    paddingHorizontal: '5%',
    position: 'relative',
  },

  iconContainerLeft: {
    position: 'absolute',
    left: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainerRight: {
    position: 'absolute',
    right: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1,
  },

  text: {
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.largetext,
    textAlign: 'center',
    color: 'black',
  },

  icon: {
    width: 24,
    height: 24,
  },

  dot: {
    backgroundColor: '#EF5A56',
    width: 8,
    height: 8,
    borderRadius: 8,
    position: 'absolute',
    left: 13,
    top: 0,
  },
  img: {
    width: 24,
    height: 24,
  },
  btn: {
    alignSelf: 'flex-start',
    borderRadius: 100,
    height: 34,
    width: 34,
    left: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 7,
    zIndex: 1,
  },
});
