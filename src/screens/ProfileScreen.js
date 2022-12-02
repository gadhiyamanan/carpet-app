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

const ProfileTab = [
    {
        id: 1,
        image: Images.Profileicon,
        name: 'My Profile',
        page:'ViewProfile'
    },
    {
        id: 2,
        image: Images.Locationicon,
        name: 'My Address',
        page:'MyAddress'

    },
    {
        id: 3,
        image: Images.Buyicon,
        name: 'My Orders',
        page:'Wishlist'

    },
    {
        id: 4,
        image: Images.Hearticon,
        name: 'Wishlist',
        page:'Wishlist'

    }, {
        id: 5,
        image: Images.Settingicon,
        name: 'Settings',
        page:'Settings'

    }
]
const ProfileScreen = () => {
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
                    <ImageBackground source={Images.Layer} resizeMode={'contain'} style={{ width: wp('100%'), height: hp('17%'), marginTop: hp('16%'), position: 'absolute' }} />
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('10%') }}>
                        <Text style={styles.light}>Enjoy{'\n'}
                            <Text style={styles.bold}>Your{'\n'}</Text>
                            <View style={styles.backtext}>
                                <Text style={styles.textd}>Account</Text>
                            </View>

                        </Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginTop: hp('-5%') }}>
                <Image source={Images.Profileimg} style={{ width: wp('34%'), height: hp('17%'), borderRadius: 10 }} />
                    <Text style={styles.name}>Jone Jacob</Text>
                </View>
                <View style={{ marginTop: hp('3%') }}>
                    {ProfileTab.map((data) => {
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
                <TouchableOpacity style={{marginTop:hp('2%'),marginBottom:hp('18%'),alignSelf:'center',flexDirection:'row'}}>
                    <View style={{alignSelf:'center'}}>
                    <Image source={Images.Logout}/>
                    </View>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>


        </View >
    )
}

export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        backgroundColor: colors.black,
        height: hp('35%')

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
    name: {
        fontSize: 18,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        lineHeight: hp('3%'),
        color: colors.black,
        textAlign: 'center'
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
    logout:{
        fontFamily:fonts.POPPINS_SEMI_BOLD,
        fontSize:16,
        color:'#E93B3B',
        alignSelf:'center',
        marginHorizontal:wp('2%'),

    }




})