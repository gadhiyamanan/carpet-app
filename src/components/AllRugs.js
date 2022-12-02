import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Carousel from 'react-native-snap-carousel';
import HomeCarousel from "./HomeCarousel";


const AllRugs = (props) => {
    return (
        <View>
            <View style={styles.Allrugsrow}>
                <Text style={styles.AllRugstext}>ALL RUGS</Text>
                <TouchableOpacity>
                <Text style={styles.seealltext}>See All</Text></TouchableOpacity>
            </View>
            <HomeCarousel/>

        </View>
    );
};

export default AllRugs;

const styles = StyleSheet.create({
    container: {},
    text: {
        fontSize: 16,
        fontFamily: fonts.POPPINS_MEDIUM,
        textAlign: "center",
        letterSpacing: 0.8,
        color: "#FFFFFF",
        alignSelf: "center",
        textTransform: "uppercase",
        fontWeight: "500",

    },
    button: {
        width: wp("80%"),
        borderRadius: 60,
        paddingVertical: 15,
        marginTop: hp("1.5%"),
        alignSelf: "center",
        backgroundColor: colors.btn,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    Allrugsrow: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: wp("5%"),
        justifyContent:"space-between",
         marginTop: hp("5%")
    },
    AllRugstext: {


        fontFamily: fonts.LORA_BOLD,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 23,
        textAlign: "center",
        color: colors.GENERALTEXT

    },
    seealltext: {
        //         font-family: 'Poppins';
        // font-style: normal;
        // font-weight: 500;
        // font-size: 16px;
        // line-height: 24px;
        // /* identical to box height */

        // display: flex;
        // align-items: center;
        // text-align: right;

        // /* light brown */

        // color: #C1864F

        fontFamily:fonts.POPPINS_MEDIUM,
        fontStyle:"normal",
        fontWeight:"500",
        fontSize:16,
        lineHeight:24,
        display:"flex",
        color:colors.browntext


    }
});
