import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {InterestsData} from './AIData/InterestsData';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import NextBtn from '../Buttons/NextBtn';
import {useNavigation} from '@react-navigation/native';
import {TravelModeData} from './AIData/TravelModeData';
import {setTravelMode} from '../../views/Redux/AISlice';

const TravelMode = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const navigation: any = useNavigation();
  const [SelectedTravelMode, setSelectedTravelMode] = useState<number | null>(
    null,
  );
  const dispatch = useDispatch();
  const handleSelect = (id: number, name: string) => {
    if (SelectedTravelMode === id) {
      setSelectedTravelMode(null); // Deselect if already selected
      dispatch(setTravelMode(null)); // Reset Redux state
    } else {
      setSelectedTravelMode(id);
      dispatch(setTravelMode(name)); // Save selected travel mode in Redux
    }
  };
  const RenderItem = ({item}: any) => {
    const isSelected = SelectedTravelMode === item.id;
    return (
      <TouchableOpacity
        onPress={() => handleSelect(item.id, item.name)}
        style={[isSelected ? styles.SelectedTravelModesBox : styles.skillBox]}>
        <Text
          style={[
            isSelected ? styles.SelectedTravelModeText : styles.skillText,
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          ThemeMode.mode === 'light'
            ? AppBaseColor.pearlwhite
            : AppBaseColor.darkprimary,
        alignItems: 'center',
      }}>
      <Text style={styles.header}>Select your Primary Travel Mode</Text>
      <FlatList
        data={TravelModeData}
        renderItem={RenderItem}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
      />
      <NextBtn
        text="Next"
        onPress={() => {
          const SelectedMode : any = TravelModeData.find(
            (item: any) => item.id === SelectedTravelMode,
          );
          dispatch(setTravelMode(SelectedMode.name))
          navigation.navigate('AIBudget');
        }}
      />
    </View>
  );
};

export default TravelMode;

const styles = StyleSheet.create({
  header: {
    fontSize: AppFontSize.header,
    fontFamily: Fonts.outfitBold,
    marginBottom: 20,
    color: AppBaseColor.white,
    marginTop: 20,
  },
  skillBox: {
    width: 150,
    height: 60,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: AppBaseColor.cardBg,
    alignItems: 'center',
  },
  SelectedTravelModesBox: {
    width: 150,
    height: 60,
    margin: 10,
    borderRadius: 8,
    backgroundColor: AppBaseColor.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: AppBaseColor.white,
  },
  skillText: {
    fontSize: AppFontSize.mediumtxt,
    color: AppBaseColor.white,
    fontFamily: Fonts.outfitRegular,
  },
  SelectedTravelModeText: {
    color: AppBaseColor.white,
    fontSize: AppFontSize.extramedium,
    fontFamily: Fonts.outfitBold,
  },
  confirmBtn: {
    backgroundColor: AppBaseColor.darkSecondry,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  confirmText: {
    color: AppBaseColor.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
