import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";

import LabelText from "../components/LabelText";
import { Formik } from "formik";
import * as Yup from "yup";
import Feather from 'react-native-vector-icons/Feather'
import Images from "../assets/Images";
import Button from "../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const validationSchema = Yup.object().shape({
    phone: Yup.string().max(10).min(10).required("Enter Your Phone Numer"),
    password: Yup.string().required("Password is Required"),
    fullname: Yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required(),
    email: Yup.string().email().required("Email is Required"),
    confirmpass: Yup.string().required("Confirm Password is Required").oneOf([Yup.ref('password'), null], 'Passwords must match'),


})

const Register = () => {
    const navigation = useNavigation();

    const [state, setState] = React.useState('0');
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [isSecureEntry1, setIsSecureEntry1] = useState(true);






    return (
        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.Header}>
                <Image source={Images.Registerheader} style={styles.image} />

            </View>
            <View style={styles.Footer}>
                <KeyboardAwareScrollView>
                    <View style={{ marginHorizontal: wp('5%') }}>
                        <Text style={styles.Footerheading}>Hello </Text>
                        <View style={styles.rowholder}>
                            <Text style={styles.Footersubheading}>CREATE AN</Text>
                            <Text style={styles.colortext}>ACCOUNT</Text></View>
                    </View>
                    <Formik
                        initialValues={{
                            phone: "",
                            password: "",
                            fullname: "",
                            confirmpass: "",
                            email: ""


                        }}
                        onSubmit={(values) => {

                            // navigation.navigate("VerifyCode", { Phone: values.phone })



                        }}

                        validationSchema={validationSchema}
                    >
                        {({ handleSubmit, values, errors, touched, handleChange }) => (
                            <>
                                <View style={{ marginTop: hp('1%') }}>
                                    <LabelText title="Full Name" />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Your Full name"
                                        value={values.fullname}
                                        onChangeText={handleChange('fullname')}
                                        placeholderTextColor={colors.black}

                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: "red",
                                            marginLeft: wp('12%'),
                                            marginTop: 5,
                                            marginBottom: hp("1%")

                                        }}
                                    >
                                        {errors.fullname}
                                    </Text>

                                    <LabelText title="Email Address" />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Your Email Address"
                                        keyboardType="email"
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        placeholderTextColor={colors.black}

                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: "red",
                                            marginLeft: wp('12%'),
                                            marginTop: 5,
                                            marginBottom: hp("1%")

                                        }}
                                    >
                                        {errors.email}
                                    </Text>

                                    <LabelText title="Mobile Number" />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Your Mobile Number"
                                        keyboardType="numeric"
                                        value={values.phone}
                                        onChangeText={handleChange('phone')}
                                        placeholderTextColor={colors.black}

                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: "red",
                                            marginLeft: wp('12%'),
                                            marginTop: 5,
                                            marginBottom: hp("1%")

                                        }}
                                    >
                                        {errors.phone}
                                    </Text>


                                </View>
                                <View style={{ marginTop: hp('0%') }}>
                                    <LabelText title="New Password" />
                                    <View style={styles.ViewContainer}>
                                        <TextInput
                                            style={styles.inputStyle}
                                            placeholder=""

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
                                            marginBottom: hp("1%")

                                        }}
                                    >
                                        {errors.password}
                                    </Text>

                                    <LabelText title="Confirm Password" />
                                    <View style={styles.ViewContainer}>
                                        <TextInput
                                            style={styles.inputStyle}
                                            placeholder=""

                                            placeholderTextColor={colors.lightColor} value={values.confirmpass} onChangeText={handleChange('confirmpass')}

                                            secureTextEntry={isSecureEntry1}

                                        />

                                        <TouchableOpacity onPress={() => { setIsSecureEntry1((prev) => !prev) }}>
                                            <Feather style={{}} size={20} color={colors.black} name={isSecureEntry1 ? 'eye-off' : 'eye'} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: "red",
                                            marginLeft: wp('15%'),
                                            marginTop: 5,

                                        }}
                                    >
                                        {errors.confirmpass}
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassword') }}>

                                </TouchableOpacity>
                                <View style={{ marginTop: hp('1%'), marginBottom: hp("1%") }}>
                                    <Button title="REGISTER" onPress={handleSubmit} />
                                    <View style={{flexDirection:'row',alignSelf:'center',marginTop:hp('2%')}}>
                                    <Text style={styles.Bottomtext}>Already have an account ?</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
                                    <Text style={styles.Bottomtexta}>Login</Text>
                                    </TouchableOpacity>

                                    </View>

                                </View>

                            </>
                        )}
                    </Formik>

                </KeyboardAwareScrollView>
            </View>



        </View>
    )
}
export default Register;

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
        top: -20,
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
        fontSize: 16,
        color:colors.black
    },
    buttontexta: {


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
        marginTop: hp("1")


    },
    forget: {
        color: '#C1864F',
        textAlign: 'center',
        fontFamily: fonts.POPPINS_MEDIUM,
        fontSize: 16

    },
    Bottomtext: {
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



