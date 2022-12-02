import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import ProductsCard from "../components/ProductsCard";
import { Data } from "../config/Data";
import fonts from "../constants/fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Button, Actionsheet, useDisclose, Center, NativeBaseProvider } from "native-base";
import Filtersheet from "../components/FilterSheet";


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
    },

    {
        id: 5,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    },

    {
        id: 6,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    },

    {
        id: 7,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    },

    {
        id: 8,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    },

    {
        id: 9,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    }, {
        id: 10,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    }, {
        id: 11,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    }, {
        id: 12,
        image: Images.C2,
        name: "INDE ROSE",
        category: "Rug",
        price: "7,890"
    }
]
const ProductListing = () => {
    const navigation = useNavigation();
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    return (
        <NativeBaseProvider>
            <View style={styles.container}>

                <StatusBar
                    animated={true}
                    backgroundColor="transparent"
                    translucent={true}
                />


                <Image source={Images.BlackHeader} />
                <ImageBackground resizeMode={"cover"} source={Images.CircleTop} style={{ position: 'absolute', right: 0, width: wp('70%'), height: hp('25%') }} />

                <View style={styles.Headercontainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={Images.Arrow} />
                    </TouchableOpacity>
                    <View style={{}}>
                        <Text style={styles.headertitle}>Product Listing</Text>
                    </View>
                    <View style={styles.rightrow}>
                        <TouchableOpacity>
                            <Image source={Images.Search} style={{ marginRight: 15 }} /></TouchableOpacity>

                        <TouchableOpacity onPress={onOpen}>
                            <Image source={Images.Filter} style={{ marginLeft: 5, marginTop: 2.5 }} /></TouchableOpacity>
                    </View>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                    style={styles.mainholder}>
                    <Text style={styles.texta}>460 Products Found</Text>

                    <View style={{ marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', width: wp('97%'), alignSelf: 'center' }}>
                        {
                            CardsData.map((data) => {
                                return (
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail',{itemData:data})}>
                                    <View style={styles.card}>
                                        <Image source={data.image} />

                                        <TouchableOpacity onPress={() => { }}>
                                            <Image source={Images.Shopicon} style={styles.shopicon} /></TouchableOpacity>
                                        <View style={styles.contentholder}>
                                            <Text style={styles.name}>{data.name}</Text>
                                            <View style={styles.subrow}>
                                                <Text style={styles.category}>{data.category}</Text>
                                                <Text style={styles.price}>₹ {data.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>


                </ScrollView>
                <Actionsheet isOpen={isOpen} onClose={onClose}  hideDragIndicator={true}>
                <TouchableOpacity onPress={onClose}>
                <Image source={Images.BCross} style={{marginTop:hp('-8%')}}/>
                </TouchableOpacity>

                    <Actionsheet.Content>
                        <Filtersheet />
                    </Actionsheet.Content>
                </Actionsheet>
            </View>
        </NativeBaseProvider>
    )
}
export default ProductListing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    Headercontainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 70


    },
    rightrow: {
        flexDirection: "row",

    },
    headertitle: {


        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
        color: colors.White,
        alignSelf: 'center',
        marginLeft: 15


    },
    card: {
        backgroundColor: '#F6F6F6',
        marginRight: wp("3%"),
        marginBottom: hp('2%')
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
    },
    contentholder: {
        paddingHorizontal: 12.5,
        marginTop: -7.5,
        marginBottom: 10,
        backgroundColor: '#F6F6F6'
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
        color: colors.GENERALTEXT,
        marginTop: hp('-3%')


    },
    mainholder: {
        paddingHorizontal: wp("4%"),
        paddingVertical: hp("1.5")
    },
    texta: {
        fontSize: 19,
        fontFamily: fonts.LORA_SEMI_BOLD,
        color: colors.black,
        marginHorizontal: wp('1%'),
        letterSpacing: 0.5,
        textTransform: 'uppercase'
    }


})
