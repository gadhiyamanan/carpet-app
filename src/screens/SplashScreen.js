import React, { useEffect } from "react";
import { StyleSheet, View, Image, StatusBar, SafeAreaView } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import fonts from "../constants/fonts";
import LinearGradient from 'react-native-linear-gradient';
import Images from "../assets/Images";
import { colors } from "../config/Colors";

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Intro');
        }, 3500);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.White}
            />
            <View style={styles.imageholder}>
                <Image source={Images.Splashcenter} style={styles.logo} />
            </View>
            <View style={{ bottom: 0, position: 'absolute' }}>
                <Image source={Images.SplashLower} style={{ resizeMode: 'cover' }} />
            </View></SafeAreaView>

    )
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    logo: {
        marginTop: hp('17.5%'),
        width: wp('75%'),
        height: hp('35%'),
    },
    texta: {
        textAlign: 'center',
        marginTop: hp('2%'),
        fontSize: 28,
        color: colors.black,
        fontFamily: fonts.POPPINS_SEMI_BOLD
    },
    textb: {
        textTransform: 'uppercase',
        color: colors.darkgreen
    },
    imageholder: {
        justifyContent: "center",
        alignItems: "center"
    }
})