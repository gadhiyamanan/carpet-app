import React from "react";
import { StyleSheet, View ,Text} from "react-native";
import { useState } from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";


const MultiSelect = (props) => {
    const [Status, setStatus] = useState([]);
    console.log(Status);
    function SetStatusfunc(ss) {
        if (Status.includes(ss.id)) {
            const newone = Status.filter((dataid) => dataid != ss.id);
            return setStatus(newone);
        }
        setStatus([...Status, ss.id]);
    }
    return (
        <View style={styles.rowholder}>
             {props.data.map((data) => {
                return (
                    <TouchableOpacity
                        onPress={() => SetStatusfunc(data)}
                        style={[
                            Status.includes(data.id) ? styles.selected : styles.tabstyle,
                        ]}
                    >
                        <Text  style={[
                            Status.includes(data.id) ? styles.tabstext1 : styles.tabstext,
                        ]}>{data.size}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default MultiSelect;
const styles = StyleSheet.create({
   
    rowholder: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: wp("90%"),
        alignSelf: "center",
        marginTop: hp(".5%")
    },
    tabstyle: {
        backgroundColor: "#F6F6F6",
        borderRadius: 50,
        width: wp("25%"),
        paddingHorizontal: wp("2.5%"),
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:hp("1%"),
        marginHorizontal:wp('2%'),
        marginBottom:hp('1%')
    },
    selected: {
        backgroundColor:colors.btn,
        borderRadius: 50,
        width: wp("25%"),
        paddingHorizontal: wp("2.5%"),
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:hp("1%"),
        marginBottom:hp('1%'),

        marginHorizontal:wp('2%')

    },
    tabstext: {
        fontSize: 14,
        fontWeight: "400",
        color: "#28292A",
        fontFamily:fonts.POPPINS_REGULAR,
        fontStyle: "normal",
        textAlign: "center",
    },
    tabstext1: {
        fontSize: 14,
        fontWeight: "400",
        color: "#fff",
        fontFamily:fonts.POPPINS_REGULAR,
        fontStyle: "normal",
        textAlign: "center",
    },
});
