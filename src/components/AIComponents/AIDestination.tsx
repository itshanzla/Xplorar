import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import { useNavigation } from '@react-navigation/native';
import NextBtn from '../Buttons/NextBtn';
import { setDestination } from '../../views/Redux/AISlice';

const AIDestination = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const [txtInput, setTxtInput] = useState<string>('');

  const handleSaveAndProceed = () => {
    if (txtInput.trim()) { 
      dispatch(setDestination(txtInput)); 
      console.log("Destination Saved:", txtInput);
      navigation.navigate('AIDays'); 
    } else {
      console.error("Please enter a destination"); 
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          ThemeMode.mode === 'light'
            ? AppBaseColor.pearlwhite
            : AppBaseColor.darkprimary,
      }}>
      <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.main}>
          Tell me your dream destination, and I'll craft the perfect itinerary
          for you!
        </Text>
        <TextInput
          style={styles.txtInput}
          placeholder="Destination name"
          placeholderTextColor={AppBaseColor.black}
          onChangeText={setTxtInput} // Directly update state
          value={txtInput}
        />
        <NextBtn text='Save & Proceed' onPress={handleSaveAndProceed} />
      </View>
    </View>
  );
};

export default AIDestination;

const styles = StyleSheet.create({
  txtInput: {
    backgroundColor: AppBaseColor.darkSecondry,
    height: 60,
    width: '80%',
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 20,
    color: AppBaseColor.black,
    fontSize: AppFontSize.mediumtxt,
    fontFamily: Fonts.outfitRegular,
    paddingHorizontal: 15,
  },
  main: {
    fontSize: AppFontSize.extralarge,
    fontFamily: Fonts.outfitBold,
    letterSpacing: 1,
    lineHeight: 30,
    textAlign: 'center',
    color: AppBaseColor.white,
    marginBottom: 30,
  },
});
