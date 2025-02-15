import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import React, {useState} from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppImages} from '../../../assets/images/AppImages';
import ImageView from 'react-native-image-viewing';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
interface CountryDetailComp {
  source?: any;
  country?: string;
  city?: string;
  rating?: string;
  desc?: string;
  data?: any;
  populardata?: any;
}
const CountryDetailComp = ({
  source,
  country,
  city,
  rating,
  desc,
  data,
  populardata,
}: CountryDetailComp) => {
  const [Expanded, setExpanded] = useState<boolean>(false);
  const [Visible, setVisible] = useState<boolean>(false);
  const [currentindex, setCurrentIndex] = useState<number>(0);
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const toggleRead = () => {
    setExpanded(!Expanded);
  };
  const selectedCountry = useSelector(
    (state: any) => state.country.selectedCountry,
  );
  const RenderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setCurrentIndex(index);
          setVisible(true);
        }}
        style={{
          width: 111,
          height: 105,
          backgroundColor: 'white',
          elevation: 7,
          marginLeft: 10,
          borderRadius: 8,
        }}>
        <Image
          source={item}
          style={{width: '100%', height: '100%', borderRadius: 8}}
        />
      </TouchableOpacity>
    );
  };
  const PopularRenderItem = (item: any) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={[
            styles.popularbtn,
            {
              backgroundColor: ThemeMode?.Darkbg,
              borderWidth: ThemeMode?.mode === 'dark' ? 1 : 0,
              borderColor: AppBaseColor.darkbcolor,
            },
          ]}>
          <View style={{flexDirection: 'row', width: '98%'}}>
            <View
              style={{
                width: 77,
                height: 65,
                marginLeft: 5,
                marginHorizontal: 10,
              }}>
              <Image
                style={{width: '100%', height: '100%', borderRadius: 8}}
                resizeMode="cover"
                source={item?.item?.placeimg}
              />
            </View>
            <View style={{flexDirection: 'row', width: '70%'}}>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    fontSize: AppFontSize.smalltxt,
                    color: ThemeMode?.wnb,
                    fontFamily: Fonts.outfitBold,
                  }}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {item?.item?.place}
                </Text>
                <Text
                  style={{
                    fontSize: AppFontSize.extrasmalltxt,
                    color: ThemeMode?.wnb,
                    fontFamily: Fonts.outfitBold,
                  }}>
                  {item?.item?.city}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={AppImages.star}
                  style={{width: 16, height: 16}}
                />
                <Text
                  style={{
                    fontFamily: Fonts.outfitRegular,
                    color: ThemeMode.wngray,
                    marginLeft: 4,
                    fontSize: AppFontSize.smalltxt,
                  }}>
                  {item?.item?.rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={source} resizeMode="cover" style={styles.img} />
      
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            marginLeft: '2%',
          }}>
          <View>
            <Text style={[styles.txt1, {color: ThemeMode?.wnb}]}>
              {country}
            </Text>
            <View style={styles.main1}>
              <LottieView
                style={styles.loc}
                autoPlay
                loop
                source={require('../../components/LotteFile/lottieJson/location.json')}
              />

              <Text style={[styles.city, {color: ThemeMode?.wngray}]}>
                {city}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5,
              }}>
              <Image
                style={{width: 15, height: 15, marginLeft: 20}}
                source={AppImages.star}
                resizeMode="contain"
              />
              <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
                {rating}
              </Text>
            </View>
            <Image
              style={styles.contentimg}
              resizeMode="contain"
              source={AppImages.viewimg}
            />
          </View>
        </View>
        <View style={styles.descContainer}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={Expanded ? undefined : 3}
            style={[styles.desc, {color: ThemeMode?.wnb}]}>
            {desc}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.readbtn,
              {alignItems: Expanded ? 'center' : undefined},
            ]}
            onPress={toggleRead}>
            <Text style={[styles.readmore, {color: AppBaseColor?.gray}]}>
              {Expanded ? 'Read less' : 'Read more'}
            </Text>
            <Image
              tintColor={AppBaseColor?.gray}
              style={{width: 24, height: 24}}
              resizeMode="contain"
              source={Expanded ? AppImages.arrowup : AppImages.arrowdown}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.txt3, {color: ThemeMode?.wnb}]}>More Images</Text>
        <View>
          <VirtualizedList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item?.id?.toString()}
            contentContainerStyle={{paddingHorizontal: 5}}
            horizontal
            data={data}
            renderItem={RenderItem}
            getItemCount={(data: any) => data?.length}
            getItem={(data, index) => data[index]}
            scrollEventThrottle={16}
          />
          <ImageView
            images={data}
            imageIndex={currentindex}
            visible={Visible}
            onRequestClose={() => setVisible(false)}
            animationType="slide"
            presentationStyle="overFullScreen"
            doubleTapToZoomEnabled
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={[styles.popularHeader, {color: ThemeMode?.wnb}]}>
            Popular Places
          </Text>
          <View>
            <FlatList
              // style={{justifyContent:'center',alignContent:'center'}}
              // contentContainerStyle={{}}
              data={populardata}
              renderItem={PopularRenderItem}
              keyExtractor={(item: any) => item?.id?.toString()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CountryDetailComp;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 346,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  txt1: {
    fontSize: AppFontSize.largetext,
    fontFamily: Fonts.outfitBold,
    color: AppBaseColor.black,
  },
  main1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -3,
    marginTop: 5,
  },
  loc: {
    width: 22,
    height: 22,
  },
  city: {
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.gray,
    marginLeft: 4,
  },
  txt2: {
    fontSize: AppFontSize.smalltxt,
    marginLeft: 5,
    fontFamily: Fonts.outfitSemiBold,
    color: AppBaseColor.black,
  },
  contentimg: {
    width: 100,
    height: 34,
  },
  descContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  desc: {
    textAlign: 'justify',
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
    lineHeight: 18,
  },
  readbtn: {
    flexDirection: 'row',
  },
  readmore: {
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.blue,
  },
  txt3: {
    fontSize: AppFontSize?.extramedium,
    fontFamily: Fonts.outfitSemiBold,
    color: AppBaseColor.black,
    marginBottom: 10,
    marginLeft: '2%',
  },
  popularHeader: {
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize?.largetext,
    marginBottom: 10,
    marginLeft: '2%',
  },
  
  popularbtn: {
    height: 82,
    borderWidth: 1,
    marginBottom: 10,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 7,
  },
});
