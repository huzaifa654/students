import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../Utilitis/Colors';

export default function GradientFullScreenBG({ children, style }) {
    return (
        <LinearGradient colors={[Colors.AppWhite, Colors.AppWhite, Colors.white]} style={[style ? style : { flex: 1 }]}>
            {children}
        </LinearGradient>
    )
}
