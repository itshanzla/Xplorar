import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {Fonts} from '../../../android/app/src/main/assets/fonts/Fonts';
import {AppFontSize} from '../../../assets/Texts/Fontsize';
import {AppImages} from '../../../assets/images/AppImages';
interface TextFields {
  Placeholder?: string;
  mainStyle?: any;
  icons?: any;
  tintcolor?: any;
  ispassword?: boolean;
  secureTextEntry?: any;
  value?: string;
  onChangeText?: () => void;
  onhide?: any;
}

const TextFields = ({
  Placeholder,
  mainStyle,
  icons,
  tintcolor,
  ispassword,
  secureTextEntry,
  value,
  onChangeText,
  onhide,
}: TextFields) => {
  const [isfocus, setfocus] = useState<boolean>(false);
  return (
    <View style={[styles.main, mainStyle]}>
      <View
        style={[
          styles.inputmain,
          {borderColor: isfocus ? AppBaseColor.blue : AppBaseColor.gray},
        ]}>
        {icons && (
          <TouchableOpacity>
            <Image
              tintColor={tintcolor}
              resizeMode="contain"
              style={[{width: 20, height: 20}]}
              source={icons}
            />
          </TouchableOpacity>
        )}
        <TextInput
          placeholderTextColor={AppBaseColor.gray}
          style={[
            styles.input,
            {
              paddingHorizontal: icons ? 5 : 0 || ispassword ? 10 : 0,
              width: icons && ispassword ? '83%' : '90%',
            },
          ]}
          placeholder={Placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => {
            setfocus(true);
          }}
          onBlur={() => {
            setfocus(false);
          }}
        />
        {ispassword && (
          <TouchableOpacity activeOpacity={0.8} onPress={onhide}>
            <Image
              tintColor={tintcolor}
              resizeMode="contain"
              style={[{width: 20, height: 20}]}
              source={secureTextEntry ? AppImages.closeeye : AppImages.openeye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextFields;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '90%',
    color: AppBaseColor.black,
    fontFamily: Fonts.outfitRegular,
    fontSize: AppFontSize.mediumtxt,
  },
  inputmain: {
    borderWidth: 1,
    height: 48,
    borderRadius: 10,
    // borderColor: '#336749',
    width: '90%',
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
