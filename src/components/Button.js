import React from "react";
import { StyleSheet, TouchableOpacity ,Text,View} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";


const Button = (props) => {
  return (
      <TouchableOpacity style = {styles.button} onPress={props.onPress}>
      <View style = {{alignSelf:"center"}}>
          <Text style={styles.text}>{props.title}</Text></View>
        
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    fontFamily:fonts.POPPINS_MEDIUM,
    textAlign: "center",
    letterSpacing: 0.8,
    color: "#FFFFFF",
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight:"500",
        
  },
  button: {
    width: wp("80%"),
    borderRadius: 60,
    paddingVertical: 15,
    marginTop: hp("1.5%"),
    alignSelf: "center",
    backgroundColor:colors.btn,
    justifyContent:"center",
    alignItems:"center",
    display:"flex"
  },
});
