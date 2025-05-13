import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import { AppBaseColor } from '../../../assets/Colors/Colors';

interface AIDaysBtn {
  txt: string;
  onPress: () => void;
  isSelected: boolean; // New prop to determine if item is selected
}

const AIDaysBtn = ({ txt, onPress, isSelected }: AIDaysBtn) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: AppBaseColor.cardBg,
          width: 150,
          height: 150,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          borderWidth: 1,
          borderColor: isSelected ? AppBaseColor.darkSecondry : AppBaseColor.cardBg, // Apply border color if selected
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          color: AppBaseColor.white,
          fontSize: AppFontSize.largetext,
          fontFamily: Fonts.outfitBold,
        }}>
        {txt}
      </Text>
    </TouchableOpacity>
  );
};

export default AIDaysBtn;

const styles = StyleSheet.create({});
