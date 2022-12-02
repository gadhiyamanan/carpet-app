import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NativeBaseProvider } from "native-base";
import { Image, View, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import HomeStack from '../navigation/HomeStack';
import { colors } from '../config/Colors';
import Images from '../assets/Images';
import fonts from '../constants/fonts';
import CategoryTab from './CategoryTab';
import OffersTab from './OffersTab';
import ProfileScreen from './ProfileScreen';
const Tab = createBottomTabNavigator();

const Bottomtab = () => {

    return (
        <NativeBaseProvider>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,


                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: "absolute",
                        padding: 5,

                        paddingBottom: 12,
                        height: heightPercentageToDP("14%"),
                        backgroundColor: colors.black,
                        paddingHorizontal: widthPercentageToDP("2%"),
                        paddingVertical: heightPercentageToDP("1%"),


                    },
                    tabBarHideOnKeyboard: true

                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarHideOnKeyboard: true,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    {focused ?
                                        <View
                                            style={{
                                                backgroundColor: '#C1864F',
                                                width: wp('10%'),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 12,
                                                padding: wp('2%')
                                            }}
                                        >
                                            <Image
                                                source={Images.Home}

                                            />
                                        </View>
                                        :
                                        <Image
                                            source={Images.Home}

                                        />
                                    }
                                    {
                                        focused ?
                                            <Text style={{ color: '#C1864F', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Home</Text> :
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Home</Text>
                                    }
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="CategoryTab"
                    component={CategoryTab}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    {focused ?
                                        <View
                                            style={{
                                                backgroundColor: '#C1864F',
                                                width: wp('10%'),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 12,
                                                padding: wp('2%')
                                            }}
                                        >
                                            <Image
                                                source={Images.Category}

                                            />
                                        </View>
                                        :
                                        <Image
                                            source={Images.Category}

                                        />
                                    }
                                    {
                                        focused ?
                                            <Text style={{ color: '#C1864F', fontSize: 11, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Category</Text> :
                                            <Text style={{ color: '#fff', fontSize: 11, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Category</Text>
                                    }
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Tasks"
                    component={HomeStack}
                    options={{
                        tabBarHideOnKeyboard: true,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    {focused ?
                                        <View
                                            style={{
                                                backgroundColor: '#C1864F',
                                                width: wp('10%'),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 12,
                                                padding: wp('2%')
                                            }}
                                        >
                                            <Image
                                                source={Images.Bag}

                                            />
                                        </View>
                                        :
                                        <Image
                                            source={Images.Bag}

                                        />
                                    }
                                    {
                                        focused ?
                                            <Text style={{ color: '#C1864F', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Cart</Text> :
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Cart</Text>
                                    }
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="OffersTab"
                    component={OffersTab}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    {focused ?
                                        <View
                                            style={{
                                                backgroundColor: '#C1864F',
                                                width: wp('10%'),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 12,
                                                padding: wp('2%')
                                            }}
                                        >
                                            <Image
                                                source={Images.Discount}

                                            />
                                        </View>
                                        :
                                        <Image
                                            source={Images.Discount}

                                        />
                                    }
                                    {
                                        focused ?
                                            <Text style={{ color: '#C1864F', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Offers</Text> :
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Offers</Text>
                                    }

                                </View>
                            );
                        },
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    {focused ?
                                        <View
                                            style={{
                                                backgroundColor: '#C1864F',
                                                width: wp('10%'),
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 12,
                                                padding: wp('2%')
                                            }}
                                        >
                                            <Image
                                                source={Images.Profile}

                                            />
                                        </View>
                                        :
                                        <Image
                                            source={Images.Profile}

                                        />
                                    }
                                    {
                                        focused ?
                                            <Text style={{ color: '#C1864F', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Account</Text> :
                                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: fonts.POPPINS_REGULAR, marginTop: hp('0.7%') }}>Account</Text>
                                    }

                                </View>
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NativeBaseProvider>
    );
};

export default Bottomtab;

