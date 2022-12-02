import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";

const SubHeading = (props) => {
    return (  
            <Text style={styles.texta}>{props.text}</Text>

    );
};

export default SubHeading;

const styles = StyleSheet.create({
    texta: {
       marginHorizontal:wp('5%'),
       fontSize:14,
       color:colors.lightColor,
       fontFamily:fonts.POPPINS_REGULAR,
       flexShrink:1,
       width:wp('80%'),
       letterSpacing:0.4 
    }

});
