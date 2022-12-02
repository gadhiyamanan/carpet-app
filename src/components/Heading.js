import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";


const Heading= (props) => {
    return (  
            <Text style={styles.texta}>{props.text}</Text>

    );
};

export default Heading;

const styles = StyleSheet.create({
    texta: {
       marginHorizontal:wp('5%'),
       fontSize:24,
       letterSpacing:1,
       color:colors.black,
       fontFamily:fonts.LORA_SEMI_BOLD,
       marginBottom:hp('1.5%'),
       textTransform: "uppercase",
    }

});
