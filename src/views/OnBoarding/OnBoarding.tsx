import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import OnBoardingData from './OnBoardingData';
import OnboardView from './OnboardView';
import Paginator from './Paginator';
import Fluidbutton from './Fluidbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import LangBtn from '../../components/Buttons/LangBtn';
import {AppImages} from '../../../assets/images/AppImages';
import {useTranslation} from 'react-i18next';
import SelectLangModel from '../../components/Modals/SelectLangModel';
import i18n from '../../../i18n';
import {useDispatch, useSelector} from 'react-redux';
import Themebutton from '../../components/Buttons/Themebutton';
import {toggleTheme} from '../Redux/ThemeSlice';

interface OnBoarding {
  onComplete?: any;
}
const OnBoarding = ({onComplete}: OnBoarding) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectlanguage, setSelectLanguage] = useState<string>('English');
  const [showModal, setShowModal] = useState<boolean>(false);
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const [DarkMode, setDarkMode] = useState(
    ThemeMode.mode == 'dark' ? true : false,
  );
  const {t} = useTranslation();
  const ScrollX = useRef(new Animated.Value(0)).current;
  const slideref: any = useRef(null);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const [animationValue] = useState(new Animated.Value(0));

  const handleTheme = () => {
    setDarkMode(!DarkMode)
    dispatch(toggleTheme())
  };
  

  const RenderItem = ({item}: any) => {
    return (
      <OnboardView
        image={ThemeMode.mode === 'light' ?  item?.image : item?.darkimage}
        title={t(item?.title)}
        desc={t(item?.desc)}
      />
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
  const translateData = OnBoardingData.map((item: any) => ({
    id: item?.id,
    title: t(item?.title),
    desc: t(item?.desc),
    image: item?.image,
    darkimage: item?.darkimage
  }));

  const checkLng = async () => {
    const x = await AsyncStorage.getItem('LANG');
    if (x) {
      i18n.changeLanguage(x);
      let lng =
        x === 'en'
          ? 'English'
          : x === 'fr'
          ? 'Français'
          : x === 'sp'
          ? 'español'
          : x === 'ur'
          ? 'اردو'
          : 'Deutsch';
      setSelectLanguage(lng);
    }
  };
  useEffect(() => {
    checkLng();
  }, []);
  return (
    <View style={{backgroundColor: ThemeMode.primarybackground, flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={ThemeMode.mode === 'light' ? 'dark-content' : 'light-content'}
      />
      <SelectLangModel
        visible={showModal}
        onclose={() => {
          setShowModal(false);
        }}
        onSelect={async (lang: any) => {
          let lng =
            lang === 'English'
              ? 'en'
              : lang === 'Français'
              ? 'fr'
              : lang === 'español'
              ? 'sp'
              : lang === 'اردو'
              ? 'ur'
              : 'Deutsch';
          await AsyncStorage.setItem('LANG', lng);
          i18n.changeLanguage(lng);
          setSelectLanguage(lang);
          setShowModal(false);
        }}
        selectedLanguage={selectlanguage}
      />

      <LangBtn
        onPress={() => {
          setShowModal(true);
        }}
        tintColor={ThemeMode.modeicon}
        source={AppImages.globe}
        selectlanguage={selectlanguage}
      />
      <Themebutton
        source={ThemeMode.mode === 'light' ? AppImages.moon : AppImages.sun}
        tintColor={ThemeMode.modeicon}
        onPress={handleTheme}
      />
      <FlatList
        contentContainerStyle={{marginTop: 30}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={RenderItem}
        data={translateData}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: ScrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={ViewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slideref}
        keyExtractor={(item): any => item?.id}
      />
      <Paginator data={OnBoardingData} scrollX={ScrollX} />
      <Fluidbutton
        percentage={(currentIndex + 1) * (100 / OnBoardingData.length)}
        scrollTo={scrollTo}
        currentIndex={currentIndex}
        onPress={() => {
          navigation.navigate('LoginLanding');
        }}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});


// const toValue = ThemeMode.mode === 'light' ? 1 : 0;
  // Animated.timing(animationValue,{
  //   toValue,
  //   duration:100,
  //   useNativeDriver:false
  // }).start(()=>{
  //   dispatch(toggleTheme());
  // })

  // const interpolatedBackgroundColor = animationValue.interpolate({
  //   inputRange: [0,1],
  //   outputRange: [ThemeMode.primarybackground, ThemeMode.primarybackground],
  // });

  // const interpolatedTextColor = animationValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [ThemeMode.primarytext, ThemeMode.primarytext],
  // });

  // const interpolatedIconTintColor = animationValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [ThemeMode.modeicon, ThemeMode.modeicon],
  // });