// import React, {useEffect} from 'react';
// import {Text, StyleSheet, Dimensions, View, Image} from 'react-native';
// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import { AppImages } from '../../../assets/images/AppImages';
// import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';


// const {width} = Dimensions.get('window');
// interface NotifyToast {
//     message?: string,
//     visible?: boolean,
//     type?:any,
//     duration?: number
// }
// const NotifyToast = ({message, visible, duration = 3000, type}:NotifyToast) => {
//   const translateY = useSharedValue(0);

//   useEffect(() => {
//     if (visible) {
//       translateY.value = withTiming(-100, {
//         duration: 200,
//         easing: Easing.out(Easing.ease),
//       });
//       setTimeout(() => {
//         translateY.value = withTiming(100, {
//           duration: 300,
//           easing: Easing.in(Easing.ease),
//         });
//       }, 3000);
//     }
//   }, [visible]);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateY: translateY.value}],
//     };
//   });

//   return (
//     <Animated.View style={[styles.toastContainer, animatedStyle]}>
//       <View
//         style={[
//           styles.sideBar,
//           {
//             backgroundColor:
//               type == 'SUCCESS'
//                 ? '#bcf7cc'
//                 : type == 'ERROR'
//                 ? '#f7bcbc'
//                 : type == 'WARNING'
//                 ? '#f7d6bc'
//                 : '#bcc9f7',
//           },
//         ]}></View>
//       <View
//         style={[
//           styles.circle,
//           {
//             backgroundColor:
//               type == 'SUCCESS'
//                 ? '#bcf7cc'
//                 : type == 'ERROR'
//                 ? '#f7bcbc'
//                 : type == 'WARNING'
//                 ? '#f7d6bc'
//                 : '#bcc9f7',
//           },
//         ]}>
//         <Image
//           source={
//             type == 'SUCCESS'
//               ? AppImages.success
//               : type == 'ERROR'
//               ? AppImages.error
//               : type == 'WARNING'
//               ? AppImages.warning
//               : AppImages.info
//           }
//           style={styles.toastIcon}
//         />
//       </View>
      
//       <Text  style={styles.toastText}>{message}</Text>
  
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   toastContainer: {
//     position: 'absolute',
//     bottom: -80,
//     width: width - 20,
//     height: 70,
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     elevation: 5,
//     shadowColor: '#000000',
//     shadowOpacity: 5,
//     // shadowRadius: {x: 2, y: 2},
//     zIndex: 1000,
//     flexDirection: 'row',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   toastText: {
//     color: '#000',
//     textAlign: 'justify',
//     marginLeft: 10,
//     fontWeight:'100',
//     fontSize: 12,
//     fontFamily:Fonts.outfitBlack,
//     paddingHorizontal:5
//   },
//   sideBar: {
//     width: 5,
//     height: '100%',
//     backgroundColor: 'red',
//     borderRadius: 10,
//   },
//   circle: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     marginLeft: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   toastIcon: {
//     width: 16,
//     height: 16,
//   },
// });

// export default NotifyToast;