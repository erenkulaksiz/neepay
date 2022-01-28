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
import CloseIcon from '../../icons/close';
import PaymentsIcon from '../../icons/payments';
import NotificationsIcon from '../../icons/notifications';
import InfoIcon from '../../icons/info';
import PhoneIcon from '../../icons/phone';

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
                    style={{ flex: 1, justifyContent: "flex-end", margin: 0, }}
                >
                    <View style={{ width: "100%", backgroundColor: "white", paddingLeft: 24, paddingRight: 24, paddingTop: 24, borderTopRightRadius: 12, borderTopLeftRadius: 12 }}>
                        <View style={{ width: "100%", height: 32, alignItems: "flex-end", marginBottom: 16 }}>
                            <TouchableOpacity onPress={() => setTransferModalVisible(false)} style={{ width: 32, height: 32, backgroundColor: "#C4C4C4", borderRadius: 120, justifyContent: "center", alignItems: "center" }}>
                                <CloseIcon width={24} height={24} fill={"#000"} />
                            </TouchableOpacity>
                        </View>
                        <Button
                            text="Neepay Müşteri Numarası İle Gönder"
                            icon={<PaymentsIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 12, overflow: "visible" }}
                            onPress={() => {
                                setTransferModalVisible(false);
                                props.navigation.navigate("SendScreen", { type: "NO" });
                            }}
                        />
                        <Button
                            text="Telefon No İle Gönder"
                            icon={<PhoneIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 12, overflow: "visible" }}
                            onPress={() => {
                                setTransferModalVisible(false);
                                props.navigation.navigate("SendScreen", { type: "TEL" });
                            }}
                        />
                        <Button
                            text="QR Code"
                            icon={<QRIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 24, overflow: "visible" }}
                            onPress={() => { }}
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
