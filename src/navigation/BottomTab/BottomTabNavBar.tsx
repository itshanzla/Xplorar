import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../views/HomeScreens/Home';
import Search from '../../views/HomeScreens/Search';
import Profile from '../../views/HomeScreens/Profile';
import Permotions from '../../views/HomeScreens/Permotions';
import CustomPlan from '../../views/HomeScreens/CustomPlan';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppImages} from '../../../assets/images/AppImages';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import AILotteIcon from '../../components/LotteFile/AILotteIcon';
import { useSelector } from 'react-redux';

const BottomTabNavBar = () => {
  const Tab = createBottomTabNavigator();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const CustomTabBarBtn = ({children, onPress}:any) => (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      activeOpacity={1}
      onPress={onPress}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 35,
          backgroundColor: AppBaseColor.white,
          elevation: 4,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 6,
          backgroundColor: ThemeMode.primarybackground,
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.HomeMain}>
              <Image
                source={AppImages.HomeFill}
                resizeMode="contain"
                style={{width: focused ? 25 : 20, height: focused ? 25 : 20}}
                tintColor={focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white}
              />
              <Text
                style={{
                  fontSize: focused
                    ? AppFontSize.smalltxt
                    : AppFontSize.extrasmalltxt,
                  fontFamily: Fonts.outfitRegular,
                  color: focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.HomeMain}>
              <Image
                source={AppImages.Search}
                resizeMode="contain"
                style={{width: focused ? 25 : 20, height: focused ? 25 : 20}}
                tintColor={focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white}
              />
              <Text
                style={{
                  fontSize: focused
                    ? AppFontSize.smalltxt
                    : AppFontSize.extrasmalltxt,
                  fontFamily: Fonts.outfitRegular,
                  color: focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white,
                }}>
                Search
              </Text>
            </View>
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.HomeMain}>
              <AILotteIcon />
            </View>
          ),
          tabBarButton: props => <CustomTabBarBtn {...props} />,
        }}
        name="CustomPlan"
        component={CustomPlan}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.HomeMain}>
              <Image
                source={AppImages.Menu}
                resizeMode="contain"
                style={{width: focused ? 25 : 20, height: focused ? 25 : 20}}
                tintColor={focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white}
              />
              <Text
                style={{
                  fontSize: focused
                    ? AppFontSize.smalltxt
                    : AppFontSize.extrasmalltxt,
                  fontFamily: Fonts.outfitRegular,
                  color: focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white,
                }}>
                Menu
              </Text>
            </View>
          ),
        }}
        name="Permotions"
        component={Permotions}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.HomeMain}>
              <Image
                source={AppImages.Profile}
                resizeMode="contain"
                style={{width: focused ? 25 : 20, height: focused ? 25 : 20}}
                tintColor={focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white}
              />
              <Text
                style={{
                  fontSize: focused
                    ? AppFontSize.smalltxt
                    : AppFontSize.extrasmalltxt,
                  fontFamily: Fonts.outfitRegular,
                  color: focused ? ThemeMode.primarycolor : ThemeMode.mode ==='light' ? AppBaseColor.gray : AppBaseColor.white,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavBar;

const styles = StyleSheet.create({
  Homeimg: {
    width: 25,
    height: 25,
  },
  HomeMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
