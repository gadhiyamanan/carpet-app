import React, {  useState,useEffect } from "react";
import {SafeAreaView, Text, View,StyleSheet,Button, TouchableOpacity} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";


const CELL_COUNT = 4;
     
const VerifyForgetOTP = () => {
  
         
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,    
  });

 
 
  return (
    <View style={styles.container}>   
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}   
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}           
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>      
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    


    </SafeAreaView>
    </View>
  );
};

export default VerifyForgetOTP;
const styles=StyleSheet.create({
    container:{
        width: wp('85%'),
        backgroundColor: '#F6F6F6',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: hp('1%'),
        padding: wp('2%'),
        paddingHorizontal: wp('6%'),
        fontSize: 16,
    
        fontFamily: fonts.POPPINS_REGULAR,
     },
    root: {alignSelf:'center'},
  title: {textAlign: 'center', fontSize: 20},
  codeFieldRoot: {
  
  },
  cellRoot: {
    width: wp('18%'),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRightColor:'#fff',
    borderRightWidth:2,
    
    
  },
  cellText: {
    color:colors.black,
    fontSize: 20,
    textAlign: 'center',
    fontFamily:fonts.POPPINS_REGULAR

  },
  focusCell: {
    // borderColor:Theme.color.buttoncolor,
  },
  

})