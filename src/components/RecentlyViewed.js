import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Carousel from 'react-native-snap-carousel';
import { HomeCarousel } from "./HomeCarousel";
import Sectionheader from "./SectionHeader";
import ProductsCard from "./ProductsCard";
import Images from "../assets/Images";

const CardsData = [
    {
        id:1,
        image:Images.Cardimg1,
        name:"Kasbah",
        category:"Rug",
        price:"8,890"
    },
    
    {
        id:2,
        image:Images.Cardimg2,
        name:"INDE ROSE",
        category:"Rug",
        price:"7,890"
    },
    {
        id:3,
        image:Images.Cardimg1,
        name:"Kasbah",
        category:"Rug",
        price:"8,890"
    },
    
    {
        id:4,
        image:Images.Cardimg2,
        name:"INDE ROSE",
        category:"Rug",
        price:"7,890"
    }
]

const RecentlyViewed = (props) => {
    return (
        <View style={styles.mainholder}>
            <Sectionheader title="RECENTLY VIEWED" />
            <ProductsCard styles={{marginRight:wp('3%')}} data = {CardsData} style = {styles.productmain}/>
        </View>
    );
};

export default RecentlyViewed;

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
    productmain:{
        backgroundColor: colors.White,
        marginRight: wp("3%")
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
    mainholder: {
        backgroundColor: colors.Recentback,
        paddingHorizontal: wp("1.5%"),
        paddingVertical: hp("1.5")
    }
});
