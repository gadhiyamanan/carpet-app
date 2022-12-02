import React from "react";
import { StyleSheet, TouchableOpacity ,Text,View} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";

const LabelText = (props) => {
  return (
       <Text style={styles.text}>{props.title}</Text> 
  );
};

export default LabelText;

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontFamily:fonts.POPPINS_REGULAR,
    color:colors.lightColor,
    marginHorizontal:wp('12%'),
    letterSpacing:0.2
    
  },
 
});
