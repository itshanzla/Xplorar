import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../../components/Headers/HomeHeader';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppImages} from '../../../assets/images/AppImages';
import BackButton from '../../components/Buttons/BackButton';
import ProfileTextInput from '../../components/TextFields/ProfileTextInput';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {Picker} from '@react-native-picker/picker';
import SocialLogin from '../../components/Buttons/SocialLogin';
import {useNavigation} from '@react-navigation/native';
import ImagePickerModal from '../../components/Modals/ImagePickerModal';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const ProfileInfo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<any>('Pakistan');
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const navigation: any = useNavigation();
  const {t} = useTranslation();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: ThemeMode?.primarybackground},
      ]}>
      <StatusBar
        translucent={false}
        backgroundColor={
          ThemeMode.mode === 'light'
            ? AppBaseColor?.pearlwhite
            : AppBaseColor?.darkprimary
        }
        barStyle={ThemeMode.mode === 'light' ? 'dark-content' : 'light-content'}
      />
      <HomeHeader
        onPress={() => navigation.goBack()}
        icon={AppImages.ArrowLeftOutline}
        name={t('Edit Profile')}
        icon1={AppImages.Search}
        RightTint={ThemeMode.wnb}
      />
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <ProfileTextInput title="Full Name" />
        <ProfileTextInput title="Username" />
        <ProfileTextInput title="Email" />
        <ProfileTextInput title="Phone Number" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 70,
          }}>
          <View style={[styles.main, {borderColor: ThemeMode.wngray}]}>
            <Text style={[styles.txt, {color: ThemeMode.wngray}]}>
              {'Country'}
            </Text>
            <Picker
              style={[
                styles.txtinput,
                {color: ThemeMode.wnb, fontFamily: Fonts.outfitRegular},
              ]}
              selectedValue={selectedLanguage}
              dropdownIconColor={ThemeMode.wnb}
              dropdownIconRippleColor={ThemeMode.wnb}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Pakistan" value="Pakistan" />
              <Picker.Item label="India" value="India" />
            </Picker>
          </View>
          <View style={[styles.main, {borderColor: ThemeMode.wngray}]}>
            <Text style={[styles.txt, {color: ThemeMode.wngray}]}>
              {'Gender'}
            </Text>
            <Picker
              style={[
                styles.txtinput,
                {color: ThemeMode.wnb, fontFamily: Fonts.outfitRegular},
              ]}
              itemStyle={styles.itemStyle}
              dropdownIconColor={ThemeMode.wnb}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Shemale" value="Shemale" />
            </Picker>
          </View>
        </View>
        <ProfileTextInput stylemain={{marginTop: -50}} title="Address" />
        <TouchableOpacity
        activeOpacity={0.8}
          style={[
            styles.btnmain,
            {
              backgroundColor:
                ThemeMode.mode === 'light'
                  ? AppBaseColor.white
                  : AppBaseColor.darkmedium,
            },
          ]}>
          <Text style={[styles.txt1,{color:ThemeMode.wnb}]}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    width: '40%',
    borderWidth: 1,
    height: 60,
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    borderColor: AppBaseColor.gray,
    marginRight: '5%',
    marginLeft: '5%',
  },
  txt: {
    fontSize: AppFontSize.smalltxt,
    fontFamily: Fonts.outfitSemiBold,
    color: AppBaseColor.gray,
  },
  txtinput: {
    width: '95%',
    height: 60,
    position: 'absolute',
    left: 2,
    top: 8,
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.largetext,
    color: 'black',
  },
  itemStyle: {
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.largetext,
    color: 'black',
  },
  btnmain: {
    width: '90%',
    elevation: 4,
    backgroundColor: AppBaseColor.blue,
    height: 60,
    padding: 5,
    marginTop: 20,
    borderRadius: 20,
    borderColor: AppBaseColor.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    fontFamily: Fonts.outfitBold,
    fontSize: AppFontSize.mediumtxt,
    color: AppBaseColor.white,
  },
});
