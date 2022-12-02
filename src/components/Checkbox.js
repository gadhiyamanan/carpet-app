import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
  
const CheckBox = (props) => {
    const iconName = props.isChecked ?
        "checkbox-marked-circle" : "checkbox-blank-circle";
  
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={27} color={props.color} />
            </Pressable>
        </View>
    );
};
  
export default CheckBox;
  
const styles = StyleSheet.create({
    container: {
       
    },
    
});