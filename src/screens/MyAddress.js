import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Pressable, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import fonts from "../constants/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from "../components/Button";

const Address = [
    {
        id: 1,
        title: 'HOME',
        phone: '+61-3215164581',
        address: '4261 Kembery Drive, Chicago, LSA'
    },
    {
        id: 2,
        title: 'OFFICE',
        phone: '+61-3215164581',
        address: '4261 Kembery Drive, Chicago, LSA'
    }
]
const MyAddress = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');

    function SetStatusfunc(ss) {
        setStatus(ss)
        console.log(Status)
    }

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
                    <Text style={styles.headertitle}>My Address</Text>
                </View>
                <View></View>

            </View>
            <View style={{ marginTop: hp('3%') }}>
                {Address.map((data) => {
                    return (
                        <TouchableOpacity onPress={() => { SetStatusfunc(data.id) }}>
                            <View style={[Status === data.id ? styles.backnew : styles.back]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[Status === data.id ? styles.backlogon : styles.backlogo]}>
                                        <Image source={Images.Addresslogo} />
                                    </View>
                                    <View style={{ marginHorizontal: wp('5%') }}>
                                        <Text style={styles.title}>{data.title}</Text>
                                        <Text style={styles.phone}>{data.phone}</Text>
                                        <Text style={styles.address}>{data.address}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }}>
                                        <TouchableOpacity>
                                            <Image source={Images.EditOrange} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ marginHorizontal: wp('3%') }}>
                                            <Image source={Images.Delete} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
                <Button title={'+ Add New Address'} onPress={() => navigation.navigate('ViewProfile')} />
            </View>
        </View>
    )
}
export default MyAddress;

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
    back: {
        backgroundColor: "#fff",
        alignSelf: 'center',
        width: wp('90%'),
        borderRadius: 10,
        padding: wp('3%'),
        marginBottom: hp('3%'),
        borderWidth: 2,
        borderColor: '#F6F6F6'
    },
    backnew: {
        backgroundColor: "#F6F6F6",
        alignSelf: 'center',
        width: wp('90%'),
        borderRadius: 10,
        padding: wp('3%'),
        marginBottom: hp('3%'),
        borderWidth: 2,
        borderColor: '#C1864F'
    },
    backlogo: {
        width: wp('14%'),
        height: hp('7%'),
        borderRadius: 50, justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },
    backlogon: {
        width: wp('14%'),
        height: hp('7%'),
        borderRadius: 50, justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    title: {
        fontSize: 16,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        color: colors.black
    },
    phone: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        color: '#868686',
        marginTop: hp('0.8%')

    },
    address: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        color: '#868686',
        flexWrap: 'wrap',
        width: wp('60%'),
        marginTop: hp('0.8%')


    }
})