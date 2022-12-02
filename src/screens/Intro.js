import React, { useEffect } from "react";
import { StyleSheet, View, Image, StatusBar, SafeAreaView, Text, TouchableOpacity } from "react-native";
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

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Intros = () => {
    const [state, setState] = React.useState('0');
    const navigation = useNavigation();

    function MyonBoarding() {

        if (state === "0") {
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar
                        animated={true}
                        backgroundColor="transparent"
                        translucent={true}
                    />
                    <View style={styles.head}>
                        <Image source={Images.BlackHeader} /></View>
                    <View style={styles.center}>
                        <Image source={Images.center} style={{ height: hp('60%') }} />
                    </View>
                    <View style={styles.foot}>
                        <View style={{ flexDirection: 'row', marginTop: hp('4%') }}>
                            <View style={{ marginHorizontal: wp('5%'), }}>
                                <Text style={styles.bold}>choose the
                                    <Text>{' '}</Text>
                                    <Image source={Images.Union} />
                                    <Text style={styles.bold}>{'\n'}of your choice to</Text>
                                    <Text style={styles.light}>{'\n'}DECORATE HOME</Text>
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('onBoardingScreen')}
                                style={{ position: 'absolute', right: 15 }}>
                                <Text style={styles.skip}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ right: 15, alignSelf: 'flex-end', marginTop: hp('3%') }} onPress={() => (setState('1'))}>
                            <View style={styles.backbtn}>
                                <AntDesign name="right" color={'#fff'} size={22} />
                            </View>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>




            )
        }

        if (state === "1") {

            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar
                        animated={true}
                        backgroundColor="transparent"
                        translucent={true}
                    />
                    <View style={styles.head}>
                        <Image source={Images.BlackHeader} /></View>
                    <View style={styles.center}>
                        <Image source={Images.Intro2} style={{ height: hp('60%') }} />
                    </View>
                    <View style={styles.foot}>
                        <View style={{ flexDirection: 'row', marginTop: hp('4%') }}>
                            <View style={{ marginHorizontal: wp('5%'), }}>
                                <Text style={styles.bold}>We Have
                                    <Text style={styles.bold}>{'\n'}a thousand</Text>
                                    <Text>{'\n'}</Text>
                                    <Image source={Images.Union} />
                                    <Text>{' '}</Text>
                                    <Text style={styles.light}>products</Text>
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('onBoardingScreen')} style={{ position: 'absolute', right: 20 }}>
                                <Text style={styles.skip}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: wp('4%') }}>
                            <TouchableOpacity onPress={() => (setState('0'))} style={{ alignSelf: 'center' }}>
                                <AntDesign name="left" color={'#868686'} size={22} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => (setState('2'))}>
                                <View style={styles.backbtn}>
                                    <AntDesign name="right" color={'#fff'} size={22} style={{ alignSelf: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </SafeAreaView>
            )
        }

        if (state === "2") {
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar
                        animated={true}
                        backgroundColor="transparent"
                        translucent={true}
                    />
                    <View style={styles.head}>
                        <Image source={Images.BlackHeader} /></View>
                    <View style={styles.center}>
                        <Image source={Images.Intro3} style={{ height: hp('60%') }} />
                    </View>
                    <View style={styles.foot}>
                        <View style={{ flexDirection: 'row', marginTop: hp('4%') }}>
                            <View style={{ marginHorizontal: wp('5%'), }}>
                                <Text style={styles.bold}>Intelligent
                                    <Text style={styles.bold}>{'\n'}Search and</Text>
                                    <Text>{'\n'}</Text>
                                    <Text style={styles.light}>Selection</Text>
                                    <Text>{' '}</Text>
                                    <Text style={styles.bold}>of</Text>
                                    <Text>{' '}</Text>

                                    <Image source={Images.Union} />
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('onBoardingScreen')} style={{ position: 'absolute', right: 20 }}>
                                <Text style={styles.skip}>Skip</Text>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity onPress={() => navigation.navigate('onBoardingScreen')}>
                            <View style={styles.backbtn}>
                                <AntDesign name="right" color={'#fff'} size={22} style={{ alignSelf: 'center' }} />
                            </View>
                        </TouchableOpacity>
                        {/* </View>  */}

                    </View>
                </SafeAreaView>
            )
        }
    }
    return (
        <View style={styles.container}>
            {MyonBoarding()}
        </View>
    )
}



export default Intros;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    bold: {
        fontSize: 22,
        color: colors.black,
        fontFamily: fonts.LORA_SEMI_BOLD,
        textTransform: 'uppercase',
        lineHeight: hp('5%')
    },
    light: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.POPPINS_LIGHT,
        textTransform: 'uppercase',
        letterSpacing: 0.7,
        marginTop: hp('0.5%')

    },
    skip: {

        fontSize: 16,
        color: '#C1864F',
        textTransform: 'uppercase',
        fontFamily: fonts.POPPINS_MEDIUM

    },
    backbtn: {
        backgroundColor: '#C1864F',
        width: wp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        padding: wp('2%')
    }
})