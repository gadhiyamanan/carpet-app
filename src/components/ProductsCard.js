import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Carousel from 'react-native-snap-carousel';
import { HomeCarousel } from "./HomeCarousel";
import Images from "../assets/Images";


const ProductsCard = (props) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.mainholder}>
            {
                props.data.map((data) => {
                    return (
                        <TouchableOpacity onPress={props.onPress}>
                        <View style={props.styles}>
                            <Image source={data.image} />

                            <TouchableOpacity onPress={props.onPress}>
                                <Image source={Images.Shopicon} style={styles.shopicon} /></TouchableOpacity>
                            <View style={styles.contentholder}>
                                <Text style={styles.name}>{data.name}</Text>
                                <View style={styles.subrow}>
                                    <Text style={styles.category}>{data.category}</Text>
                                    <Text style={styles.price}>₹ {data.price}</Text>
                                </View></View>
                        </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    );
};

export default ProductsCard;

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
        justifyContent: "space-between",
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

        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        display: "flex",
        color: colors.browntext


    },
    card: {
        backgroundColor: colors.White,
        marginRight: wp("3%")
    },
    mainholder: {
        paddingHorizontal: wp("4%"),
        paddingVertical: hp("1.5")
    },
    subrow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name: {

        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",

        fontWeight: "400",
        fontSize: 14,
        lineHeight: 21,
        color: colors.GENERALTEXT


    },
    contentholder: {
        paddingHorizontal: 12.5,
        marginTop: -7.5,
        marginBottom: 10
    },
    category: {

        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 10,
        lineHeight: 15,
        color: colors.lighttext,
        marginTop: hp("0.5%")


    }, price: {


        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: colors.GENERALTEXT


    },
    shopicon: {
        textAlign: "right",
        top: -20,
        marginLeft: 115
    }
});
