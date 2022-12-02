import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, Image, StatusBar, ImageBackground, FlatList } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Images from "../assets/Images";
import { useNavigation } from "@react-navigation/native";

const New = [
    {
        id: 1,
        title: '50% OFF in Modern Rugs All Products!!',
        time: '09:35 AM',
        image: Images.Noti
    },
    {
        id: 2,
        title: 'One step ahead with new stylish collections every week',
        time: '09:35 AM',
        image: Images.Noti
    }
]
const Earlier = [
    {
        id: 1,
        head: 'Package',
        title: ' from your order #19547464 has arrived',
        time: '09:35 AM',
        image: Images.Noti
    },
    {
        id: 2,
        head: '',

        title: 'Flash Sale starting tomorrow. Don’t forget to check it out.',
        time: '09:35 AM',
        image: Images.Noti
    },
    {
        id: 3,
        head: 'PROMO',

        title: ' code BS5D6486# Don’t forgot to use',
        time: '09:35 AM',
        image: Images.Promo
    }
]

const renderSeparator = () => (
    <View
        style={{
            backgroundColor: '#F6F6F6',
            height: 1,
        }}
    />
);

const Promo = Images.Promo;
const Package = Images.Package;

const Notification = () => {
    const navigation = useNavigation();
    const [off, setOff] = useState('50% OFF');
    const [pkg, setPkg] = useState('Package');
    const [promo, setPromo] = useState('PROMO')


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
                    <Text style={styles.headertitle}>Notifications</Text>
                </View>
                <View></View>

            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginTop: hp('2%') }}>
                <FlatList
                    data={New}
                    ItemSeparatorComponent={renderSeparator}
                    renderItem={({ item }) => (
                        <View style={styles.back}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Image source={item.image} />
                                </View>
                                <View style={{ flexDirection: 'column', alignSelf: 'center', marginHorizontal: wp('4%') }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                            </View>
                    )}
                />
                  
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: wp('8%'), marginTop: hp('3%') }}>
                    <Text style={styles.left}>Earlier</Text>
                    <View style={styles.backnum}>
                        <Text style={styles.count}>8</Text>
                    </View>
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <FlatList
                        data={Earlier}
                        ItemSeparatorComponent={renderSeparator}
                        renderItem={({ item }) => (
                            <View style={styles.back}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Image source={item.head === pkg ? Package : item.head === promo ? Promo : item.image} style={{ resizeMode: 'contain' }} />
                                </View>
                                <View style={{ flexDirection: 'column', alignSelf: 'center', marginHorizontal: wp('4%') }}>
                                    <Text style={styles.title}>{item.head}{item.title}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

export default Notification;

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
    backnum: {
        backgroundColor: colors.btn,
        width: wp('5.5%'),
        height: hp('2.75%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: wp('3%'),
        alignSelf: 'center'
    },
    count: {
        color: '#fff',
        fontSize: 12,
        fontFamily: fonts.POPPINS_SEMI_BOLD
    },
    left: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        color: colors.black,
        alignSelf: 'center'

    },
    back: {
        flexDirection: 'row', alignSelf: 'center',
        width: wp('90%'),
        marginBottom: hp('2%'),
    },
    title: {
        fontSize: 15,
        fontFamily: fonts.POPPINS_REGULAR,
        flexWrap: 'wrap',
        width: wp('73%'),
        lineHeight: hp('3.8%'),
        color: colors.black
    },
    time: {
        fontFamily: fonts.POPPINS_REGULAR,
        fontSize: 12,
        color: '#868686',
        marginTop: hp('1%')
    }
})