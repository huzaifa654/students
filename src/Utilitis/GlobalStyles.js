import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { verticalScale } from "./ResponsiveSizes";

const GlobalStyles = StyleSheet.create({
    rowFull: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%"
    },
    rowCenterFull: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        width: "100%"
    },
    MarginTop10: {
        marginTop: verticalScale(10)
    },
    MarginTop20: {
        marginTop: verticalScale(20)
    },
    MarginTop30: {
        marginTop: verticalScale(30)
    },
    MarginTop40: {
        marginTop: verticalScale(40)
    },
    MarginTop50: {
        marginTop: verticalScale(50)
    },
    MarginBottom10: {
        marginBottom: verticalScale(10)
    },
    MarginBottom20: {
        marginBottom: verticalScale(20)
    },
    MarginBottom30: {
        marginBottom: verticalScale(30)
    },
    MarginTop40: {
        marginBottom: verticalScale(40)
    },
    MarginBottom50: {
        marginBottom: verticalScale(50)
    },
    Shadow2: {
        shadowColor: Colors.AppBlue1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    Shadow4: {
        shadowColor: Colors.AppBlue1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    FixedImageView: {
        position: "absolute",
        bottom: 0,
        height: verticalScale(120),
        width: '100%',
        overflow: "hidden"
    }
});


export default GlobalStyles