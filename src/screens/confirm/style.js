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
    codeFieldRoot: {
        width: "80%",
    },
    cell: {
        display: "flex",
        fontSize: 24,
        textAlign: 'center',
        color: "black",
    },
    focusCell: {
        borderColor: '#C0C0C0',
    },
});