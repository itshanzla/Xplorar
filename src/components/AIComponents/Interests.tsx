import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppBaseColor} from '../../../assets/Colors/Colors';
import {InterestsData} from './AIData/InterestsData';
import { AppFontSize } from '../../../assets/Texts/Fontsize';
import { Fonts } from '../../../android/app/src/main/assets/fonts/Fonts';
import NextBtn from '../Buttons/NextBtn';
import { useNavigation } from '@react-navigation/native';
import { setInterests } from '../../views/Redux/AISlice';

const Interests = () => {
  const ThemeMode = useSelector((state: any) => state.theme.mode);
  const navigation:any = useNavigation()
  const dispatch = useDispatch()
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelectedSkills(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter((skillsID: any) => skillsID !== id)
        : [...prevSelected, id],
    );
  };

  const RenderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelect(item.id)}
        style={[
          styles.skillBox,
          selectedSkills.includes(item.id) && styles.selectedSkillsBox,
        ]}>
        <Text
          style={[
            styles.skillText,
            selectedSkills.includes(item.id) && styles.selectedSkillText,
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
      <Text style={styles.header}>Select your Interests</Text>
      <FlatList
        data={InterestsData}
        renderItem={RenderItem}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
      />
     <NextBtn text='Save & Continue'  onPress={()=>{
      const SelectedSkillsName = InterestsData.filter((item:any)=>selectedSkills.includes(item.id)).map(item=>item.name)
      console.log("Selected Skills are=>",SelectedSkillsName)
      dispatch(setInterests(SelectedSkillsName))
      navigation.navigate('TravelMode')
      }}/>
    </View>
  );
};

export default Interests;

const styles = StyleSheet.create({
  header: {
    fontSize: AppFontSize.header,
    fontFamily:Fonts.outfitBold,
    marginBottom: 20,
    color: AppBaseColor.white,
    marginTop:20
  },
  skillBox: {
    width: 150,
    height:60,
    justifyContent:'center',
    margin: 10,
    borderRadius: 8,
    backgroundColor: AppBaseColor.cardBg,
    alignItems: 'center',
    borderColor: AppBaseColor.darkSecondry,
  },
  selectedSkillsBox: {
    borderWidth:1,
    borderColor: AppBaseColor.white, // Highlighted border for selected skills
    backgroundColor: AppBaseColor.cardBg,
  },
  skillText: {
    fontSize: AppFontSize.mediumtxt,
    color: AppBaseColor.white,
    fontFamily:Fonts.outfitRegular
  },
  selectedSkillText: {
    color: AppBaseColor.white, 
    fontSize:AppFontSize.extramedium,
    fontFamily:Fonts.outfitBold
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
