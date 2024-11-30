import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Circle, G, Svg} from 'react-native-svg';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppImages} from '../../../assets/images/AppImages';
import OnBoardingData from './OnBoardingData';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
interface Fluidbutton{
  percentage?:any,
  scrollTo?:any,
  currentIndex?: any,
  onPress?:()=>void
}

const Fluidbutton = ({percentage,scrollTo,currentIndex,onPress}:Fluidbutton) => {
  const size = 128;
  const Strokewidth = 2;
  const center = size / 2;
  const radius = size / 3 - Strokewidth / 3;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation : any = useRef(new Animated.Value(0)).current;
  const progressRef: any = useRef(null);
  const navigation : any = useNavigation();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const Animation : any = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    Animation(percentage);
  }, [percentage]);

  useEffect(() => {
    const listenerId = progressAnimation.addListener((value: any) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      progressAnimation.removeListener(listenerId);
    };
  }, [percentage]);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Svg fill={ThemeMode.mode === 'light' ? '#FFFFFF' : '#140520'} width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={'#E6E7E8'}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={Strokewidth}
          />
          <Circle
          ref={progressRef}
            stroke={ThemeMode.mode === 'light' ? AppBaseColor.lightgreen : '#7D5683'}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={Strokewidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      {currentIndex < OnBoardingData.length - 1 ?
      <TouchableOpacity onPress={scrollTo} activeOpacity={0.6} style={[styles.btn,{backgroundColor: ThemeMode.primarycolor}]}>
      <Image
        tintColor={'white'}
        style={styles.img}
        source={AppImages.arrowright}
      />
    </TouchableOpacity>
    :
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={[styles.btn,{backgroundColor: ThemeMode.primarycolor}]}>
        <Image
        tintColor={'white'}
        style={styles.img}
        source={AppImages.arrowright}
      />
      </TouchableOpacity>

      }
      
    </View>
  );
};

export default Fluidbutton;

const styles = StyleSheet.create({
  img: {
    width: 36,
    height: 36,
  },
  btn: {
    position: 'absolute',
    borderRadius: 100,
    padding: 14,
    backgroundColor: AppBaseColor.blue,
  },
});
