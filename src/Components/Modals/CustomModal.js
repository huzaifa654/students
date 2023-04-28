import React from "react";
import Modal from "react-native-modal";
import Colors from "../../Utilitis/Colors";

export default function CustomModal({ value, setValue, children, HideOnBackDropPress = false }) {
    return (
        <Modal
            isVisible={value}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            backdropColor={Colors.AppBlue1}
            backdropOpacity={0.7}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionInTiming={300}
            backdropTransitionOutTiming={300}
            onBackdropPress={() => HideOnBackDropPress ? setValue(false) : null}>

            {children}

        </Modal>
    );
}