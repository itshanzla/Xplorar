import {
  Animated,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import PopularFlat from '../../components/PopularFlatlist/PopularFlat';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();
  const textArray = [
    t('holidaydestinationonyourmind'),
    t('explorenewadventureswithus'),
    t('bookwithusandgetamazingdeals'),
    t('planyourjourneywithus'),
  ];
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const navigation: any = useNavigation();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 1;
  const deletingSpeed = 1;
  const delayBetweenLoops = 10;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[currentIndex];

      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, prev.length - 1));
      } else {
        setDisplayText(prev => currentText.slice(0, prev.length + 1));
      }
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), delayBetweenLoops);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % textArray.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, textArray]);

  return (
    <View
      style={{
        backgroundColor: ThemeMode.primarybackground,
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={ThemeMode.secondrybg}
      />
      <View style={{}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.headerView,
              {backgroundColor: ThemeMode.secondrybg},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                padding: 60,
              }}>
              <Text style={[styles.headertxt, {color: ThemeMode.white}]}>
                {displayText}
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
          <ContentHeader
            onPress={() => navigation.navigate('ContentCountries')}
            title={t('highlights')}
            subtitle={t('viewall')}
          />
          <ContentFlatlist />
          <RecommendHeader
            title={t('dontmissout')}
            subtitle={t('activitieshandpicked')}
          />
          <RecommendFlat />
          <ContentHeader
            onPress={() => navigation.navigate('PopularScreen')}
            title={t('populardestinations')}
            subtitle={t('viewall')}
          />
          <PopularFlat />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerView: {
    // flex: 0.3,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingTop: 20,
  },
  headerimg: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  headertxt: {
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.extralarge,
    position: 'absolute',
    left: 20,
    top: 20,
    width: 260,
  },
  headerbtn: {
    width: 42,
    height: 42,
    borderRadius: 22,
    marginLeft: 5,
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    right: 20,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
