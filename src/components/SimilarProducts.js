import React from "react";
import { Image, ScrollView, StyleSheet, View ,TouchableOpacity,Text} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Sectionheader from "./SectionHeader";
import ProductsCard from "./ProductsCard";
import Images from "../assets/Images";
import { useNavigation } from "@react-navigation/native";

const CardsData = [
    {
        id: 1,
        image: Images.C1,
        name: "Kasbah",
        category: "Rug",
        price: "8,890"
    },

    {
        id: 2,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    },
    {
        id: 3,
        image: Images.C1,
        name: "Kasbah",
        category: "Rug",
        price: "8,890"
    },

    {
        id: 4,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    }
]

const SimilarProducts = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainholder}>
            <Sectionheader onPress={() => navigation.navigate('ProductListing')} title="SIMILAR PRODUCTS" style={styles.productmain} />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.mainholder}>
                {
                    CardsData.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail',{itemData:data})}>
                                <View style={{
                                    backgroundColor: '#F6F6F6',
                                    marginRight: wp("3%"),
                                    marginTop:hp('2%')

                                }}>
                                    <Image source={data.image} />

                                    <TouchableOpacity>
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
           
        </View>
        
    );
};

export default SimilarProducts;

const styles = StyleSheet.create({
    container: {},

    productmain: {
        marginRight: wp("2%"),
    },
    mainholder: {
        backgroundColor: colors.White,
        paddingHorizontal: wp("1.5%"),
        
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


    },
     price: {


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
