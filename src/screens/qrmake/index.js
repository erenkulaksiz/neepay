import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, StyleSheet, StatusBar, CameraRoll, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import PagerView from 'react-native-pager-view';
import { RNHoleView } from 'react-native-hole-view';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-community/clipboard';
import RNFS from "react-native-fs"

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import ArrowRightIcon from '../../icons/arrow_right';
import ArrowLeft from '../../icons/arrow_left';
import LinkIcon from '../../icons/link';
import CheckIcon from '../../icons/check';

import LogoSm from '../../images/logo_sm.png';

const QRMakeScreen = (props) => {
    const [qrPos, setQrPos] = useState(0);

    const [tutar, setTutar] = useState(5);

    const [generated, setGenerated] = useState(false);

    const pager = useRef(PagerView);

    const currencyFormat = (num) => {
        return '₺' + parseInt(num).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const generateQr = () => {
        setGenerated(true);
    }
    useEffect(() => {

        console.log("params: ", props.route.params);
    }, []);


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <PagerView style={styles.pagerView}
                initialPage={0}
                onPageSelected={(e) => {
                    setQrPos(e.nativeEvent.position);
                }}
                scrollEnabled={props.route.params.type != "PAY"}
                ref={pager}>
                <View key="1">
                    <View style={{ width: "100%", height: 80, flexDirection: "row", backgroundColor: "white", zIndex: 2, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0, borderBottomWidth: 0 }}>
                        <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start", }}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <ArrowLeft width={40} height={40} fill={"#000"} style={{ marginLeft: 4 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                            <Image source={LogoSm} style={{ width: 24, height: 50, }} />
                        </View>
                        <View style={{ flex: 33, justifyContent: "center" }}>

                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>

                        <QRCodeScanner
                            onRead={(e) => {
                                console.log("edata: ", e.data);
                                alert(props.route.params.type == "PAY" ? ("Ödemeniz gerçekleşti. " + e.data) : ("Para gönderimi gerçekleşti. " + e.data));
                            }}
                            flashMode={RNCamera.Constants.FlashMode.off}
                            containerStyle={{ width: "100%", height: "100%", position: "absolute", top: -14, }}
                            cameraStyle={{ height: "100%", width: "100%" }}
                            reactivate={true}
                            reactivateTimeout={5000}
                            showMarker={false}
                            markerStyle={{ borderColor: "white" }}
                            permissionDialogTitle={"İzin Gerekli"}
                            permissionDialogMessage={"QR Kod okumak için kamera erişimine ihtiyacımız var."}
                            buttonPositive={"Tamam"}
                        />

                        <RNHoleView
                            style={{ position: 'absolute', width: '100%', height: '100%', top: -14, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)' }}
                            holes={[{ x: 60, y: 150, width: 240, height: 240, }]}>
                        </RNHoleView>
                        <Text style={{ position: "absolute", top: 50, color: "white", fontSize: 16, fontWeight: "bold" }}>Bir QR Kod Okutunuz</Text>

                    </View>


                </View>
                <View key="2">
                    <View style={{ width: "100%", height: 80, flexDirection: "row", backgroundColor: "#00A3E1", borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0, borderBottomWidth: 0 }}>
                        <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start" }}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <ArrowLeft width={40} height={40} fill={"#fff"} style={{ marginLeft: 4 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                            <Image source={LogoSm} style={{ width: 24, height: 50, }} />
                        </View>
                        <View style={{ flex: 33, justifyContent: "center" }}>

                        </View>
                    </View>
                    <View style={{ width: "100%", backgroundColor: "#00A3E1", paddingHorizontal: 64, alignItems: "center", paddingTop: 24, borderBottomLeftRadius: 46, borderBottomRightRadius: 46, borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0 }}>
                        <Text style={{ fontSize: 24, fontWeight: "bold", fontWeight: "600", color: "white" }}>
                            QR Kod İle Para Al
                        </Text>
                        <Text style={{ color: "#E5E5E5" }}>
                            Neepay kullanıcısına kodu okutarak
                            işlemi yapabilirsiniz.
                        </Text>
                        <View style={{ width: "100%", height: 2, backgroundColor: "white", marginVertical: 12 }}></View>
                        {!generated && <><Text style={{ fontSize: 24, fontWeight: "bold", fontWeight: "600", color: "white" }}>
                            Tutar
                        </Text>
                            <Text style={{ fontSize: 30, fontWeight: "bold", fontWeight: "600", color: "white", marginBottom: 24 }}>
                                {currencyFormat(tutar)}
                            </Text></>}
                        {generated && <Text style={{ fontSize: 24, fontWeight: "bold", fontWeight: "600", color: "white", marginBottom: 100 }}>
                            QR Kodun
                        </Text>}
                    </View>


                    {generated && <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ position: "absolute", top: -90 }}>
                            <QRCode
                                value={`paragonder_${tutar}`}
                                quietZone={4}
                                size={160}
                            />
                        </View>
                    </View>}

                    {generated && <View style={{ marginTop: 80, paddingHorizontal: 24 }}>
                        <Button
                            text="Linki Kopyala"
                            icon={<LinkIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 16 }}
                            onPress={() => {
                                Clipboard.setString(`paragonder_${tutar}`);
                                alert("Link panoya kopyalandı!");
                            }}
                        />
                        {/*<Button
                            text="Galeriye Kaydet"
                            icon={<SaveIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 16 }}
                            onPress={() => { }}
                       />*/}
                        <Button
                            text="Bitir"
                            icon={<CheckIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 16 }}
                            onPress={() => setGenerated(false)}
                        />
                    </View>}

                    {!generated && <VirtualKeyboard color='black' pressMode='string' onPress={(val) => {
                        console.log("val:", val);
                        if (val.length != 0)
                            setTutar(val)
                        else
                            setTutar(0)
                    }} />}
                    {!generated && <View style={{ paddingHorizontal: 32, marginTop: 24 }}>
                        <Button
                            text="Devam Et"
                            icon={<ArrowRightIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 16 }}
                            onPress={() => generateQr()}
                        />
                    </View>}
                </View>
            </PagerView>
            {props.route.params.type != "PAY" && <View style={{ width: "100%", height: 86, backgroundColor: "black", paddingHorizontal: 8, paddingVertical: 8 }}>
                <View style={{ flex: 1, backgroundColor: "#D8D8D8", borderRadius: 9, padding: 8, flexDirection: "row" }}>
                    <TouchableOpacity style={{ flex: 50, justifyContent: "center", alignItems: "center" }} onPress={() => pager.current.setPage(0)}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "600", zIndex: 2 }}>QR Oku</Text>

                        {qrPos == "0" && <View style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "white", zIndex: -1, borderRadius: 5 }} />}

                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 50, justifyContent: "center", alignItems: "center", zIndex: 2 }} onPress={() => pager.current.setPage(1)}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "600", }}>QR Okut</Text>

                        {qrPos == "1" && <View style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "white", zIndex: -1, borderRadius: 5 }} />}
                    </TouchableOpacity>

                </View>
            </View>}

        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(QRMakeScreen);
