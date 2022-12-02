import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Pressable, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import fonts from "../constants/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from "react-native-image-crop-picker";
import LabelText from "../components/LabelText";
import Button from "../components/Button";



const EditProfile = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState('https://raw.githubusercontent.com/ali909-oss/images/master/Profileimg-removebg-preview.png');
    const [mail, setMail] = useState('jonejacob@gmail.com');
    const [phone, setPhone] = useState('+91 - 6549874665');
    const [address, setAddress] = useState('8502 Preston Rd. Inglewood, Maine 98380');




    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });

    }

    return (
        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />


            <Image source={Images.BlackHeader} />
            <ImageBackground resizeMode={"cover"} source={Images.CircleTop} style={{ position: 'absolute', right: 0, width: wp('70%'), height: hp('25%') }} />

            <View style={styles.Headercontainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.Arrow} />
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={styles.headertitle}>Edit Profile</Text>
                </View>
                <View></View>

            </View>
            <View style={{ alignSelf: 'center', marginTop: hp('5%') }}>
                <View>
                    <TouchableOpacity style={styles.camera} onPress={choosePhotoFromLibrary}>
                        <Image source={Images.Camera} />
                    </TouchableOpacity>

                    <Image source={{ uri: image }}
                        style={styles.userimg}
                    />
                </View>

            </View>
            <View style={{marginTop:hp('4%')}}>
                <LabelText title="Email" />
                <TextInput
                    style={styles.input}
                    keyboardType="email"
                    value={mail}
                    onChangeText={text => setMail(text)}

                />
            </View>
            <View style={{marginTop:hp('2%')}}>
                <LabelText title="Mobile" />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={phone}
                    onChangeText={text => setPhone(text)}

                />
            </View>
            <View style={{marginTop:hp('2%')}}>
                <LabelText title="Address" />
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={text => setAddress(text)}

                />
            </View>
            <View style={{marginTop:hp('8%')}}>
            <Button title={'Update Profile'} onPress={() => navigation.navigate('ViewProfile')}/>
            </View>
        </View>
    )
}
export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    Headercontainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 70


    },
    rightrow: {
        flexDirection: "row",

    },
    headertitle: {


        fontFamily: fonts.POPPINS_MEDIUM,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
        color: colors.White,
        alignSelf: 'center',
        marginLeft: 15


    },

    userimg: {
        width: wp('34%'), height: hp('17%'), borderRadius: 10,
        resizeMode: 'cover'

    },
    camera: {
        position: 'absolute',
        zIndex: 5,
        right: -5,
        marginTop: hp('5%')

    },
    input: {
        width: wp('85%'),
        backgroundColor: '#F6F6F6',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: hp('1%'),
        padding: wp('4%'),
        paddingHorizontal: wp('6%'),
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.POPPINS_REGULAR,
    },
})