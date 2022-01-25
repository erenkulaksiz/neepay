import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, StatusBar, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

import HomeFilledIcon from '../../icons/home_filled';
import HomeOutlineIcon from '../../icons/home_outline';

import QRIcon from '../../icons/qr';
import TransferIcon from '../../icons/transfer';

import NotificationsIcon from '../../icons/notifications';
import InfoIcon from '../../icons/info';
import HomeScreen from '../../screens/home';
import QRScreen from '../../screens/qr';

import Button from '../../components/button';

const Tab = createBottomTabNavigator();

const placeholder = () => <View />


const { height } = Dimensions.get("window");


// Styles
const RootScreen = (props) => {

    const [transferModalVisible, setTransferModalVisible] = useState(false);

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
        <>
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
                            setTransferModalVisible(true);
                            //navigation.navigate('CreateNew');
                        },
                    })}
                />
            </Tab.Navigator>
            <View>
                <Modal
                    isVisible={transferModalVisible}
                    onBackdropPress={() => setTransferModalVisible(false)}
                    onBackButtonPress={() => setTransferModalVisible(false)}
                    onSwipeComplete={() => setTransferModalVisible(false)}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    swipeDirection="down"
                    useNativeDriver={true}
                    style={{ flex: 1, justifyContent: "flex-end", margin: 0 }}
                >
                    <View style={{ height: "30%", width: "100%", backgroundColor: "white", paddingLeft: 24, paddingRight: 24, paddingTop: 24, }}>
                        <Button
                            text="Bildirimler"
                            icon={<NotificationsIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 24, marginTop: 12, overflow: "visible" }}
                            onPress={() => { }}
                        />
                        <Button
                            text="İletişim"
                            icon={<InfoIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 24, overflow: "visible" }}
                            onPress={() => {
                                setModalVisible(false);
                                props.navigation.navigate("ContactScreen");
                            }}
                        />
                    </View>
                </Modal>
            </View>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(RootScreen);
