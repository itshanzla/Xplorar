import {
  Animated,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {CorouselData} from './CorouselData';
interface Paginator {
  data?: {id: number}[];
  scrollX?: any;
}
const CorouselPaginator = ({data = [], scrollX}: Paginator) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.main}>
      {data.map((item: any, index: any) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 10, 10],
          extrapolate: 'clamp',
        });
        const Opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity: Opacity}]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

export default CorouselPaginator;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  dot: {
    height: 10,
    borderRadius: 6,
    backgroundColor: AppBaseColor.blue,
    marginHorizontal: 4,
  },
});
