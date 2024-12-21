import {
  Image,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppImages} from '../../../assets/images/AppImages';
import BackButton from '../../components/Buttons/BackButton';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../../i18n';
import SelectLangModel from '../../components/Modals/SelectLangModel';
import LangBtn from '../../components/Buttons/LangBtn';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../Redux/ThemeSlice';
import {useNavigation} from '@react-navigation/native';
import ImagePickerModal from '../../components/Modals/ImagePickerModal';
import ImagePicker from 'react-native-image-crop-picker';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {useTranslation} from 'react-i18next';

const Profile = () => {
  const [notify, setNotify] = useState<boolean>(false);
  const [selectlanguage, setSelectLanguage] = useState<string>('English');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [ProfileImg, setProfileImg] = useState<string>('');
  const {t} = useTranslation();
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const ProfileImage =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fprofile-png%2Fdownload%2F51602%2F&psig=AOvVaw2vp2O7X6ZLC0e9QU2PtFeQ&ust=1734681544862000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIijksGus4oDFQAAAAAdAAAAABAE';
  console.log('ProfileImage is =>', ProfileImage);
  const [DarkMode, setDarkMode] = useState(
    ThemeMode.mode == 'dark' ? true : false,
  );
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const toggleNotify = () => {
    setNotify(!notify);
  };
  const handleTheme = () => {
    setDarkMode(!DarkMode);
    dispatch(toggleTheme());
  };
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

  const openCamera = async () => {
    try {
      ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: true,
      })
        .then((image: any) => {
          console.log('Image is this=>', image?.path);
          setProfileImg(image?.path);
        })
        .then(() => setViewModal(false));
    } catch (err) {
      console.log('error is =>', err);
    }
  };

  const opengallery = async () => {
    try {
      ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      })
        .then((image: any) => {
          console.log('image is this =>', image?.path);
          setProfileImg(image?.path);
        })
        .then(() => setViewModal(false));
    } catch (err) {
      console.log('Error is=>', err);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: ThemeMode.primarybackground}}>
      <StatusBar
        translucent
        barStyle={
          ThemeMode?.mode === 'light' ? 'dark-content' : 'light-content'
        }
        backgroundColor={'transparent'}
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
      <ImagePickerModal
        visible={viewModal}
        onclose={() => {
          setViewModal(false);
        }}
        onPress={() => openCamera()}
        onPress1={() => opengallery()}
      />
      {/* <BackButton tintColor={AppBaseColor.white} /> */}
      <Image
        resizeMode="cover"
        style={styles.bg}
        source={
          ThemeMode?.mode === 'light'
            ? AppImages?.profilebg
            : AppImages?.darkprofilebg
        }
      />
      <View style={styles.imgmain}>
        <Image
          style={styles.profilebg}
          resizeMode="contain"
          source={ProfileImg ? {uri: ProfileImg} : AppImages?.profileimg}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setViewModal(true)}
          style={[
            styles.profilebtn,
            {
              backgroundColor:
                ThemeMode?.mode === 'light'
                  ? AppBaseColor?.white
                  : AppBaseColor?.darkmedium,
            },
          ]}>
          <Image
            style={styles.imgbtn}
            source={AppImages.editline}
            tintColor={ThemeMode.wngray}
          />
        </TouchableOpacity>
        <Text style={[styles.name, {color: ThemeMode?.wnb}]}>Puerto Rico</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.txt1, {color: ThemeMode?.wngray}]}>
            Youremail@gmail.com
          </Text>
          <Text style={[styles.txt1, {color: ThemeMode?.wngray}]}>||</Text>
          <Text style={[styles.txt1, {color: ThemeMode?.wngray}]}>
            +92 03001234567
          </Text>
        </View>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View style={[styles.card1, {backgroundColor: ThemeMode.Darkbg}]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileInfo')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Image
              resizeMode="cover"
              style={styles.img1}
              source={AppImages.profileinfo}
              tintColor={ThemeMode?.wngray}
            />
            <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
              {t('Edit Profile information')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="cover"
                style={styles.img2}
                source={AppImages.notification}
                tintColor={ThemeMode?.wngray}
              />
              <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
                {t('Notifications')}
              </Text>
            </View>
            <TouchableOpacity onPress={toggleNotify} activeOpacity={0.8}>
              <Text
                style={[
                  styles.txt2,
                  {
                    color:
                      ThemeMode?.mode === 'light'
                        ? AppBaseColor?.blue
                        : AppBaseColor?.darkSecondry,
                  },
                ]}>
                {notify ? t('Off') : t('On')}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
            onPress={() => setShowModal(true)}
            activeOpacity={1}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="cover"
                style={styles.img2}
                source={AppImages.translate}
                tintColor={ThemeMode?.wngray}
              />
              <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
                {t('Language')}
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <Text
                style={[
                  styles.txt2,
                  {
                    color:
                      ThemeMode?.mode === 'light'
                        ? AppBaseColor?.blue
                        : AppBaseColor?.darkSecondry,
                  },
                ]}>
                {selectlanguage}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.card1,
            {height: 86, backgroundColor: ThemeMode.Darkbg},
          ]}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Image
              resizeMode="contain"
              style={styles.img1}
              source={AppImages.privacy}
              tintColor={ThemeMode?.wngray}
            />
            <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
              {t('Security')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
            onPress={() => handleTheme()}
            activeOpacity={1}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="cover"
                style={styles.img2}
                source={AppImages.themes}
                tintColor={ThemeMode?.wngray}
              />
              <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
                {t('Theme')}
              </Text>
            </View>
            <TouchableOpacity activeOpacity={1}>
              <Text
                style={[
                  styles.txt2,
                  {
                    color:
                      ThemeMode.mode === 'light'
                        ? AppBaseColor.blue
                        : AppBaseColor.darkSecondry,
                  },
                ]}>
                {DarkMode ? t('Dark Mode') : t('Light Mode')}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.card1,
            {marginBottom: 80, backgroundColor: ThemeMode?.Darkbg},
          ]}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Image
              resizeMode="contain"
              style={[styles.img1, {width: 20, height: 20}]}
              source={AppImages.support}
              tintColor={ThemeMode?.wngray}
            />
            <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
              {t('Help & Support')}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                style={styles.img2}
                source={AppImages.communicate}
                tintColor={ThemeMode?.wngray}
              />
              <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
                {t('Contact Us')}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
            onPress={()=>navigation.navigate('PrivacyPolicy')}
            activeOpacity={0.8}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="cover"
                style={styles.img2}
                source={AppImages.policy}
                tintColor={ThemeMode?.wngray}
              />
              <Text style={[styles.txt2, {color: ThemeMode?.wnb}]}>
                {t('Privacy & Policy')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 240,
    position: 'absolute',
  },
  profilebg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imgmain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
  },
  profilebtn: {
    position: 'relative',
    backgroundColor: AppBaseColor.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    borderRadius: 30,
    bottom: 40,
    left: 40,
    elevation: 7,
    zIndex: 1,
  },
  imgbtn: {
    width: 24,
    height: 24,
  },
  name: {
    fontSize: AppFontSize.extralarge,
    fontFamily: Fonts.outfitBold,
    marginTop: -30,
    color: AppBaseColor.black,
  },
  txt1: {
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitSemiBold,
    marginLeft: 5,
  },
  card1: {
    backgroundColor: AppBaseColor.white,
    width: '90%',
    elevation: 7,
    height: 121,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  img1: {
    width: 20,
    height: 18,
  },
  img2: {
    width: 18,
    height: 18,
  },
  txt2: {
    marginLeft: 10,
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
    color: AppBaseColor.black,
  },
});
// const requestCameraPermission = async () => {
//   if (Platform.OS == 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'This App needs camera access to take photos',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'Ok',
//         },
//       );
//       return granted == PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   } else {
//     const status = await request(PERMISSIONS.IOS.CAMERA);
//     return status == RESULTS.GRANTED;
//   }
// };
