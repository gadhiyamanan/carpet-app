import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from "./Checkbox";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
  
const ColorsCheck = (props) => {
    const [first, setFirst] = useState(false);
      const [second, setSecond] = useState(false);
      const [third, setThird] = useState(false);
      const [forth, setForth] = useState(false);
      const [five, setFive] = useState(false);
      const [six, setSix] = useState(false);
      const [seven, setSeven] = useState(false);
      const [eight, setEight] = useState(false);
  
   
    return (
        <View style={styles.container}>
        <CheckBox
            onPress={() => setFirst(!first)}
            isChecked={first}
            color={'#BAF2FF'}
          />
          <CheckBox
            onPress={() => setSecond(!second)}
            isChecked={second}
            color={'#F8B6C3'}

          />
          <CheckBox
            onPress={() => setThird(!third)}
            isChecked={third}
            color={'#354B77'}

          />
           <CheckBox
            onPress={() => setForth(!forth)}
            isChecked={forth}
            color={'#357747'}
          />
          <CheckBox
            onPress={() => setFive(!five)}
            isChecked={five}
            color={'#723577'}

          />
          <CheckBox
            onPress={() => setSix(!six)}
            isChecked={six}
            color={'#773535'}

          />
           <CheckBox
            onPress={() => setSeven(!seven)}
            isChecked={seven}
            color={'#775D35'}

          />
          <CheckBox
            onPress={() => setEight(!eight)}
            isChecked={eight}
            color={'#E9B738'}

          />
    </View>
    );
};
  
export default ColorsCheck;
  
const styles = StyleSheet.create({
    container:{
        marginTop: hp('1%'), 
        flexDirection: 'row',
        justifyContent:'space-around',
         

    }
   
    
});