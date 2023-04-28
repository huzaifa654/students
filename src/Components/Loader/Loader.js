import React from 'react'
import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native';
import colors from '../../GlobalStyles/colors';

export default function Loader({ loading }) {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={styles.modalBackground}>
                <View style={[styles.activityIndicatorWrapper, { height: 150, width: 150 }]}>
                    <ActivityIndicator animating={loading} color={colors.white} size={'large'} />
                    {/* <Text>Loading ... </Text> */}
                </View>
            </View>
        </Modal>
    )
}



const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    activityIndicatorWrapper: {
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10
    }
});

