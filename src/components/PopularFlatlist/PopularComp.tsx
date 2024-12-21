import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppImages} from '../../../assets/images/AppImages';
import { useSelector } from 'react-redux';
interface PopularComp {
  source?: any;
  text?: string;
  showimage?: boolean;
}
const PopularComp = ({source, text, showimage}: PopularComp) => {
  const [textVisible, isTextVisible] = useState<boolean>(false);
  const [heartColor,setHeartColor] =useState<boolean>(false)
  const ThemeMode = useSelector((state: any) => state.theme.mode);

  const toggleheart =()=>{
    setHeartColor(!heartColor)
  }
  return (
    <View style={{marginTop: 10}}>
      <Pressable
        onPressIn={() => isTextVisible(true)}
        onPressOut={() => isTextVisible(false)}
        style={styles.btn}>
        <ImageBackground
          resizeMode="cover"
          style={[styles.img, {opacity: textVisible ? 0.8 : 1}]}
          source={source}>
          {textVisible && <Text style={[styles.txt,{backgroundColor:ThemeMode.mode == 'light' ? "#282828" : AppBaseColor.darkprimary}]}>{text}</Text>}
          {showimage && (
            <TouchableOpacity onPress={()=>toggleheart()} style={styles.heartbtn}>
              <Image 
              tintColor={heartColor ? 'red' : 'white'}
                resizeMode="contain"
                style={styles.heart}
                source={AppImages.heart}
              />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default PopularComp;

const styles = StyleSheet.create({
  img: {
    width: 170,
    height: 137,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  btn: {
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: AppFontSize.largetext,
    fontFamily: Fonts.outfitBold,
    color: 'white',
    backgroundColor: '#282828',
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
  heart: {
    width: 20,
    height: 18,
  },
  heartbtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
    width:40,
    height:40,
    justifyContent:'flex-end',
    flexDirection:'row'
  },
});
