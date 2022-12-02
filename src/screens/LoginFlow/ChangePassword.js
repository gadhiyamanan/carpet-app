import React, {  useEffect, useState } from "react";
import { StyleSheet, View, Image, StatusBar, SafeAreaView, Text, TouchableOpacity, TextInput } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../constants/fonts";
import LinearGradient from 'react-native-linear-gradient';
import Images from "../../assets/Images";
import { colors } from "../../config/Colors";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import LabelText from "../../components/LabelText";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Feather from 'react-native-vector-icons/Feather'



const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is Required"),
    confirmpass: Yup.string().required("Confirm Password is Required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
})
const ChangePassword= () => {
    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [isSecureEntry1, setIsSecureEntry1] = useState(true);  


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#101010', '#353139']} start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }} style={styles.header}>
                <StatusBar
                    animated={true}
                />
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={{ marginHorizontal: wp('5%'), marginTop: hp('8%') }}>
                    <Image source={Images.Arrow} style={{ width: wp('8%') }} />
                </TouchableOpacity>
            </LinearGradient>
            <View style={{ marginTop: hp('3%') }}>
                <Heading text="New Password" />
            </View>
            <SubHeading text="Create a new password and try to login" />
            <Formik
                initialValues={{
                    password: "",
                    confirmpass: ""


                }}
                onSubmit={(values) => {

                    // navigation.navigate("VerifyCode", { Phone: values.phone })



                }}

                validationSchema={validationSchema}
            >
                {({ handleSubmit, values, errors, touched, handleChange }) => (
                    <>
                        <View style={{ marginTop: hp('4%') }}>
                            <LabelText title="New Password" />
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
                                    marginTop: 5   ,
                                    marginBottom:hp('1%')      
                                      
                                }}
                            >
                                {errors.password}
                            </Text>
                        </View>
                        <View style={{ marginTop: hp('1%') }}>
                            <LabelText title="Confirm Password" />
                            <View style={styles.ViewContainer}>
                                <TextInput
                                    style={styles.inputStyle}       
                                    placeholder="*********"

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
                                    marginLeft: wp('12%'),
                                    marginTop: 5,
                                    marginBottom:hp('2%')

                                }}
                            >
                                {errors.confirmpass}
                            </Text>
                        </View>
                        <Button title="RESET PASSWORD" onPress={handleSubmit} />
                    </>
                )}
            </Formik>


        </SafeAreaView>

    )
}
export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        height: hp('15%')
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

})