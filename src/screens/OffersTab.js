import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, StatusBar, SafeAreaView, Text, TouchableOpacity, ImageBackground, ScrollView, Pressable, TouchableOpacityBase } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import fonts from "../constants/fonts";
import Images from "../assets/Images";
import { colors } from "../config/Colors";

const Offers = [
    {
        id: 1,
        image: Images.Offer1
    },
    {
        id: 2,
        image: Images.Offer2
    },
    {
        id: 3,
        image: Images.Offer3
    },
    {
        id: 4,
        image: Images.Offer4
    }, {
        id: 5,
        image: Images.Offer5
    }
]
const OffersTab = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.header}>
                <ImageBackground resizeMode={"cover"} source={Images.CircleTop} style={{ position: 'absolute', right: 0, width: wp('70%'), height: hp('25%') }} />
                <ImageBackground source={Images.Layer} resizeMode={'contain'} style={{ width: wp('100%'), height: hp('17%'), marginTop: hp('16%'), position: 'absolute' }} />
              
            </View>
            <ScrollView>
                <View style={{ marginTop: hp('3%') }}>
                    {Offers.map((data) => {
                        return (
                            <TouchableOpacity>
                                <View style={{ marginBottom: hp('2%'), alignSelf: 'center' }}>
                                    <Image source={data.image} />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Text style={{ marginBottom: hp('20%') }}> </Text>
            </ScrollView>


        </View >
    )
}

export default OffersTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        backgroundColor: colors.black,
        height: hp('32%')

    },
    light: {
        fontSize: 28,
        letterSpacing: 0.4,
        color: '#fff',
        fontFamily: fonts.POPPINS_REGULAR,
    },
    bold: {
        fontSize: 28,
        letterSpacing: 0.4,
        color: '#fff',
        fontFamily: fonts.POPPINS_SEMI_BOLD,
    },
    backtext: {
        backgroundColor: colors.btn,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('0.5%')
    },
    textd: {
        fontSize: 28,
        color: colors.black,
        textTransform: "uppercase",
        fontFamily: fonts.POPPINS_BOLD,
        letterSpacing: -0.5

    },
    rightrow: {
        position: 'absolute',
        right: 20,
        flexDirection: 'row',
        marginTop: hp('8%')
    },



})