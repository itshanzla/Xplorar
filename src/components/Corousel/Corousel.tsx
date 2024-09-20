import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CorouselData} from './CorouselData';
import SnapCorousel from './SnapCorousel';
import CorouselPaginator from './CorouselPaginator';
const Corousel = () => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideref: any = useRef(null);
  const intervalRef = useRef<any>(null);
  const ViewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const scrollTo = () => {
    if (currentIndex < CorouselData.length - 1) {
      slideref?.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      slideref?.current?.scrollToIndex({index: 0});
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      scrollTo();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  const RenderItem = ({item}: any) => {
    return (
      <View style={{width: width}}>
        <SnapCorousel image={item?.image} desc={item?.desc} btn={item?.btn} />
      </View>
    );
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={CorouselData}
        renderItem={RenderItem}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={ViewableItemsChanged}
        viewabilityConfig={viewConfig}
        // scrollEventThrottle={16}
        ref={slideref}
      />
      <CorouselPaginator data={CorouselData} scrollX={scrollX} />
    </View>
  );
};

export default Corousel;

const styles = StyleSheet.create({});
