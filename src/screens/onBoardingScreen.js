import React, {  useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import fonts from "../constants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";





const onBoardingScreen = () => {
    const navigation = useNavigation();

    const [state, setState] = React.useState('0');





    return (
        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.Header}>
                <Image source={Images.Onboarding} style={styles.image} />

            </View>  
            <View style={styles.Footer}>
                <Text style={styles.Footerheading}>Welcome </Text>
                <View style={styles.rowholder}>
                    <Text style={styles.Footersubheading}>TO</Text>
                    <Text style={styles.colortext}>CHOUHAN</Text>
                    <Text style={styles.Footersubheading}>RUGS</Text></View>

                <Text style={styles.largetext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

                <View style={styles.buttonrow}>
                    <TouchableOpacity onPress={() => navigation.navigate("LoginStack")} style={styles.buttonLeft}>
                        <Text style={styles.buttontext}>LOGIN</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttonRight}>
                        <Text style={styles.buttontextlight}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

            </View>



        </View>
    )
}
export default onBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White  
    },


    Header: {
        flex: 6,
    },
    Footer: {
        flex: 4,
        backgroundColor: colors.White,
        borderRadius: 35,
        top: -30,
        paddingHorizontal: wp("10%")
    },
    image: {
        height: '100%'
    },
    Footerheading: {

        color: colors.footertext,

        fontFamily: fonts.POPPINS_LIGHT,
        fontStyle: "normal",  
        fontWeight: '300',
        fontSize: 22,
        marginTop: hp("5%")


    },
    Footersubheading: {
        fontFamily: fonts.loraitalic,   
        color: colors.footersub,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 24,

    },
    rowholder: {
        flexDirection: "row",

        marginTop: -hp(".5%")
    },
    colortext: {
        color: "#C1864F",
        fontFamily: fonts.loraitalic,   
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 24,
        marginLeft: wp("2%"),
        marginRight: wp("2%"),
    },
    largetext: {

        fontFamily: fonts.POPPINS_REGULAR,
        color: "#868686",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        marginTop: hp("3%")

    },
    buttonrow: {
        display: "flex",
        flexDirection: "row",
        marginTop: hp("5%")

    },
    button: {
        marginRight: wp("2.5%"),
        width: wp("35%"),
        borderRadius: 60,
        backgroundColor: "#FFF4EB"
    },
    buttontext: {


        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        color: "#101010"
    },
    buttontextlight: {
        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        color: "white"
    },
    buttonLeft: {
        marginRight: wp("2%"),
        width: wp("37.5%"),
        borderRadius: 60,
        backgroundColor: "#FFF4EB",
        paddingHorizontal: 18,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonRight: {
        marginLeft: wp("2%"),
        width: wp("37.5%"),
        borderRadius: 60,
        backgroundColor: "#C1864F",
        paddingHorizontal: 18,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center"
    }


})
