import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar,Pressable, TouchableOpacity, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import fonts from "../constants/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign'


const SettingsData = [
    {
        id: 1,
        image: Images.Lock,
        name: 'Change Password',
        page:'Wishlist'
    },
    {
        id: 2,
        image: Images.Call,
        name: 'Contact Us',
        page:'Wishlist'

    },
    {
        id: 3,
        image: Images.Document,
        name: 'Privacy Policy',
        page:'Wishlist'

    },
    {
        id: 4,
        image: Images.Document,
        name: 'Terms and Conditions',
        page:'Wishlist'

    },
]
const Settings = () => {
    const navigation = useNavigation();

    return(
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
                <Text style={styles.headertitle}>Settings</Text>
            </View>
            <View></View>

        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: hp('3%') }}>
                    {SettingsData.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate(data.page)}>
                                <View style={styles.back}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.backicon}>
                                            <Image source={data.image} />
                                        </View>
                                        <Text style={styles.title}>{data.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
        </ScrollView>
        </View>

    )
}

export default Settings;
const styles =StyleSheet.create({
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
    back:{
        alignSelf:'center',
        width:wp('90%'),
        borderRadius:10,
        backgroundColor:'#F6F6F6',
      
        padding:wp('3%'),
        marginBottom:hp('2%')
    },
    backicon:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('12%'),
        padding:wp('2%'),
        backgroundColor:'#fff',
        borderRadius:12,
        alignSelf:'center'


    },
    title:{
        fontSize:16,
        fontFamily:fonts.POPPINS_REGULAR,
        marginHorizontal:wp('5%'),
        color:colors.black,
        alignSelf:'center',
        letterSpacing:0.5
    },
   
   

})