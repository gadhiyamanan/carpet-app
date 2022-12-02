import React from "react";
import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";


const Textinput = (props) => {
    return (  
        <Textinput placeholder={props.placeholder} style={styles.textinputstyle} />

    );
};

export default Textinput;

const styles = StyleSheet.create({
    textinputstyle: {
        width: wp("80%"),
        borderRadius: 60,
        padding: 12,
        marginTop: hp("1.5%"),
        alignSelf: "center",
        backgroundColor:colors.btn, 
        paddingTop:10,
        justifyContent:"center",
        alignItems:"center"
    }

});
