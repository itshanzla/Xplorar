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
import {useSelector} from 'react-redux';
interface TextFields {
  Placeholder?: string;
  mainStyle?: any;
  icons?: any;
  tintcolor?: any;
  ispassword?: boolean;
  secureTextEntry?: any;
  value?: string;
  onChangeText?: any;
  onhide?: any;
  placeholderTextColor?: any
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
  placeholderTextColor
}: TextFields) => {
  const [isfocus, setfocus] = useState<boolean>(false);
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  return (
    <View style={[styles.main, mainStyle]}>
      <View
        style={[
          styles.inputmain,
          {
            borderColor:
              ThemeMode.mode === 'light' && isfocus
                ? AppBaseColor.blue
                : AppBaseColor.gray && ThemeMode.mode === 'dark' && isfocus
                ? AppBaseColor.purple
                : AppBaseColor.gray,
          },
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
          placeholderTextColor={placeholderTextColor}
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
              tintColor={tintcolor ? tintcolor : 'white'}
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
