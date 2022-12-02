import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/LoginFlow/LoginScreen"; 
import ForgetPassword from "../screens/LoginFlow/ForgetPassword";
import VerifyCode from "../screens/LoginFlow/VerifyCode";
import ChangePassword from "../screens/LoginFlow/ChangePassword";

 
const { Navigator, Screen } = createStackNavigator();


const LoginStack = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Screen name='Login' component={Login} /> 
            <Screen name='ForgetPassword' component={ForgetPassword} /> 
            <Screen name='VerifyCode' component={VerifyCode} /> 
            <Screen name='ChangePassword' component={ChangePassword} /> 
















        </Navigator>
    );
};

export default LoginStack;
