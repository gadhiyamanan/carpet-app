import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import fonts from "../constants/fonts";
import Button from "../components/Button";


const OrderComplete = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
            <ImageBackground resizeMode={"cover"} source={Images.CircleTop} style={{ position: 'absolute', right: 0, width: wp('70%'), height: hp('40%') }} />
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Image source={Images.Check}/>
                <Text style={styles.texta}>Thank You!</Text>
                <Text style={styles.textb}>Your order is completed.{'\n'}Please check the delivery status {'\n'}at order history page.</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
                <Button title={'GO TO HOME'} onPress={() => navigation.navigate('Home')}/>
            </View>
        </View>
    )
}

export default OrderComplete;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    texta:{
        fontSize:24,
        fontFamily:fonts.LORA_SEMI_BOLD,
        marginTop:hp('3%'),
        color:'#fff'

    },
    textb:{
       fontSize:14,
       fontFamily:fonts.POPPINS_REGULAR,
       color:'#fff',
       textAlign:'center',
       marginTop:hp('2%'),
       lineHeight:hp('3.5%')
    }

})
