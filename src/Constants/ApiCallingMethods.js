import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-toast-message'

export const API = 'http://18.188.74.22/';

const DefaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const POST_METHOD = async (link, body, header) => {

    const netInfo = await NetInfo?.fetch();

    if (netInfo?.isInternetReachable !== null) {
        if (netInfo?.isConnected == false || netInfo?.isInternetReachable == false) {
            Toast.show({
                type: 'error',
                text1: 'Check Your Internet Connection',
                position: 'bottom'
            });
        }
    }

    return fetch(API + link, {
        method: 'POST',
        redirect: 'follow',
        headers: header ? header : DefaultHeaders,
        body: JSON.stringify(body),
    }).then(response => response.text());

};

const FileUpload = async (link, path, header) => {

    const formdata = new FormData();
    formdata.append('file', {
        uri: Platform.OS === 'android' ? path.uri : path?.uri?.replace('file://', ''),
        type: path.type,
        name: path.fileName,
    });

    var requestOptions = {
        method: 'POST',
        headers: header,
        body: formdata,
        redirect: 'follow'
    };
    return fetch(API + link, requestOptions)
        .then(response => response.text());
};


export {
    FileUpload,
    POST_METHOD,
};