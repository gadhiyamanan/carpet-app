import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Pressable, TouchableOpacity, ImageBackground } from "react-native";
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

const ViewProfile = () => {
    const navigation = useNavigation();
    const [mail, setMail] = useState('jonejacob@gmail.com');
    const [phone, setPhone] = useState('+91 - 6549874665');
    const [address, setAddress] = useState('8502 Preston Rd. Inglewood, Maine 98380');


    return (
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
                    <Text style={styles.headertitle}>My Profile</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Image source={Images.EditPro} />
                </TouchableOpacity>

            </View>
           
        </View>
    )
}
export default ViewProfile;
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
    name: {
        fontSize: 18,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        lineHeight: hp('3%'),
        color: colors.black,
        textAlign: 'center'
    },
    back: {
        alignSelf: 'center',
        width: wp('90%'),
        borderRadius: 10,
        backgroundColor: '#F6F6F6',

        padding: wp('3%'),
        marginTop: hp('3%')
    },
    backicon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('12%'),
        padding: wp('2%'),
        backgroundColor: '#fff',
        borderRadius: 12,
        alignSelf: 'center'


    },
    title: {
        fontSize: 16,
        fontFamily: fonts.POPPINS_REGULAR,
        marginHorizontal: wp('5%'),
        color: colors.black,
        alignSelf: 'center',
        letterSpacing: 0.5,
        flexWrap:'wrap',
        width:wp('70%')
    },
})