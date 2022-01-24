import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    banner: {
        paddingLeft: 40,
        paddingRight: 40,
    },
    landingBanner: {
        width: "100%",
        height: 128,
    },
    content: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 24,
    },
    inputContainer: {
        height: 53,
        borderRadius: 8,
        marginTop: 8,
    },
    input: {
        zIndex: 9,
        height: "100%",
        borderRadius: 6,
        flex: 1,
        color: "black"

    },
    border: {
        flex: 1,
        width: "100%",
        borderRadius: 9,
        zIndex: 2,
    },
    box: {
        width: 64,
        height: 64,
        backgroundColor: "blue",
        borderRadius: 12,
    }
});