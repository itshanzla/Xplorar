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
  interface RecommendComponent {
    source?: any;
    title?: string;
    weather?: string;
    desc?: string;
    onPress?: () => void;
  }
  const RecommendComponent = ({
    source,
    title,
    weather,
    desc,
    onPress,
  }: RecommendComponent) => {
    const {width} = useWindowDimensions();
    const ThemeMode = useSelector((state: any) => state.theme.mode);
    return (
      <View style={[styles.main]}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={styles.btn}>
          <Image resizeMode="cover" style={styles.img} source={source} />
          <View style={{}}>
              <Text style={[styles.title,{color:ThemeMode.primarycolor}]}>{title}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.desc}>
              {desc}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default RecommendComponent;
  
  const styles = StyleSheet.create({
    main: {
      marginTop: 10,
      marginHorizontal:16
    },
    img: {
      width: 318,
      height: 160,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
    },
    desc: {
      width: 150,
      fontSize: AppFontSize.smalltxt,
      fontFamily: Fonts.outfitRegular,
      color: AppBaseColor.red,
    },
    title: {
      fontSize: AppFontSize.mediumtxt,
      fontFamily: Fonts.outfitBold,
    },
    btn: {
      width: 318,
      height: 222,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
    },
  });
  