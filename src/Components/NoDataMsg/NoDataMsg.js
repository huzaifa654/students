import React from 'react'
import { View } from 'react-native'
import colors from '../../GlobalStyles/colors'
import TextLabel from '../TextLabel/TextLable'
export default function NoDataMsg({ Label, marginTop }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop }}>
            <TextLabel label={Label ? Label : 'No Record Found'} textAlign={'center'} color={colors.black} />
        </View>
    )
}
