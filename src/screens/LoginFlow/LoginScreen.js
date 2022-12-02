import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, ScrollView } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../config/Colors";
import fonts from "../../constants/fonts";
import Images from "../../assets/Images";

import Button from "../../components/Button";
import Textinput from "../../components/Textinput";
import LabelText from "../../components/LabelText";
import { Formik } from "formik";
import * as Yup from "yup";
import Feather from 'react-native-vector-icons/Feather'

const validationSchema = Yup.object().shape({
    phone: Yup.string().max(10).min(10).required("Enter Your Phone Numer"),
    password: Yup.string().required("Password is Required"),

})

const LoginScreen = () => {
    const navigation = useNavigation();

    const [state, setState] = React.useState('0');
    const [isSecureEntry, setIsSecureEntry] = useState(true);





    return (
        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.Header}>
                <Image source={Images.loginheader} style={styles.image} />

            </View>
            <View style={styles.Footer}>
                <ScrollView>
                <View style={{ marginHorizontal: wp('5%') }}>
                    <Text style={styles.Footerheading}>Welcome </Text>
                    <View style={styles.rowholder}>
                        <Text style={styles.Footersubheading}>LOGIN YOUR</Text>
                        <Text style={styles.colortext}>ACCOUNT</Text></View>
                </View>
                <Formik
                    initialValues={{
                        phone: "",
                        password: ""


                    }}
                    onSubmit={(values) => {

                    navigation.navigate('Bottomtab')


                    }}

                    validationSchema={validationSchema}
                >
                    {({ handleSubmit, values, errors, touched, handleChange }) => (
                        <>
                            <View style={{ marginTop: hp('1%') }}>
                                <LabelText title="Mobile Number" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Your Number"
                                    keyboardType="numeric"
                                    value={values.phone}
                                    onChangeText={handleChange('phone')}

                                />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        color: "red",
                                        marginLeft: wp('12%'),
                                        marginTop: 5,
                                        marginBottom: hp('1%')

                                    }}
                                >
                                    {errors.phone}
                                </Text>
                            </View>
                            <View style={{ marginTop: hp('0%') }}>
                                <LabelText title="Password" />
                                <View style={styles.ViewContainer}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="*********"

                                        placeholderTextColor={colors.lightColor} value={values.password} onChangeText={handleChange('password')}

                                        secureTextEntry={isSecureEntry}

                                    />
                                    <TouchableOpacity onPress={() => { setIsSecureEntry((prev) => !prev) }}>
                                        <Feather style={{}} size={20} color={colors.black} name={isSecureEntry ? 'eye-off' : 'eye'} />
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 13,
                                        color: "red",
                                        marginLeft: wp('12%'),
                                        marginTop: 5,
                                        marginBottom: hp('1%')

                                    }}
                                >
                                    {errors.password}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassword') }}>
                                <Text style={styles.forget}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: hp('2%') }}>
                                <Button title="LOGIN" onPress={handleSubmit} />
                            </View>

                        </>
                    )}
                </Formik>
                <View style={{ marginTop: hp('2%') }}>
                    <Text style={styles.or}>OR</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: wp('30%'), marginTop: hp('1%') }}>
                        <TouchableOpacity style={styles.backsocial}>
                            <Image source={Images.Google} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backsocial}>
                            <Image source={Images.Fb} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: hp('2%') }}>
                    <Text style={styles.Bottomtext}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.Bottomtexta}>Register</Text>
                    </TouchableOpacity>

                </View>

                </ScrollView>

            </View>


        </View>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },


    Header: {
        flex: 3,
    },
    Footer: {
        flex: 6,
        backgroundColor: colors.White,
        borderRadius: 30,
        top: -30,
    },
    image: {
        height: '100%'
    },
    Footerheading: {

        color: colors.footertext,

        fontFamily: fonts.POPPINS_LIGHT,
        fontStyle: "normal",
        fontWeight: '300',
        fontSize: 22,
        marginTop: hp("5%")


    },
    Footersubheading: {
        fontFamily: fonts.POPPINS_MEDIUM,
        color: colors.footersub,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 24,

    },
    rowholder: {
        flexDirection: "row",

        marginTop: -hp(".5%")
    },
    colortext: {
        color: "#C1864F",
        fontFamily: "poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 24,
        marginLeft: wp("2%"),
        marginRight: wp("2%"),
    },
    largetext: {

        fontFamily: fonts.POPPINS_REGULAR,
        color: "#868686",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        marginTop: hp("3%")

    },
    buttonrow: {
        display: "flex",
        flexDirection: "row",
        marginTop: hp("5%")

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
        color: "#101010"
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
        backgroundColor: "#FFF4EB",
        paddingHorizontal: 18,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonRight: {
        marginLeft: wp("2%"),
        width: wp("37.5%"),
        borderRadius: 60,
        backgroundColor: "#C1864F",
        paddingHorizontal: 18,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: wp('85%'),
        backgroundColor: '#F6F6F6',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: hp('1%'),
        padding: wp('4%'),
        paddingHorizontal: wp('6%'),
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.POPPINS_REGULAR,
    },
    ViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        width: wp('85%'),
        padding: wp('1%'),
        alignSelf: 'center',
        borderRadius: 60,
        marginTop: hp('1%'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp('4%'),
    },
    inputStyle: {
        flex: 1,
        color: colors.black,
        fontFamily: fonts.POPPINS_REGULAR,
        fontSize: 18,


    },
    forget: {
        color: '#C1864F',
        textAlign: 'center',
        fontFamily: fonts.POPPINS_MEDIUM,
        fontSize: 16

    },
    or: {
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        color: '#868686',
        alignSelf: 'center'
    },
    backsocial: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        width: wp('13%'),
        borderRadius: 50,
        padding: wp('3%')
    }, Bottomtext: {
        fontFamily: fonts.POPPINS_MEDIUM,
        fontSize: 16,
        color:colors.black
    },
    Bottomtexta: {
        fontFamily: fonts.POPPINS_MEDIUM,
        fontSize: 16,
        color:colors.btn,
        marginHorizontal:wp('1.5%')
    }





})