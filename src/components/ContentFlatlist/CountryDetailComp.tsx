import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppImages} from '../../../assets/images/AppImages';
import { useSelector } from 'react-redux';
interface CountryDetailComp {
  source?: any;
  country?: string;
  city?: string;
  rating?: string;
  desc?: string;
}
const CountryDetailComp = ({
  source,
  country,
  city,
  rating,
  desc,
}: CountryDetailComp) => {
  const [Expanded, setExpanded] = useState<boolean>(false);
  const toggleRead = () => {
    setExpanded(!Expanded);
  };
  const selectedCountry = useSelector(
    (state: any) => state.country.selectedCountry,
  );
  const RenderItem =({item} : any)=>{
    
    return (
      <View>
        
      </View>
    )
  }
  return (
    <View style={{flex: 1}}>
      <Image source={source} resizeMode="cover" style={styles.img} />
      <View style={{marginLeft: '4%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <Text style={styles.txt1}>{country}</Text>
            <View style={styles.main1}>
              <Image
                resizeMode="contain"
                tintColor={AppBaseColor.blue}
                source={AppImages.Location}
                style={styles.loc}
              />
              <Text style={styles.city}>{city}</Text>
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
              <Text style={styles.txt2}>{rating}</Text>
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
            style={styles.desc}>
            {desc}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.readbtn,
              {alignItems: Expanded ? 'center' : undefined},
            ]}
            onPress={toggleRead}>
            <Text style={styles.readmore}>
              {Expanded ? 'Read less' : 'Read more'}
            </Text>
            <Image
              tintColor={AppBaseColor.blue}
              style={{width: 24, height: 24}}
              resizeMode="contain"
              source={Expanded ? AppImages.arrowup : AppImages.arrowdown}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.txt3}>More Images</Text>
        <View>
          {/* <FlatList data={} renderItem={RenderItem} /> */}
        </View>
      </View>
    </View>
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
    paddingHorizontal: 4,
    marginRight: '4%',
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
  txt3:{
    fontSize:AppFontSize.mediumtxt,
    fontFamily:Fonts.outfitSemiBold,
    color:AppBaseColor.black
  }
});
