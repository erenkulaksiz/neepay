import React, { useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { getUniqueId } from 'react-native-device-info';
// Utils
import store from './store';

// Screens
import LandingScreen from './screens/landing';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import ConfirmScreen from './screens/confirm';
import RootScreen from './screens/root';
import ContactScreen from './screens/contact';
import SendScreen from './screens/send';
import SuccessScreen from './screens/success';
import QRMakeScreen from './screens/qrmake';

const persistor = persistStore(store);
const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef()

const App = (props) => {

    useEffect(() => {
        StatusBar.setBackgroundColor("#fff");
        StatusBar.setBarStyle('dark-content');

        setTimeout(async () => {
            const token = await store.getState().local.anon_token
            if (!token) {
                const uid = await getUniqueId();
                const formData = new FormData();
                formData.append("uniqueDeviceID", uid);
                const res = await fetch('https://api.neepay.co/authentication/anonymousLogin', {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    body: formData
                })
                    .then(response => response.json())
                    .catch(error => {
                        alert("An error occurred.");
                        console.log("error with reg: ", error)
                    });
                if (res.status == 100) {
                    await store.dispatch({ type: "SET_LOCAL_TOKEN", payload: res.token });
                    SplashScreen.hide();
                } else {
                    alert("An error occurred with register.");
                }
                console.log("res: ", res);
            } else {
                console.log("already found a token");
                SplashScreen.hide();
            }
        }, 500);
    }, [])

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator
                        initialRouteName="LandingScreen"
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
                        <Stack.Screen
                            name="SendScreen"
                            component={SendScreen}
                        />
                        <Stack.Screen
                            name="Success"
                            component={SuccessScreen}
                            options={{
                                gestureEnabled: false,
                            }}
                        />
                        <Stack.Screen
                            name="QRMakeScreen"
                            component={QRMakeScreen}
                            options={{
                                gestureEnabled: false,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider >
    );
};

export default App;
