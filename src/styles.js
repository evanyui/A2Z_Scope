import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        // height: 100,
        bottom: 30,
        backgroundColor: "transparent"
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "white",
    },
    headerLayoutStyle: {
        width: winWidth, 
        height: winHeight,
        backgroundColor: '#DDDDDD', 
        borderBottomWidth: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        opacity: 0.5
    },
    slidingPanelLayoutStyle: {
        width: winWidth, 
        height: winHeight, 
        borderBottomWidth: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    link: {
        margin: 5,
        borderRadius: 20
    },
});
