import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import HomeFilledIcon from '../../icons/home_filled';
import HomeOutlineIcon from '../../icons/home_outline';

import QRIcon from '../../icons/qr';
import TransferIcon from '../../icons/transfer';

import HomeScreen from '../../screens/home';
import QRScreen from '../../screens/qr';

const Tab = createBottomTabNavigator();

const placeholder = () => <View />

// Styles
const RootScreen = (props) => {

    const CustomQRTab = ({ children, onPress }) => {


        return (<TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center", flex: 1, }}
            activeOpacity={0.8}
            onPress={onPress}>
            <LinearGradient colors={['#00A6E5', '#005272']} start={{ x: 0.0, y: 0.20 }} end={{ x: 0.40, y: 1.5 }} locations={[-2, 2]} style={{ width: 64, height: 64, borderRadius: 199, justifyContent: "center", alignItems: "center", position: "absolute", top: -32 }}>
                <View style={{ flex: 1, }}>{children}</View>
            </LinearGradient>
        </TouchableOpacity>)
    }

    return (
        <Tab.Navigator
            screenOptions={{
                "tabBarActiveTintColor": "#007AFF",
                "tabBarInactiveTintColor": "#8E8E93",
                headerShown: false,
            }}>
            <Tab.Screen name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Ana Sayfa",
                    tabBarIcon: ({ color, size }) => (
                        color == "#007AFF" ? <HomeFilledIcon width={32} height={32} fill={color} /> : <HomeOutlineIcon width={32} height={32} />
                    ),
                }}
            />
            <Tab.Screen name="QR"
                component={QRScreen}
                options={{
                    tabBarLabel: "QR İşlemleri",
                    tabBarIcon: ({ color, size }) => (
                        <QRIcon width={32} height={32} fill={"#fff"} />
                    ),
                    tabBarLabelStyle: {
                        position: "absolute",
                        left: -26,
                        bottom: -14,
                    },
                    tabBarButton: (props) => (<CustomQRTab {...props} />),

                }}
            />
            <Tab.Screen name="Transfer"
                options={{
                    tabBarLabel: "Transfer İşlemleri",
                    tabBarIcon: ({ color, size }) => (
                        <TransferIcon width={24} height={24} style={{ color }} />
                    ),
                }}
                component={placeholder}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        //navigation.navigate('CreateNew');
                    },
                })}
            />
        </Tab.Navigator>
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(RootScreen);
