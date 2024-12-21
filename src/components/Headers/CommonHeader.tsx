import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppBaseColor } from '../../../assets/Colors/Colors';
import { AppImages } from '../../../assets/images/AppImages';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

interface CommonHeaderProps {
  title?: string;
  showLeft?: boolean;
  showRight?: boolean;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  rightComponent?: React.ReactNode;
}

const CommonHeader = ({
  title,
  showLeft = true,
  showRight = false,
  onRightPress,
  rightComponent,
}: CommonHeaderProps) => {
  const navigation : any = useNavigation()
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View style={[styles.container,{backgroundColor:ThemeMode.primarybackground}]}>
      <StatusBar
        backgroundColor={ThemeMode.mode === 'light' ? AppBaseColor.pearlwhite : ThemeMode.primarybackground}
        barStyle={ThemeMode.mode === 'light' ?  'dark-content' : 'light-content'}
      />
      {showLeft && (
        <TouchableOpacity activeOpacity={0.8} style={[styles.leftBtn,{backgroundColor:ThemeMode.primarycolor}]} onPress={()=>navigation.goBack()}>
          <Image
            tintColor="white"
            resizeMode="contain"
            style={styles.img}
            source={AppImages.ArrowLeftOutline}
          />
        </TouchableOpacity>
      )}
      <Text style={[styles.title,{color:ThemeMode.wnb}]}>{title}</Text>
      {showRight && (
        <TouchableOpacity activeOpacity={0.8} style={[styles.rightBtn,{backgroundColor:ThemeMode.primarycolor}]} onPress={onRightPress}>
          {rightComponent || (
            <Image style={styles.img} tintColor={'white'} source={AppImages.Search} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppBaseColor.pearlwhite,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1
  },
  title: {
    fontSize: AppFontSize.largetext,
    fontFamily: Fonts.outfitBold,
    color: 'black',
    textAlign: 'center',
  },
  img: {
    width: 24,
    height: 24,
  },
  leftBtn: {
    position: 'absolute',
    left: '4%',
    backgroundColor: AppBaseColor.blue,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBtn: {
    position: 'absolute',
    right: '4%',
    backgroundColor: AppBaseColor.blue,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultRightText: {
    color: 'white',
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitBold,
  },
});
