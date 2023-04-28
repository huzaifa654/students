import React, { useState } from "react";
import styles from "./style";
import { Image, } from 'react-native';

import SelectList from 'react-native-dropdown-select-list'
import { ArrowDown } from "../../constants/images";


const Dropdown = () => {

    const [selected, setSelected] = useState("");

    const data = [
        { key: '1', value: 'ALL' },
        { key: '2', value: 'PAID' },
        { key: '3', value: 'PENDING' },
        { key: '4', value: 'WORKING' },
    ];

    return (
        <SelectList
            onSelect={() => console.log(selected)}
            setSelected={setSelected}
            data={data}
            arrowicon={<Image source={ArrowDown} style={styles.arrowIcon} resizeMode={'contain'} />}
            search={false}
            inputStyles={{ color: "#fff", width: "100%" }}
            dropdownTextStyles={{ color: "#fff", }}
            boxStyles={{ borderRadius: 0, padding: 0, }}
            defaultOption={{ key: '1', value: 'ALL' }}
        />
    );
};

export default Dropdown;