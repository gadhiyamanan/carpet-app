import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Feather from 'react-native-vector-icons/Feather'
import Images from "../assets/Images";
import Button from "../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AllRugs from "../components/AllRugs";
import RecentlyViewed from "../components/RecentlyViewed";
import SimilarProducts from "../components/SimilarProducts";
import ServiceSection from "../components/ServiceSection";
import SpotLight from "../components/SpotLight";
import PopularRugs from "../components/PopularRugs";
import ShopbySize from "../components/ShopbySize";
import Categories from "../components/Categories";
import Offers from "../components/Offers";



const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
                        <ScrollView 
                        showsVerticalScrollIndicator={false}
                        >

            <View style={styles.header}>
                <ImageBackground resizeMode={"cover"} source={Images.CircleTop} style={{ position: 'absolute', right: 0, width: wp('70%'), height: hp('25%') }} />
                <ImageBackground source={Images.Layer} resizeMode={'contain'} style={{width:wp('100%'),height:hp('20%'),marginTop:hp('16%'),position:'absolute'}}/>
                <View style={styles.rightrow}>
                        <TouchableOpacity>
                            <Image source={Images.Search} style={{ marginRight: 15 }} /></TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                            <Image source={Images.Notify} style={{ marginLeft: 5, marginTop: 2.5 }} /></TouchableOpacity>
                    </View>
            <View style={{ marginHorizontal: wp('5%'),marginTop:hp('10%') }}>
                <Text style={styles.light}>Make Your
                    <Text style={styles.bold}>{'\n'}Interior</Text>
                    <Text>{' '}</Text>
                    <Text style={styles.light}>More</Text>
                    <View style={styles.backtext}>
                        <Text style={styles.textd}>Attractive</Text>
                    </View>

                </Text>
            </View>
                </View>
                <Offers/>
                <View >
                     <Categories/>
                    <AllRugs/>
                    <RecentlyViewed />
                    <SimilarProducts/>
                    <ServiceSection /> 
                    <SpotLight/>
                    <ShopbySize/>
                    <View style={{marginBottom:hp('15%')}}> 
                    <PopularRugs/> 
                    </View> 
                   
                </View>
            </ScrollView>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    card:{
        backgroundColor: colors.White,
        marginRight: wp("3%")

    },
   
    header:{
        backgroundColor:colors.black,
        height:hp('40%')

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
        padding:wp('0.5%')
    },
    textd: {
        fontSize: 28,
        color: colors.black,
        textTransform: "uppercase",
        fontFamily: fonts.POPPINS_BOLD,
        letterSpacing:-0.5

    },
    rightrow:{
        position:'absolute',
        right:20,
        flexDirection:'row',
        marginTop:hp('8%')
    }






})



