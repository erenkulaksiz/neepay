import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import LoginIcon from '../../icons/login';
import LinkIcon from '../../icons/link';
import Logo from '../../images/logo.png';

const LandingScreen = (props) => {

    return (
        <View style={styles.container}>
            <View style={{ height: 60 }}>

            </View>
            <View style={{ flex: 90 }}>
                <View style={styles.banner}>
                    <Image source={Logo} style={styles.landingBanner} resizeMode='contain' resizeMethod='scale' />
                </View>
                <View style={styles.content}>
                    <Text style={{ fontSize: 24, fontWeight: "800", color: "black" }}>Hoş geldiniz.</Text>
                    <Text style={{ marginTop: 8, fontSize: 14, color: "#555555" }}>Neepay ile hızlı ödemeler ve uzun bir yazı için uygulamaya giriş yapabilirsiniz. Lorem ipsum dolor amet, sit dolor amet.</Text>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <View style={{ height: "70%", paddingLeft: 12, paddingRight: 12, justifyContent: "flex-end", paddingBottom: 24 }}>
                            <Button
                                text="Giriş"
                                icon={<LoginIcon width={24} height={24} fill="#fff" />}
                                style={{ marginBottom: 48 }}
                                onPress={() => props.navigation.navigate('LoginScreen')}
                            />
                            <View style={{ paddingLeft: 12, paddingRight: 12, flexDirection: "row", alignItems: "center" }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: "#666666", marginRight: 8 }} />
                                <Text style={{ fontWeight: "300", color: "#666666" }}>HESABINIZ YOK ISE</Text>
                                <View style={{ flex: 1, height: 1, backgroundColor: "#666666", marginLeft: 8 }} />
                            </View>
                            <View style={{ width: "100%", alignItems: "center", marginTop: 14 }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('RegisterScreen')}>
                                    <Text style={{ fontSize: 18, color: "#0094FF" }}>Kayıt Ol</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "100%", alignItems: "center", marginTop: 24, flexDirection: "row", justifyContent: "center" }}>
                                <Text style={{ fontSize: 14 }}>neepay için</Text>
                                <TouchableOpacity style={{ marginLeft: 4, flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ color: "#0094FF" }}>kullanım şartları</Text>
                                    <LinkIcon width={16} height={16} fill="#0094FF" style={{ marginLeft: 4 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(LandingScreen);
