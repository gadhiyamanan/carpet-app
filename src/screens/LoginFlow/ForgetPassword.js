import React, { useEffect } from "react";
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


const validationSchema = Yup.object().shape({
    phone: Yup.string().max(10).min(10).required("Enter Your Phone Numer"),
})
const ForgetPassword = () => {
    const navigation = useNavigation();


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
                <Heading text="Forgot Password" />
            </View>
            <SubHeading text="Don’t Warry, Please to enter your mobile number" />
            <Formik
                initialValues={{
                    phone: "",


                }}
                onSubmit={(values) => {

                    navigation.navigate("VerifyCode", { Phone: values.phone })



                }}

                validationSchema={validationSchema}
            >
                {({ handleSubmit, values, errors, touched, handleChange }) => (
                    <>
                        <View style={{ marginTop: hp('4%') }}>
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
                                    marginBottom:hp('2%')

                                }}
                            >
                                {errors.phone}
                            </Text>
                        </View>
                        <Button title="Submit" onPress={handleSubmit} />
                    </>
                )}
            </Formik>


        </SafeAreaView>

    )
}
export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        height: hp('15%')
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
    }

})