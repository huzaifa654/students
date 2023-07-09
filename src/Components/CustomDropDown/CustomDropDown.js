import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {
    moderateScale,
    scale,
    verticalScale,
} from '../../Utilitis/ResponsiveSizes';
import Colors from '../../Utilitis/Colors';
import { ArrowDownIcon } from '../../Constants/AppImages';
import GlobalStyles from '../../Utilitis/GlobalStyles';
import { FontFamily, FontSizes } from '../../Constants/AppFonts';

const data2 = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const CustomDropDown = ({
    Label,
    defaultValue,
    width,
    alignSelf,
    height,
    Bg,
    marginTop,
    data,
    borderRadius,
    marginLeft,
    disabled,
    search,
    statusBarIsTranslucent,
    setValue,
    value,
    placeholder,
    leftIcon,
    border,
}) => {
    const [valueFake, setValueFake] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={[styles.container, width ? { width } : { width: '100%' }]}>
            {Label ? <Text style={[styles.labelText2]}>{Label} </Text> : null}
            <View
                style={[
                    styles.containerInner,
                    border == true && GlobalStyles.Shadow4,
                    // width ? { width } : {},
                    alignSelf ? { alignSelf } : {},
                    Bg == 'none' ? {} : { backgroundColor: Colors.white },
                    marginTop ? { marginTop: verticalScale(marginTop) } : {},
                    borderRadius ? { borderRadius } : { borderRadius: 8 },
                    marginLeft ? { marginLeft } : {},
                    border == true ? { borderWidth: 0 } : { borderWidth: 1 },
                ]}>
                <Dropdown
                    style={[
                        styles.dropdown,
                        height ? { height: verticalScale(height) } : {},
                    ]}
                    search={search == true ? true : false}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={data ? data : data2}
                    maxHeight={300}
                    itemTextStyle={styles.selectedTextStyle}
                    renderRightIcon={() => (
                        <Image source={ArrowDownIcon} style={styles.arrow} />
                    )}
                    renderLeftIcon={() =>
                        leftIcon ? <Image source={leftIcon} style={[styles.arrow, { width: scale(25), height: verticalScale(25) }]} /> : null
                    }
                    labelField="label"
                    disable={disabled == true ? true : false}
                    valueField="value"
                    placeholder={
                        !isFocus
                            ? defaultValue
                            : placeholder
                                ? placeholder
                                : 'Select any option'
                    }
                    searchPlaceholder="Search..."
                    value={value ? value : valueFake}
                    statusBarIsTranslucent={statusBarIsTranslucent == true ? true : false}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValueFake(item.value);
                        setIsFocus(false);
                        setValue && setValue(item.value);
                    }}
                />
            </View>
        </View>
    );
};

export default CustomDropDown;

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(10),
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    containerInner: {
        width: '100%',
        height: 55,
        borderColor: '#e8e8e8',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.AppBlue2,
    },
    dropdown: {
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '100%',
        borderWidth: 0,
    },
    placeholderStyle: {
        fontSize: scale(12),
        fontFamily: 'Montserrat-Bold',
        color: Colors.AppBlue1,
        fontFamily: FontFamily.Poppins_Regular,
    },
    selectedTextStyle: {
        fontSize: scale(12),
        fontFamily: 'Montserrat-Bold',
        color: Colors.AppBlue1,
        fontFamily: FontFamily.Poppins_Regular,
    },
    iconStyle: {
        width: moderateScale(30),
        height: verticalScale(30),
        tintColor: Colors.AppBlue1,
        resizeMode: 'contain',
    },
    arrow: {
        width: moderateScale(15),
        height: verticalScale(15),
        // tintColor: Colors.AppBlue2,
        resizeMode: 'contain',
        marginRight: moderateScale(10),
    },
    labelText2: {
        alignSelf: 'flex-start',
        color: Colors.AppBlue2,
        fontFamily: FontFamily.Arsenal_Bold,
        fontSize: FontSizes.Small,
    },
});