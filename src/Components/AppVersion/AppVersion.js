import React from 'react'
import TextLabel from '../TextLabel/TextLable';
import colors from '../../GlobalStyles/colors';

function AppVersion() {
    return (
        <TextLabel label={`Beta 1.0.4`} fontSize={15} color={colors.white} marginRight={10} marginTop={10} alignSelf={'center'} textAlign={'center'} fontFamily={'Montserrat-Bold'} />
    )
}

export default AppVersion