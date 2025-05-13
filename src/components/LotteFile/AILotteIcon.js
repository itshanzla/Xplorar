import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const AILotteIcon = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./lottieJson/LottieAI.json')}
        autoPlay
        loop
        style={styles.lotteicon}
      />
    </View>
  );
};

export default AILotteIcon;

const styles = StyleSheet.create({
  lotteicon: {
    width: 90,
    height: 90,
    // borderRadius:40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
