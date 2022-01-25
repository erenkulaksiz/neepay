import React, { useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Utils
import store from './store';

// Screens
import LandingScreen from './screens/landing';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import ConfirmScreen from './screens/confirm';
import RootScreen from './screens/root';
import ContactScreen from './screens/contact';

const persistor = persistStore(store);
const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef()

const App = (props) => {

    useEffect(() => {
        StatusBar.setBackgroundColor("#fff");
        StatusBar.setBarStyle('dark-content');
        SplashScreen.hide();
    }, [])

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator
                        initialRouteName="RootScreen"
                        screenOptions={{
                            ...TransitionPresets.SlideFromRightIOS,
                            headerShown: false,
                            gestureEnabled: true,
                        }}>
                        <Stack.Screen
                            name="LandingScreen"
                            component={LandingScreen}
                        />
                        <Stack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                        />
                        <Stack.Screen
                            name="RegisterScreen"
                            component={RegisterScreen}
                        />
                        <Stack.Screen
                            name="ConfirmScreen"
                            component={ConfirmScreen}
                        />
                        <Stack.Screen
                            name="RootScreen"
                            component={RootScreen}
                        />
                        <Stack.Screen
                            name="ContactScreen"
                            component={ContactScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider >
    );
};

export default App;
