import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomLabel from './CustomLabel';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../constants/fonts';
import { colors } from '../config/Colors';

const PriceSlider = () => {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 10000])

  const multiSliderValuesChange = (values) => setMultiSliderValue(values)
  return (
    <View style={{ alignSelf: 'center' }}>
      <MultiSlider
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={300}
        onValuesChange={multiSliderValuesChange}
        min={0}
        max={1000}
        step={1}
        allowOverlap
        smoothSnapped
        customLabel={CustomLabel}
        selectedStyle={{
          backgroundColor: '#C1864F',
        }}
        unselectedStyle={{
          backgroundColor: '#868686',
          opacity: 0.3
        }}

        trackStyle={{
          height: 5,
        }}
        markerStyle={{
          backgroundColor: '#C1864F',
          marginTop: heightPercentageToDP('1%'),
          width: 20,
          height: 20


        }}



      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text style={styles.price}>₹ {multiSliderValue[0]}</Text>
        <Text style={styles.price}>₹ {multiSliderValue[1]}</Text>

      </View>


    </View>



  );
};

export default PriceSlider;

const styles = StyleSheet.create({
  price: {
    fontSize: 14,
    fontFamily: fonts.POPPINS_REGULAR,
    color: colors.black,
    letterSpacing: 0.5
  }
})