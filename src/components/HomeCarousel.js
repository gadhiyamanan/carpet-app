import React, {useEffect, useState} from "react";
import {
  Text, 
  View,
  SafeAreaView, 
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity} from 'react-native';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Carousel from 'react-native-snap-carousel';
import Images from "../assets/Images";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";

const { width: screenWidth } = Dimensions.get('window')


const DataCard = [
  {
      id: 1,
      currency: 'ERBE',
      price: '₹ 21,999.00',
      image:Images.Snap1

  },
  {
      id: 2,
      currency: 'ERBE',
      price: '₹ 21,999.00',
      image:Images.Snap1

  },
  {
      id: 3,
      currency: 'ERBE',
      price: '₹ 21,999.00',
      image:Images.Snap1

  }
]
const CardCarasol = ({item, index}) => {
  return (
      
      <View style={{marginTop:hp('3%'),marginBottom:hp('2%')}}>
          <ImageBackground source={item.image} resizeMode={'cover'} style={{width:wp('80%'),height:hp('50%'),alignSelf:'center'}} >
          <TouchableOpacity>
          <Image source={Images.Shopicon} style={styles.shopicon} />
          </TouchableOpacity>
          </ImageBackground>
          <View style={{alignSelf:'center',marginTop:hp('-6%')}}>
            <Text style={styles.curr}>{item.currency}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
      </View>
  )
}
const HomeCarousel =() => {
  const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const [entries, setEntries] = React.useState([]);

    useEffect(() => {
      setEntries(DataCard);
    }, []);
  return(
    <View>
        <Carousel
                    ref={isCarousel}    
                    data={DataCard}
                    renderItem={CardCarasol}                
                    sliderWidth={screenWidth}     
                    itemWidth={screenWidth - 150}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                    hasParallaxImages={true}

                />
    </View>
  )
}

export default HomeCarousel;

const styles =StyleSheet.create({
  curr:{
    textAlign:'center',
    fontSize:16,
    fontFamily:fonts.POPPINS_REGULAR,
    color:colors.black
  },
  price:{
    textAlign:'center',
    fontSize:20,
    fontFamily:fonts.POPPINS_MEDIUM,
    color:colors.black
  },
  shopicon:{
    position:'absolute',
    right:60,
    marginTop:hp('2.5%')
  }

})

