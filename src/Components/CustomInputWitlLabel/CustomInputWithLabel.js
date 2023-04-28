import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import { moderateScale, moderateScaleVertical, verticalScale } from '../../Utilitis/ResponsiveSizes';

import Colors from '../../Utilitis/Colors';
import { EyeIcon, EyeIconClose } from '../../Constants/AppImages';
import { FontFamily, FontSizes } from '../../Constants/AppFonts';
import GlobalStyles from '../../Utilitis/GlobalStyles';

const CustomInputWithLabel
    = ({
        value,
        onChangeText,
        placeholder,
        label,
        type,
        TopWidth,
        keyboardType,
        borderColor,
        Labelcolors,
        onSubmitEditing,
        width,
        secureText,
        setsecureText,
        maxLength,
        maxHeight,
        fontFamily,
        color,
        height,
        secure,
        marginTop,
        borderRadius,
        borderWidth,
        Bg,
        alignSelf,
        SetsecureTextEntry,
        secureTextEntry,
        tintColor,
        ...props

    }) => {
        return (
            <View style={[
                styles.container,
                width ? { width } : { width: "100%" }
            ]}>
                <Text style={[styles.labelText2]}>{label} </Text>

                <View
                    style={[
                        styles.InputContainer,
                        GlobalStyles.Shadow4,
                        styles[`con_${type}`],
                        marginTop ? { marginTop } : null,
                        Bg ? { backgroundColor: Bg } : { backgroundColor: Colors.white },
                        borderRadius ? { borderRadius } : {},
                        borderWidth ? { borderWidth } : {},
                        borderColor ? { borderColor } : {},
                        alignSelf ? { alignSelf } : {},
                        height ? { height } : { height: verticalScale(60) }]}>
                    <TextInput
                        maxLength={maxLength}
                        style={[
                            styles.input,
                            fontFamily ? { fontFamily } : { fontFamily: FontFamily.Poppins_Regular },
                            color ? { color } : { color: Colors.black },
                            height ? { height } : { height: verticalScale(55) }
                        ]}
                        value={value}
                        onChangeText={(e) => onChangeText(e)}
                        placeholder={placeholder}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={Colors.black}
                        onSubmitEditing={(e) => onSubmitEditing ? onSubmitEditing(e) : ''}
                        secureTextEntry={secureTextEntry == true ? true : false}

                        {...props}
                        {...props}
                    />
                    {secure == true ? (
                        <Pressable onPress={() => SetsecureTextEntry(!secureTextEntry)}>
                            <Image
                                source={secureTextEntry != true ? EyeIcon : EyeIconClose}
                                style={[
                                    styles.img2,
                                    tintColor ? { tintColor } : { tintColor: Colors.black },
                                ]}
                                resizeMode={'contain'}
                            />
                        </Pressable>
                    ) : null}

                </View>
            </View>
        )
    }
const styles = StyleSheet.create({
    InputContainer: {
        width: '100%',
        height: 60,
        color: '#000',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    labelText2: {
        alignSelf: 'flex-start',
        fontFamily: FontFamily.Arsenal_Bold,
        color: Colors.AppBlue2,
        marginBottom: verticalScale(5),
        fontSize: FontSizes.LargeMedium
    },
    container: {
        marginTop: verticalScale(10),
        alignItems: "flex-start",
        alignSelf: 'center',
    },
    img2: {
        height: verticalScale(25),
        width: moderateScale(25),
        marginLeft: moderateScaleVertical(-30)
    },
    input: {
        width: '100%',
        color: '#000',
    },
    con_ICON: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});


export default CustomInputWithLabel
