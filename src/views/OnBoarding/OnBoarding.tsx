import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import OnBoardingData from './OnBoardingData';
import OnboardView from './OnboardView';
import Paginator from './Paginator';
import Fluidbutton from './Fluidbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import { useNavigation } from '@react-navigation/native';
interface OnBoarding {
  onComplete?: any;
}
const OnBoarding = ({onComplete}: OnBoarding) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const ScrollX = useRef(new Animated.Value(0)).current;
  const slideref: any = useRef(null);
  const navigation : any = useNavigation()
  const RenderItem = ({item}: any) => {
    return (
      <OnboardView image={item?.image} title={item?.title} desc={item?.desc} />
    );
  };
  const ViewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < OnBoardingData.length - 1) {
      slideref?.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      console.log('last item');
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <FlatList
        contentContainerStyle={{marginTop: '12%'}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={RenderItem}
        data={OnBoardingData}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: ScrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={ViewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={16}
        ref={slideref}
        keyExtractor={(item): any => item?.id}
      />
      <Paginator data={OnBoardingData} scrollX={ScrollX} />
      <Fluidbutton
        percentage={(currentIndex + 1) * (100 / OnBoardingData.length)}
        scrollTo={scrollTo}
        currentIndex={currentIndex}
        onPress={()=>{
          // onComplete();
          navigation.navigate('LoginLanding')
          
        }}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
