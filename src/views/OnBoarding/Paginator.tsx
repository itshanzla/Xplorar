import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
interface Paginator {
  data?: {id: number}[];
  scrollX?: any;
}
const Paginator = ({data = [], scrollX}: Paginator) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {data.map((item: any, index: any) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange:[10,20,10],
          extrapolate:'clamp'
        })
        const Opacity = scrollX.interpolate({
          inputRange,
          outputRange:[0.3,1,0.3],
          extrapolate:'clamp'
        })
        return <Animated.View style={[styles.dot, {width: dotWidth,opacity:Opacity}]} key={index.toString()} />;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: AppBaseColor.lightgreen,
    marginHorizontal: 8,
    marginTop:20
  },
});
