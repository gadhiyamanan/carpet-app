import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, StatusBar, SafeAreaView, Text, TouchableOpacity, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import fonts from "../constants/fonts";
import LinearGradient from 'react-native-linear-gradient';
import Images from "../assets/Images";
import { colors } from "../config/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign'

export const Catgories = [
    {
        id: 1,
        title: 'All',
        image: Images.Recepie1
    },
    {
        id: 2,
        title: 'Geometric',
        image: Images.Recepie2
    },
    {
        id: 3,
        title: 'Transitional',
        image: Images.Recepie3
    },
    {
        id: 4,
        title: 'Geometri',
        image: Images.Recepie1
    },
    {
        id: 5,
        title: 'Abstrac',
        image: Images.Recepie2
    },
    {
        id: 6,
        title: 'Classis',
        image: Images.Recepie3
    },
    {
        id: 7,
        title: 'Classic',
        image: Images.Recepie2
    },
    {
        id: 8,
        title: 'Modern',
        image: Images.Recepie2
    },
    {
        id: 9,
        title: 'Traditional',
        image: Images.Recepie3
    },
    {
        id: 10,
        title: 'Floral',
        image: Images.Recepie2
    },
    {
        id: 11,
        title: 'Traditiona',
        image: Images.Recepie3
    },
    {
        id: 12,
        title: 'Florall',
        image: Images.Recepie2
    },
]
const CategoryTab = () => {
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
            <View style={styles.header}>
                <ImageBackground resizeMode={"cover"} source={Images.CircleTop} style={{ position: 'absolute', right: 0, width: wp('70%'), height: hp('25%') }} />
                <ImageBackground source={Images.Layer} resizeMode={'contain'} style={{ width: wp('100%'), height: hp('17%'), marginTop: hp('16%'), position: 'absolute' }} />
                <View style={styles.rightrow}>
                    <TouchableOpacity>
                        <Image source={Images.Search} style={{ marginRight: 15 }} /></TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image source={Images.Notify} style={{ marginLeft: 5, marginTop: 2.5 }} /></TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: wp('5%'), marginTop: hp('10%') }}>
                    <Text style={styles.light}>Choose The
                        <Text style={styles.bold}>{'\n'}Category</Text>
                        <Text>{' '}</Text>
                        <Text style={styles.light}>As Per</Text>
                        <View style={styles.backtext}>
                            <Text style={styles.textd}>Your Choice</Text>
                        </View>

                    </Text>
                </View>
            </View>
            <View style={{ marginLeft: wp('2%') }}>
                <View style={{ marginTop: hp('5%'), flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', width: wp('97%'), alignSelf: 'center' }}>
                    {Catgories.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => { SetStatusfunc(data.title) }}>
                                {Status === data.title ?
                                    <View style={styles.backnew}>
                                        <Image source={data.image} style={styles.img} />
                                        <Text style={styles.titlenew}>{data.title}</Text>
                                    </View>
                                    :
                                    <View style={styles.back}>
                                        <Image source={data.image} style={styles.img} />
                                        <Text style={styles.title}>{data.title}</Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        )
                    })}


                </View>
            </View>
        </View>
    )
}

export default CategoryTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        backgroundColor: colors.black,
        height: hp('32%')

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
    back: {
        backgroundColor: '#F6F6F6',
        width: wp('21%'),
        padding: wp('2.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1%'),

    },
    backnew: {
        backgroundColor: 'black',
        width: wp('21%'),
        padding: wp('2.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1%'),

    },
    img: {
        alignSelf: 'center'
    },
    title: {
        fontSize: 9.5,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        marginTop: hp('1%'),
        color: 'black',
        letterSpacing: 0.5
    },
    titlenew: {
        fontSize: 9.5,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        marginTop: hp('1%'),
        color: '#fff',
        letterSpacing: 0.5
    },



})