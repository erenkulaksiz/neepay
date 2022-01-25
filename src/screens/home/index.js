import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import WalletPlusIcon from '../../icons/wallet_plus';
import WalletNegativeIcon from '../../icons/wallet_negative';
import LinkIcon from '../../icons/link';
import ArrowRight from '../../icons/arrow_right';
import ShoppingIcon from '../../icons/shopping';
import BankIcon from '../../icons/bank';
import ArrowLeft from '../../icons/arrow_left';
import NotificationsIcon from '../../icons/notifications';
import InfoIcon from '../../icons/info';

import MenuIcon from '../../icons/menu';

import LogoSm from '../../images/logo_sm.png';
import Avatar from '../../images/avatar.png';

const { width } = Dimensions.get("window");

const styles2 = StyleSheet.create({
    sideMenuStyle: {
        margin: 0,
        width: width * 0.75 // SideMenu width
    }
});

const HomeScreen = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", height: 80, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: "row", borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0 }}>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start" }}>
                    <TouchableOpacity style={{ marginLeft: 8, padding: 10 }} activeOpacity={0.6} onPress={() => setModalVisible(true)}>
                        <View style={{ position: "absolute", width: 16, height: 16, backgroundColor: "#CD1D1D", right: 8, top: 12, zIndex: 2, borderRadius: 32, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 8 }}>
                                2
                            </Text>
                        </View>
                        <MenuIcon width={36} height={36} fill={"#000"} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                    <Image source={LogoSm} style={{ width: 24, height: 50, }} />
                </View>
                <View style={{ flex: 33, justifyContent: "center" }}>
                    <TouchableOpacity style={{ alignItems: "center" }} activeOpacity={0.6}>
                        <Image source={Avatar} style={{ width: 46, height: 46, }} />
                        <Text style={{ color: "#5A5A5A" }}>Hesap</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: "100%", height: 100, flexDirection: "row", paddingLeft: 24, paddingRight: 24 }}>
                <View style={{ flex: 50, }}>
                    <View style={{ flex: 50, justifyContent: "flex-end" }}>
                        <Text style={{ color: "#848484", fontSize: 24 }}>Bakiye</Text>
                    </View>
                    <View style={{ flex: 50 }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 36 }}>₺420,20</Text>
                    </View>
                </View>
                <View style={{ flex: 50, }}>
                    <View style={{ flex: 50, justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <Text style={{ color: "#848484", fontSize: 14 }}>Neepay Numarası</Text>
                    </View>
                    <View style={{ flex: 70, flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start" }}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: "#0094FF", fontSize: 16 }}>1234567890</Text>
                            <LinkIcon width={18} height={18} fill={"#0094FF"} style={{ marginLeft: 4 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ width: "100%", height: 60, paddingLeft: 24, paddingRight: 24, marginTop: 10 }}>
                <LinearGradient style={{ flex: 1, borderRadius: 9, flexDirection: "row", paddingTop: 10, paddingBottom: 10 }} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }}>
                    <View style={{ flex: 50, borderRightColor: "white", borderRightWidth: 1 }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <WalletPlusIcon width={20} height={20} fill={"#fff"} style={{}} />
                            <Text style={{ color: "white", marginLeft: 8, fontSize: 18, fontWeight: "bold" }}>Yatır</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 50 }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <WalletNegativeIcon width={20} height={20} fill={"#fff"} style={{}} />
                            <Text style={{ color: "white", marginLeft: 8, fontSize: 18, fontWeight: "bold" }}>Çek</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
            <View style={{ flex: 1, paddingLeft: 24, paddingRight: 24, marginTop: 24 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14, color: "#696969" }}>SON İŞLEMLER</Text>
                        <ArrowRight width={14} height={14} fill={"#696969"} style={{ marginLeft: 8, marginRight: 8 }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: "#696969", flex: 1, height: 1 }} />
                </View>
                <ScrollView style={{ flex: 1, paddingTop: 18 }}>
                    <TouchableOpacity style={{ width: "100%", height: 74, borderRadius: 9, borderWidth: 1, borderStyle: "solid", borderColor: "#C7C7C7", flexDirection: "row" }}>
                        <View style={{ flex: 30, justifyContent: "center", alignItems: "center" }}>
                            <ShoppingIcon width={32} height={32} />
                        </View>
                        <View style={{ flex: 80, justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>Alışveriş</Text>
                            <Text>21 Ocak 12:38 PM</Text>
                        </View>
                        <View style={{ flex: 30, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ marginRight: 8, color: "#E36E34", fontSize: 14, fontWeight: "600" }}>- ₺25.00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "100%", height: 74, marginTop: 14, borderRadius: 9, borderWidth: 1, borderStyle: "solid", borderColor: "#C7C7C7", flexDirection: "row" }}>
                        <View style={{ flex: 30, justifyContent: "center", alignItems: "center" }}>
                            <BankIcon width={32} height={32} />
                        </View>
                        <View style={{ flex: 80, justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>Banka Transferi</Text>
                            <Text>21 Ocak 11:21 PM</Text>
                        </View>
                        <View style={{ flex: 35, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ marginRight: 8, color: "#578D3C", fontSize: 14, fontWeight: "600" }}>+ ₺200.00</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                swipeDirection={["left"]}
                useNativeDriver
                propagateSwipe
                onBackButtonPress={() => setModalVisible(false)}
                style={styles2.sideMenuStyle}>
                <View style={{ flex: 1, backgroundColor: "white", paddingLeft: 24, paddingRight: 24, paddingTop: 24, }}>
                    <TouchableOpacity style={{ width: "100%", alignItems: "flex-end" }} onPress={() => setModalVisible(false)}>
                        <ArrowLeft width={40} height={40} fill={"#000"} style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                    <Button
                        text="Bildirimler"
                        icon={<NotificationsIcon width={24} height={24} fill="#fff" />}
                        style={{ marginBottom: 24, marginTop: 24, overflow: "visible" }}
                        onPress={() => { }}
                    />
                    <Button
                        text="İletişim"
                        icon={<InfoIcon width={24} height={24} fill="#fff" />}
                        style={{ marginBottom: 48, overflow: "visible" }}
                        onPress={() => {
                            setModalVisible(false);
                            props.navigation.navigate("ContactScreen");
                        }}
                    />
                </View>
            </Modal>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(HomeScreen);
