import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Images from "../assets/Images";
import PriceSlider from "./RangeSlider";
import CheckBoxSelect from "./Checkbox";
import ColorsCheck from "./Colors";
import { position } from "native-base/lib/typescript/theme/styled-system";

const Categories =[
    {
        id:1,
        title:'Modern'
    },
    {
        id:2,
        title:'Florel'
    },
    {
        id:3,
        title:'Abstract'
    },
    {
        id:4,
        title:'Transitional'
    },
    {
        id:5,
        title:'Classic'
    },
    {
        id:6,
        title:'Geometric'
    },
]
const Sorting =[
    {
        id:1,
        title:'Best selling'
    
    },
    {
        id:2,
        title:'Price-Low to high'
    },
    {
        id:3,
        title:'Price-High to low'
    },
    {
        id:4,
        title:'All Price'
    },
]

const Filtersheet = (props) => {
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
    return (
        <View style={styles.container}>
            <Text style={styles.bottomheading}>
                FILTERS
            </Text>
            <ScrollView>
            <View style={styles.footer}>
            <Text style={styles.categorytext}>
                Categories
            </Text>
            <View style={{ marginTop: hp('2%'), flexDirection: 'row', flexWrap: 'wrap', width: wp('97%'), alignSelf: 'center' }}>
                    {Categories.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => { SetStatusfunc(data.title) }}>
                                {Status === data.title ?
                                    <View style={styles.backnew}>
                                        <Text style={styles.titlenew}>{data.title}</Text>
                                    </View>
                                    :
                                    <View style={styles.back}>
                                        <Text style={styles.title}>{data.title}</Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        )
                    })}


                </View>
                <View>
                <Text style={styles.categorytext}>Price</Text>
                <PriceSlider/>
                </View>
                <View>
                <Text style={styles.categorytext}>Colors</Text>
                <ColorsCheck/>
                </View>
                <View>
                <Text style={styles.categorytext}>Sorting By</Text>
                <View style={{ marginTop: hp('2%'), flexDirection: 'row', flexWrap: 'wrap', width: wp('97%'), alignSelf: 'center' }}>
                    {Sorting.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => { SetStatusfunc1(data.title) }}>
                                {Status1 === data.title ?
                                    <View style={styles.backnew}>
                                        <Text style={styles.titlenew}>{data.title}</Text>
                                    </View>
                                    :
                                    <View style={styles.back}>
                                        <Text style={styles.title}>{data.title}</Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        )
                    })}


                </View>
                </View>
            </View>
            <View style={styles.bottom}>
            <View style={styles.buttonrow}>
                    <TouchableOpacity style={styles.buttonLeft}>
                        <Text style={styles.buttontext}>RESET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight}>
                        <Text style={styles.buttontextlight}>APPLY</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        </View>
    );
};

export default Filtersheet;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.White
    },
    bottomheading: {
        
        fontFamily: fonts.LORA_SEMI_BOLD,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center",
        textTransform: "uppercase",
        color: colors.GENERALTEXT,
        backgroundColor:'#F6F6F6',
        width:wp('100%'),padding:wp('2%')



    },
    categorytext: {
      

        fontFamily:fonts.POPPINS_SEMI_BOLD,
       
        fontSize:15,
        color:colors.GENERALTEXT,
        marginHorizontal:wp('2%'),
        marginTop:hp('1%')
       
        


    },
    footer:{
        backgroundColor:'#fff',
        padding:wp('3%'),
        marginTop:hp('1%')

    },
    bottom:{
        backgroundColor:colors.black,
        justifyContent:'center',
        alignItems:'center',
        padding:wp('3%'),
       

    },
    back: {
        backgroundColor: '#F6F6F6',
        padding: wp('2.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1%'),
        borderRadius:20

    },
    backnew: {
        backgroundColor:colors.black,
        padding: wp('2.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1%'),
        borderRadius:30

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
    buttonrow: {
        flexDirection: "row",

    },
    button: {
        marginRight: wp("2.5%"),
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
        marginRight: wp("2%"),
        width: wp("37.5%"),
        borderRadius: 60,
        paddingHorizontal: 18,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        borderColor:"#fff"
    },
    buttonRight: {
        marginLeft: wp("2%"),
        width: wp("37.5%"),
        borderRadius: 60,
        backgroundColor: "#C1864F",
        paddingHorizontal: 18,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center"
    }

});