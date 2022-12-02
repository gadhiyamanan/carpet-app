import React, { FC, useEffect, useState } from "react";
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
import { StackNavigationProp } from '@react-navigation/stack';
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import LabelText from "../../components/LabelText";
import Button from "../../components/Button";
import VerifyForgetOTP from "../../components/VerifyOtp";



const VerifyCode = ({ route }) => {
    const navigation = useNavigation();
    const Phone = route.params.Phone;
    const [timerCount, setTimer] = useState(30)

    useEffect(() => {
        let interval = setInterval(() => {
          setTimer(lastTimerCount => {
              lastTimerCount <= 1 && clearInterval(interval)
              return lastTimerCount - 1
          })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
      }, []);


  
    

   


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
                <Heading text="Verify Code" />
            </View>
            <View >
                <Text style={styles.texta}>Enter the 4 digits code that you received on your mobile number {Phone}</Text>
            </View>
            <View style={{ marginTop: hp('4%') }}>
                <LabelText title="OTP Code" />
                <VerifyForgetOTP/>

            </View>
            <View style={{marginTop:hp('3%')}}>
            <Button title="Reset Password" onPress={() => navigation.navigate('ChangePassword')}/>
            </View>
            <View style={{marginTop:hp('3%')}}>
                <Text style={styles.code}>Resend code in <Text style={{color:'#C1864F'}}>00:{timerCount}</Text></Text>
            </View>


        </SafeAreaView>

    )
}
export default VerifyCode;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        height: hp('15%')
    },
   
    texta: {
        marginHorizontal:wp('5%'),
        fontSize:14,
        color:colors.lightColor,
        fontFamily:fonts.POPPINS_REGULAR,
        flexShrink:1,
        width:wp('80%'),
        letterSpacing:0.4
     },
     code:{
        fontSize:16,
        color:colors.black,
        fontFamily:fonts.POPPINS_REGULAR,
        textAlign:'center'

     }

})