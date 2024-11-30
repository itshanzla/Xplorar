import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {AppImages} from '../../../assets/images/AppImages';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const SelectLangModel = ({
  selectedLanguage,
  visible,
  onclose,
  onSelect,
}: any) => {
  const [languages, setlanguages] = useState([
    {
      title: 'English',
    },
    {
      title: 'Français',
    },
    {
      title: 'español',
    },
    {
      title: 'اردو',
    },
    {
      title: 'Deutsch',
    },
  ]);
  const Language_Key = 'selectedLanguage';
  const ThemeMode = useSelector((state: any) => state.theme.mode);

  const getSelected = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem(Language_Key);
      if (savedLanguage) {
        const index = languages.findIndex(item => item.title === savedLanguage);
        return index !== -1 ? index : 0;
      }
    } catch (err) {
      console.error('Failed to Load Languages', err);
    }
    return 0;
  };
  const [selectedIndex, setSelectedIndex] = useState<any>(getSelected());

  useEffect(() => {
    const fetchselectedLanguages = async () => {
      const index = await getSelected();
      setSelectedIndex(index);
    };
    fetchselectedLanguages();
  }, []);

  const handleSelectLanguage = async (language: string, index: number) => {
    try {
      await AsyncStorage.setItem(Language_Key, language);
      setSelectedIndex(index);
      onSelect(language);
    } catch (error) {
      console.error('Failed to save selected Language', error);
    }
  };
  return (
    <Modal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={onclose}
      isVisible={visible}
      style={styles.modalView}>
      <View style={[styles.modal,{backgroundColor:ThemeMode.primarybackground}]}>
        <StatusBar animated  backgroundColor={ThemeMode.primarycolor} />
        <Text style={[styles.heading,{color:ThemeMode.primarytext}]}>Select Language</Text>
        <FlatList
          data={languages}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleSelectLanguage(item?.title, index)}
                style={[styles.item,{borderColor:ThemeMode.primarycolor}]}>
                <Image
                  source={
                    selectedIndex == index
                      ? AppImages.radio
                      : AppImages.radiobutton
                  }
                  style={styles.icon}
                  tintColor={ThemeMode.wnb}
                />
                <Text style={[styles.itemtxt,{color:ThemeMode.secondrytext}]}>{item?.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
};

export default SelectLangModel;

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
  },
  modal: {
    width: '100%',
    paddingBottom: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 20,
    fontFamily: Fonts.outfitBold,
    color: 'black',
    margin: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    height: 50,
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,

  },
  icon: {
    width: 18,
    height: 18,
  },
  itemtxt: {
    marginLeft: 10,
    fontFamily:Fonts.outfitSemiBold
  },
});
