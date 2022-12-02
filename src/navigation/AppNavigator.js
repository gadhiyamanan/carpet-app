import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import onBoardingScreen from '../screens/onBoardingScreen';
import LoginStack from './LoginStck';
import Register from '../screens/Register';
import Intro from '../screens/Intro';
import Bottomtab from '../screens/BottomTab';
import AllCategories from '../screens/AllCategories';
import ProductListing from '../screens/ProductListing';
import ProductDetail from '../screens/ProductDetails';
import ReviewsScreen from '../screens/ReviewsScreen';
import OrderComplete from '../screens/OrderComplete';
import Notification from '../screens/NotificationScreen';
import Wishlist from '../screens/Wishlist';
import ProfileScreen from '../screens/ProfileScreen';
import Settings from '../screens/Settings';
import ViewProfile from '../screens/ViewProfile';
import EditProfile from '../screens/EditProfile';
import MyAddress from '../screens/MyAddress';




const { Navigator, Screen } = createStackNavigator();
    
const AppNavigator = () => (
    <Navigator screenOptions={{ headerShown: false, }} >

<Screen name='SplashScreen' component={SplashScreen} />
        <Screen name='onBoardingScreen' component={onBoardingScreen} />  
        <Screen name='LoginStack' component={LoginStack} />        
        <Screen name='Register' component={Register} />
        <Screen name='Intro' component={Intro} />
        <Screen name='Bottomtab' component={Bottomtab}/>
        <Screen name='AllCategories' component={AllCategories}/>
        <Screen name='ProductListing' component={ProductListing}/>
        <Screen name='ProductDetail' component={ProductDetail}/>
        <Screen name='ReviewsScreen' component={ReviewsScreen}/>
        <Screen name='OrderComplete' component={OrderComplete}/>
        <Screen name='Notification' component={Notification}/>
        <Screen name='Wishlist' component={Wishlist}/>
        <Screen name='Settings' component={Settings}/>
        <Screen name='ViewProfile' component={ViewProfile}/>
        <Screen name='EditProfile' component={EditProfile}/>
        <Screen name='MyAddress' component={MyAddress}/>







    </Navigator>
);
export default AppNavigator;
