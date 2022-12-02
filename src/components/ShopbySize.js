import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Images from "../assets/Images";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import MultiSelect from "./MultiSelect";
import Sbzh from "./Sbzh";

const Data = [
    {
        id: 1,
        size: "12x16"
    }, {
        id: 2,
        size: "16x16"
    }, 
    {
        id: 3,
        size: "12x16"
    }, {
        id: 4,
        size: "16x16"
    }, 
    {
        id: 5,
        size: "12x16"
    }, {
        id: 6,
        size: "16x16"
    }, 
   


]

const ShopbySize = (props) => {
    return (
        <View style={styles.mainholder}>
            <Sbzh title="SHOP BY SIZE (FT)" />
          <MultiSelect data={Data}/>

        </View>
    );
};

export default ShopbySize;

const styles = StyleSheet.create({
   
    mainholder: {
        backgroundColor: colors.White,
        paddingHorizontal: wp("1.5%"),
        marginTop: -hp("2.5%")
    }, 
});
