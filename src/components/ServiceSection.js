import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Images from "../assets/Images";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";


const ServiceSection = (props) => {
    return (
        <View style={styles.mainholder}>
            <View style={styles.rowholder}>
                <View>
                    <Image source={Images.s1} style={{ marginBottom: 15 }} />
                    <Text style={styles.text}>Best</Text>
                    <Text style={styles.text}>Service</Text>
                </View>

                <View>
                    <Image source={Images.s2} style={{ marginBottom: 15 }} />
                    <View style={{ marginLeft: -wp("1.5%") }}>
                        <Text style={styles.text}>100%</Text>
                        <Text style={styles.text}>Authentic</Text></View>
                </View>

                <View>
                    <Image source={Images.s3} style={{ marginBottom: 15 }} />
                    <Text style={styles.text}>Fastest</Text>
                    <Text style={styles.text}>Delivery</Text>
                </View>

            </View>
        </View>
    );
};

export default ServiceSection;

const styles = StyleSheet.create({
    container: {},
    mainholder: {
        backgroundColor: colors.White,
        paddingHorizontal: wp("1.5%"),
        marginTop: hp("2.5%")
    }, rowholder: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    text: { 
        
        fontFamily: fonts.POPPINS_MEDIUM,
        fontWeight: "400",
        fontSize: 15,
        color: colors.GENERALTEXT,
        textAlign: "center",
        marginTop: -hp("1")

    }
});
