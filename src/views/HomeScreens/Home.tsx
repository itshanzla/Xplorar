import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import HomeHeader from '../../components/Headers/HomeHeader';
import {AppImages} from '../../../assets/images/AppImages';
import SnapCorousel from '../../components/Corousel/SnapCorousel';
import Corousel from '../../components/Corousel/Corousel';
import ContentHeader from '../../components/Headers/ContentHeader';
import ContentFlatlist from '../../components/ContentFlatlist/ContentFlatlist';
import RecommendFlat from '../../components/RecommendationFlatlist/RecommendFlat';
import {useSelector} from 'react-redux';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import RecommendComponent from '../../components/RecommendationFlatlist/RecommendComponent';
import RecommendHeader from '../../components/Headers/RecommendHeader';

const Home = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View
      style={{
        backgroundColor: ThemeMode.primarybackground,
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={ThemeMode.primarycolor}
      />
      <View
        style={[styles.headerView, {backgroundColor: ThemeMode.primarycolor}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'center',
          }}>
          <Text style={[styles.headertxt, {color: ThemeMode.white}]}>
            Holiday Destination on your mind ?
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.headerbtn}>
            <Image
              tintColor={AppBaseColor.ivory}
              resizeMode="contain"
              style={styles.headerimg}
              source={AppImages.Profile}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.7}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}>
          <ContentHeader title="Highlights" subtitle="View all" />
          <ContentFlatlist />
          <RecommendHeader
            title="Popular Recommendations"
            subtitle="Activities Handpicked by our Curators"
          />
          <RecommendFlat />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerView: {
    flex: 0.25,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  headerimg: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  headertxt: {
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.extralarge,
    padding: 10,
  },
  headerbtn: {
    width: 42,
    height: 42,
    borderRadius: 22,
    marginLeft: 5,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
