import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import EmailIcon from '../../icons/email';
import PhoneIcon from '../../icons/phone';
import NameIcon from '../../icons/name';
import ArrowRightIcon from '../../icons/arrow_right';
import PasswordIcon from '../../icons/password';
import PersonIcon from '../../icons/person';
import Logo from '../../images/logo.png';
import ArrowBackIcon from '../../icons/arrow_back';

const RegisterScreen = (props) => {
    const emailRef = useRef(null);
    const emailInput = useSharedValue({ x: 16, y: 20, color: "#C0C0C0", back: "white" });
    const [emailEntry, setEmailEntry] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);

    const fullnameRef = useRef(null);
    const fullnameInput = useSharedValue({ x: 16, y: 24, color: "#C0C0C0", back: "white" });
    const [fullnameEntry, setFullnameEntry] = useState("");
    const [fullnameErr, setFullnameErr] = useState("");
    const [fullnameFocus, setFullnameFocus] = useState(false);

    const passwordRef = useRef(null);
    const passwordInput = useSharedValue({ x: 16, y: 24, color: "#C0C0C0", back: "white" });
    const [passwordEntry, setPasswordEntry] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [passwordFocus, setPasswordFocus] = useState(false);

    const password2Ref = useRef(null);
    const password2Input = useSharedValue({ x: 16, y: 24, color: "#C0C0C0", back: "white" });
    const [password2Entry, setPassword2Entry] = useState("");
    const [password2Err, setPassword2Err] = useState("");
    const [password2Focus, setPassword2Focus] = useState(false);

    const tcRef = useRef(null);
    const tcInput = useSharedValue({ x: 16, y: 24, color: "#C0C0C0", back: "white" });
    const [tcEntry, setTcEntry] = useState("");
    const [tcErr, setTcErr] = useState("");
    const [tcFocus, setTcFocus] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const onContinue = () => {
        if (emailEntry.length == 0) {
            setEmailErr("Lütfen email veya telefon numarası giriniz.");
            return;
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailEntry))) {
            setEmailErr("Lütfen geçerli bir email giriniz.");
            return;
        }
    }

    useEffect(() => {
        if (emailFocus) {
            emailInput.value = { ...emailInput.value, x: -12, y: 20, color: "#FF4B12", back: "white" };
        } else {
            if (emailEntry.length == 0) {
                emailInput.value = { ...emailInput.value, x: 16, y: 40, color: "#C0C0C0", back: "transparent" };
            }
        }
    }, [emailFocus]);

    useEffect(() => {
        if (fullnameFocus) {
            fullnameInput.value = { ...fullnameInput.value, x: -12, y: 20, color: "#FF4B12", back: "white" };
        } else {
            if (fullnameEntry.length == 0) {
                fullnameInput.value = { ...fullnameInput.value, x: 16, y: 40, color: "#C0C0C0", back: "transparent" };
            }
        }
    }, [fullnameFocus]);

    useEffect(() => {
        if (passwordFocus) {
            passwordInput.value = { ...passwordInput.value, x: -12, y: 20, color: "#FF4B12", back: "white" };
        } else {
            if (passwordEntry.length == 0) {
                passwordInput.value = { ...passwordInput.value, x: 16, y: 40, color: "#C0C0C0", back: "transparent" };
            }
        }
    }, [passwordFocus]);

    useEffect(() => {
        if (password2Focus) {
            password2Input.value = { ...password2Input.value, x: -12, y: 20, color: "#FF4B12", back: "white" };
        } else {
            if (password2Entry.length == 0) {
                password2Input.value = { ...password2Input.value, x: 16, y: 40, color: "#C0C0C0", back: "transparent" };
            }
        }
    }, [password2Focus]);

    useEffect(() => {
        if (tcFocus) {
            tcInput.value = { ...tcInput.value, x: -12, y: 20, color: "#FF4B12", back: "white" };
        } else {
            if (tcEntry.length == 0) {
                tcInput.value = { ...tcInput.value, x: 16, y: 40, color: "#C0C0C0", back: "transparent" };
            }
        }
    }, [tcFocus]);

    const emailStyles = useAnimatedStyle(() => {
        return {
            top: withTiming(emailInput.value.x, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: withTiming(emailInput.value.y, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            paddingLeft: 4,
            paddingRight: 4,
            color: emailInput.value.color,
            fontWeight: "600",
            backgroundColor: emailInput.value.back,
        };
    });

    const fullnameStyles = useAnimatedStyle(() => {
        return {
            top: withTiming(fullnameInput.value.x, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: withTiming(fullnameInput.value.y, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            paddingLeft: 4,
            paddingRight: 4,
            color: fullnameInput.value.color,
            fontWeight: "600",
            backgroundColor: fullnameInput.value.back,
        };
    });

    const passwordStyles = useAnimatedStyle(() => {
        return {
            top: withTiming(passwordInput.value.x, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: withTiming(passwordInput.value.y, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            paddingLeft: 4,
            paddingRight: 4,
            color: passwordInput.value.color,
            fontWeight: "600",
            backgroundColor: passwordInput.value.back,
        };
    });

    const password2Styles = useAnimatedStyle(() => {
        return {
            top: withTiming(password2Input.value.x, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: withTiming(password2Input.value.y, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            paddingLeft: 4,
            paddingRight: 4,
            color: password2Input.value.color,
            fontWeight: "600",
            backgroundColor: password2Input.value.back,
        };
    });

    const tcStyles = useAnimatedStyle(() => {
        return {
            top: withTiming(tcInput.value.x, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: withTiming(tcInput.value.y, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            paddingLeft: 4,
            paddingRight: 4,
            color: tcInput.value.color,
            fontWeight: "600",
            backgroundColor: tcInput.value.back,
        };
    });

    return (
        <View style={styles.container}>
            <View style={{ height: 60, flexDirection: "row" }}>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ padding: 24, marginRight: 32 }} onPress={() => props.navigation.goBack()}>
                        <ArrowBackIcon width={32} height={32} fill="#000" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 24, color: "black", fontWeight: "600" }}>Kayıt Ol</Text>
                </View>
                <View style={{ flex: 33, }} />
            </View>
            <View style={{ flex: 90 }}>
                <View style={styles.banner}>
                    <Image source={Logo} style={styles.landingBanner} resizeMode='contain' resizeMethod='scale' />
                </View>
                <ScrollView style={styles.content}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => emailRef.current.focus()}>
                            <Animated.Text style={[{ position: "absolute" }, emailStyles]}>
                                Email
                            </Animated.Text>
                        </TouchableOpacity>
                        <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                                <EmailIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />
                                <TextInput
                                    onChangeText={text => setEmailEntry(text)}
                                    style={styles.input}
                                    ref={emailRef}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    maxLength={32}
                                />
                            </View>
                        </View>
                        <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
                    </View>
                    {emailErr.length != 0 && <Text style={{ marginTop: 8, color: "#EC0000" }}>{emailErr}</Text>}
                    <View style={{ ...styles.inputContainer, marginTop: 16 }}>
                        <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => fullnameRef.current.focus()}>
                            <Animated.Text style={[{ position: "absolute" }, fullnameStyles]}>
                                İsim Soyisim
                            </Animated.Text>
                        </TouchableOpacity>
                        <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                                <NameIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />
                                <TextInput
                                    onChangeText={text => setFullnameEntry(text)}
                                    style={styles.input}
                                    ref={fullnameRef}
                                    onFocus={() => setFullnameFocus(true)}
                                    onBlur={() => setFullnameFocus(false)}
                                    maxLength={32}
                                />
                            </View>
                        </View>
                        <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
                    </View>
                    {fullnameErr.length != 0 && <Text style={{ marginTop: 8, color: "#EC0000" }}>{fullnameErr}</Text>}
                    <View style={{ ...styles.inputContainer, marginTop: 16, }}>
                        <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => passwordRef.current.focus()}>
                            <Animated.Text style={[{ position: "absolute" }, passwordStyles]}>
                                Şifre
                            </Animated.Text>
                        </TouchableOpacity>
                        <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                                <PasswordIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />
                                <TextInput
                                    onChangeText={text => setPasswordEntry(text)}
                                    style={styles.input}
                                    ref={passwordRef}
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                    blurOnSubmit
                                    maxLength={32}
                                    secureTextEntry={!passwordVisible}
                                />
                            </View>
                        </View>
                        <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
                    </View>
                    {passwordErr.length != 0 && <Text style={{ marginTop: 8, color: "#EC0000" }}>{passwordErr}</Text>}
                    <View style={{ ...styles.inputContainer, marginTop: 16, }}>
                        <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => password2Ref.current.focus()}>
                            <Animated.Text style={[{ position: "absolute" }, password2Styles]}>
                                Şifreyi Onaylayın
                            </Animated.Text>
                        </TouchableOpacity>
                        <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                                <PasswordIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />
                                <TextInput
                                    onChangeText={text => setPassword2Entry(text)}
                                    style={styles.input}
                                    ref={password2Ref}
                                    onFocus={() => setPassword2Focus(true)}
                                    onBlur={() => setPassword2Focus(false)}
                                    maxLength={32}
                                    secureTextEntry={!passwordVisible}
                                />
                            </View>
                        </View>
                        <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
                    </View>
                    {passwordErr.length != 0 && <Text style={{ marginTop: 8, color: "#EC0000" }}>{password2Err}</Text>}
                    <View style={{ ...styles.inputContainer, marginTop: 16, marginBottom: 32 }}>
                        <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => tcRef.current.focus()}>
                            <Animated.Text style={[{ position: "absolute" }, tcStyles]}>
                                T.C. Kimlik Numarası
                            </Animated.Text>
                        </TouchableOpacity>
                        <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                                <PersonIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />
                                <TextInput
                                    onChangeText={text => setTcEntry(text)}
                                    style={styles.input}
                                    ref={tcRef}
                                    onFocus={() => setTcFocus(true)}
                                    onBlur={() => setTcFocus(false)}
                                    maxLength={32}
                                />
                            </View>
                        </View>
                        <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
                    </View>
                    {tcErr.length != 0 && <Text style={{ marginTop: 8, color: "#EC0000" }}>{tcErr}</Text>}
                </ScrollView>

                <View style={{ justifyContent: "flex-end", paddingLeft: 24, paddingRight: 24, backgroundColor: "transparent" }}>
                    <Button
                        text="Devam Et"
                        icon={<ArrowRightIcon width={24} height={24} fill="#fff" />}
                        style={{ marginBottom: 48 }}
                        onPress={() => onContinue()}
                    />
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

export default connect(mapStateToProps)(RegisterScreen);
