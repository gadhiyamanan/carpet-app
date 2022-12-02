import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, Image, StatusBar, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Images from "../assets/Images";
import { useNavigation } from "@react-navigation/native";


const Data = [
    {
        id: 1,
        name: 'Kathryn Murphy',
        image: Images.User1,
        date: '25/06/2022',
        rating: '4.5',
        desc: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    },
    {
        id: 2,
        name: 'Darrell Steward',
        image: Images.User2,
        date: '25/06/2022',
        rating: '4.2',
        desc: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    },
    {
        id: 3,
        name: 'Kathryn Murphy',
        image: Images.User1,
        date: '25/06/2022',
        rating: '4.5',
        desc: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    },
    {
        id: 4,
        name: 'Darrell Steward',
        image: Images.User2,
        date: '25/06/2022',
        rating: '4.1',
        desc: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    },
    {
        id: 5,
        name: 'Kathryn Murphy',
        image: Images.User1,
        date: '25/06/2022',
        rating: '4.4',
        desc: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    },
    {
        id: 6,
        name: 'Darrell Steward',
        image: Images.User2,
        date: '25/06/2022',
        rating: '4.8',
        desc: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    },
    {
        id: 7,
        name: 'Kathryn Murphy',
        image: Images.User1,
        date: '25/06/2022',
        rating: '4.5',
        desc: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.'
    }
]
const ReviewsScreen = () => {
    const navigation = useNavigation();

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
                    <Text style={styles.headertitle}>All Reviews</Text>
                </View>
                <View></View>

            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
                <View style={{marginTop:hp('1%')}}>
                    {Data.map((data) => {
                        return (
                            <View style={{ marginBottom: hp('2%'), padding: wp('3%') }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Image source={data.image} />
                                        <View
                                            style={styles.back}
                                        >
                                            <Text style={styles.rating}>{data.rating}</Text>
                                        </View>
                                    </View>


                                    <View style={{ flexDirection: 'column', marginHorizontal: wp('5%'), alignSelf: 'center' }}>
                                        <Text style={styles.name}>{data.name}</Text>
                                        <Text style={styles.date}>{data.date}</Text>

                                    </View>
                                </View>
                                <Text style={styles.desc}>{data.desc}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default ReviewsScreen;
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
        fontSize: 15,
        fontFamily: fonts.LRA_MEDIUM,
        color: colors.black

    },
    date: {
        fontSize: 13,
        fontFamily: fonts.LORA_REGULAR,
        color: '#B3B3B3',
        marginTop: hp('0.5%'),
        fontWeight: '400'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        marginTop: hp('2%'),
        color: colors.black
    },
    rating: {
        fontSize: 10,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        color: '#fff'
    },
    back:{
        height: 20,
        width: 20,
        borderRadius: 6,
        backgroundColor: "#FFC529",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        overflow:'hidden',
        bottom: -8,
        alignSelf: "flex-end",
        zIndex: 2,
        right: -5,
        shadowColor: '#FFC529',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 10,
    }


})