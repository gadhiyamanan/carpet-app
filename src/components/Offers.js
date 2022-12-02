import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import Images from "../assets/Images";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";

const { width: screenWidth } = Dimensions.get('window')


const DataCard = [
    {
        id: 1,
        image: Images.Discountt

    },
    {
        id: 2,
        image: Images.Discountt


    },
    {
        id: 3,
        image: Images.Discountt


    }
]
const CardCarasol = ({ item, index }) => {
    return (

        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
            <Image source={item.image} />
        </View>
    )
}
const Offers = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const [entries, setEntries] = React.useState([]);

    useEffect(() => {
        setEntries(DataCard);
    }, []);
    return (
        <View style={{marginTop:hp('-10%')}}>
            <Carousel
                ref={isCarousel}
                data={DataCard}
                renderItem={CardCarasol}
                sliderWidth={screenWidth}
                itemWidth={screenWidth-50}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
                hasParallaxImages={true}

            />
                    <View style={{marginTop:hp('-4%')}}>

            <Pagination
                dotsLength={entries.length}

                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 30,
                    height: 10,
                    borderRadius: 50,
                    marginHorizontal: -5,
                    backgroundColor: '#361F07'
                }}
                inactiveDotColor={'#868686'}
                inactiveDotStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    marginHorizontal: -10,
                    backgroundColor: '#361F07'
                }}
                activedotStyle={{
                    width: 40,
                    height: 20,
                  
                }}
                

                tappableDots={true}
            />
            </View>
        </View>
    )
}

export default Offers;

const styles = StyleSheet.create({
    curr: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.POPPINS_REGULAR,
        color: colors.black
    },
    price: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.POPPINS_MEDIUM,
        color: colors.black
    },
    shopicon: {
        position: 'absolute',
        right: 60,
        marginTop: hp('2.5%')
    }

})

