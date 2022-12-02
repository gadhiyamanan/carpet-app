import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, ImageBackground, Pressable, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import { Catgories } from "../config/Data";
import Images from "../assets/Images";
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import ColorsCheck from "../components/Colors";
import SimilarProducts from "../components/SimilarProducts";
import { NativeBaseProvider, Actionsheet, useDisclose, } from "native-base";


const Size = [
    {
        id: 1,
        title: '12x16'
    },
    {
        id: 2,
        title: '16x20'
    },
    {
        id: 3,
        title: '20x24'
    },
    {
        id: 4,
        title: '24x26'
    },
    {
        id: 5,
        title: '26x28'
    },
    {
        id: 6,
        title: '28x30'
    },
]
const Quantity = [
    {
        id: 1,
        title: '10-15'
    },
    {
        id: 2,
        title: '16-20'
    },
    {
        id: 3,
        title: '21-25'
    },
    {
        id: 4,
        title: '26-30'
    },
    {
        id: 5,
        title: '31-35'
    },
    {
        id: 6,
        title: 'More Than'
    },
]

const ProductDetail = ({ route }) => {
    const navigation = useNavigation();
    const [rating, setRating] = useState('4.5');
    const [first, setFirst] = useState(false);
    const itemData = route.params.itemData;
    const [tickets, setTickets] = useState(1);

    const IncrementHour = () => {
        setTickets(tickets + 1)
    }
    const dec = () => {
        if (tickets <= 0) {
            return;
        } else {
            setTickets(tickets - 1);
        }
    }
    const [Status, setStatus] = useState('');

    function SetStatusfunc(ss) {
        setStatus(ss)
        console.log(Status)
    }
    const [Status1, setStatus1] = useState('');

    function SetStatusfunc1(ss) {
        setStatus1(ss)
        console.log(Status1)
    }
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <ImageBackground resizeMode="cover" source={Images.Topimage} style={{ width: wp('100%'), height: hp('50%') }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: hp('8%'), marginHorizontal: wp('5%') }}>
                            <AntDesign name="arrowleft" size={25} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.back}>
                        <View style={{ marginTop: hp('1%'), marginHorizontal: wp('3%') }}>
                            <Text style={styles.name}>{itemData.name}</Text>
                        </View>
                        <View style={{
                            position: 'absolute',
                            right: 20,
                            marginTop: hp('3%'),
                        }}>
                            <View style={styles.backheart}>
                                <Pressable onPress={() => setFirst(!first)}>
                                    <FontAwesome
                                        name={first ? "heart" : "heart"} isChecked={first}
                                        size={25} color={first ? "black" : "#fff"}
                                    />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: wp('3%'), marginTop: hp('1.5%') }}>
                            <Text style={styles.category}>Modern</Text>
                            <View style={{ alignSelf: 'center' }}>
                                <FontAwesome name="star" size={18} color={'#FFC529'} style={{ marginHorizontal: wp('3%'), alignSelf: 'center' }} />
                            </View>
                            <Text style={styles.rating}>{rating}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('ReviewsScreen')}>
                                <Text style={styles.review}>(See Reviews)</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: hp('3%'),
                                marginHorizontal: wp('3%')
                            }}>
                                <TouchableOpacity onPress={dec} style={{ alignSelf: 'center' }}>
                                    <Image source={Images.Dec} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                                </TouchableOpacity>
                                <Text style={styles.textt}>{tickets}</Text>
                                <TouchableOpacity onPress={IncrementHour} style={{ alignSelf: 'center' }} >
                                    <Image source={Images.Inc} style={{ marginHorizontal: wp('1%'), width: 40, height: 40, alignSelf: 'center' }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('2%') }}>
                                <Text style={styles.off}>40%Off</Text>
                                <Text style={styles.price}>₹ {itemData.price}</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('2%'), marginTop: hp('3%') }}>
                            <Text style={styles.bulk}>Need Bulk Booking ?</Text>
                            <TouchableOpacity onPress={onOpen}>
                                <View style={styles.backheart}>
                                    <AntDesign name="plus" style={{}} size={25} color={'#fff'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: hp('2%'), marginHorizontal: wp('2%') }}>
                            <Text style={styles.left}>Shop By Size (FT)</Text>
                            <View style={{ marginTop: hp('2%'), flexDirection: 'row', flexWrap: 'wrap', width: wp('90%'), alignSelf: 'center' }}>
                                {Size.map((data) => {
                                    return (
                                        <TouchableOpacity onPress={() => { SetStatusfunc(data.title) }}>
                                            {Status === data.title ?
                                                <View style={styles.backnew}>
                                                    <Text style={styles.titlenew}>{data.title}</Text>
                                                </View>
                                                :
                                                <View style={styles.back1}>
                                                    <Text style={styles.title}>{data.title}</Text>
                                                </View>
                                            }
                                        </TouchableOpacity>
                                    )
                                })}


                            </View>
                        </View>
                        <View style={{ marginTop: hp('1%'), marginHorizontal: wp('2%') }}>
                            <Text style={styles.left}>Colors</Text>
                            <ColorsCheck />

                        </View>
                        <View style={{ marginTop: hp('3%'), marginHorizontal: wp('3%') }}>
                            <Text style={styles.desc}>The HRX Performance Running Shoes from the Core 1.0 Running Collection are designed with the urban city runner in mind.</Text>
                        </View>

                    </View>
                    <SimilarProducts />
                    <View style={styles.bottom}>
                        <View style={styles.buttonrow}>
                            <TouchableOpacity style={styles.buttonLeft}>
                                <Text style={styles.buttontext}>ADD TO CART</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderComplete')} style={styles.buttonRight}>
                                <Text style={styles.buttontextlight}>BUY NOW</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </View>
            <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={true}>
                <TouchableOpacity onPress={onClose} >
                    <Image source={Images.BCross} style={{ marginTop: hp('-8%') }} />
                </TouchableOpacity>

                <Actionsheet.Content>

                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={{
                            backgroundColor: '#F6F6F6',
                            width: wp('100%'), padding: wp('2%')
                        }}>
                            <Text style={styles.bottomheading}>
                                Need Bulk Booking
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('6%'), marginTop: hp('3%') }}>
                            <Text style={styles.lefttext}>Price</Text>
                            <Text style={styles.price}>₹ {itemData.price}</Text>

                        </View>
                        <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%') }}>
                            <Text style={styles.lefttext}>Select Quantity</Text>
                            <View style={{ marginTop: hp('2%'), flexDirection: 'row', flexWrap: 'wrap', width: wp('90%'), alignSelf: 'center' }}>
                                {Quantity.map((data) => {
                                    return (
                                        <TouchableOpacity onPress={() => { SetStatusfunc1(data.title) }}>
                                            {Status1 === data.title ?
                                                <View style={styles.backnew}>
                                                    <Text style={styles.titlenew}>{data.title}</Text>
                                                </View>
                                                :
                                                <View style={styles.back1}>
                                                    <Text style={styles.title}>{data.title}</Text>
                                                </View>
                                            }
                                        </TouchableOpacity>
                                    )
                                })}


                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.buttonrow}>
                                <TouchableOpacity onPress={onClose} style={styles.buttonLeft}>
                                    <Text style={styles.buttontext}>CANCEL</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onClose} style={styles.buttonRight}>
                                    <Text style={styles.buttontextlight}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </Actionsheet.Content>
            </Actionsheet>
        </NativeBaseProvider>
    )
}
export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    back: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: wp('3%'),
        marginTop: hp('-6%')
    },
    name: {
        fontSize: 24,
        fontFamily: fonts.LORA_SEMI_BOLD,
        textTransform: 'uppercase',
        color: colors.black
    },
    category: {
        fontSize: 14,
        color: '#868686',
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center'
    },
    rating: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_MEDIUM,
        color: colors.black

    },
    review: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_MEDIUM,
        color: colors.btn,
        marginHorizontal: wp('1%')
    },
    backheart: {
        backgroundColor: colors.btn,
        borderRadius: 30,
        width: wp('11%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('2%')
    },
    textt: {
        fontSize: 17,
        fontFamily: fonts.POPPINS_MEDIUM,
        alignSelf: 'center',
        color: colors.black,
        marginHorizontal: wp('3%'),
        textAlign: 'center'
    },
    off: {
        textAlign: 'right',
        color: colors.btn,
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR
    },
    price: {
        fontSize: 20,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        color: colors.black,
        textAlign: 'right'
    },
    bulk: {
        fontSize: 17,
        fontFamily: fonts.LORA_SEMI_BOLD,
        color: colors.black,
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    left: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        color: colors.black
    },
    back1: {
        backgroundColor: '#F6F6F6',
        padding: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1%'),
        borderRadius: 20,

    },
    backnew: {
        backgroundColor: colors.black,
        padding: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1%'),
        borderRadius: 30

    },
    title: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        color: colors.black,
        letterSpacing: 0.5
    },
    titlenew: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        color: '#fff',
        letterSpacing: 0.5
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        color: '#000000',
        letterSpacing: 0.3
    },
    bottom: {
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('5%'),


    },
    buttonrow: {
        flexDirection: "row",

    },
    button: {
        marginRight: wp("2%"),
        width: wp("35%"),
        borderRadius: 60,
        backgroundColor: "#FFF4EB"
    },
    buttontext: {


        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        color: "#FFF"
    },
    buttontextlight: {
        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        color: "white"
    },
    buttonLeft: {
        marginRight: wp("4%"),
        width: wp("37.5%"),
        borderRadius: 60,
        paddingHorizontal: 18,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#fff"
    },
    buttonRight: {
        marginLeft: wp("4%"),
        width: wp("37.5%"),
        borderRadius: 60,
        backgroundColor: "#C1864F",
        paddingHorizontal: 18,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center"
    },

    // Actionsheet
    bottomheading: {

        fontFamily: fonts.LORA_SEMI_BOLD,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center",
        textTransform: "uppercase",
        color: colors.GENERALTEXT,




    },
    lefttext: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        color: colors.black,
        letterSpacing: 0.5
    }


})