import React, { useState, useEffect } from 'react';

import { View, Text, Button } from 'react-native';

import { getSigns } from './Api';

export const SelectSign = ({ onSignSelected }) => {
    const [ signs,  setSigns] = useState([]);

    useEffect(() => {
        getSigns().then(setSigns);
    }, []); 

    return (
        <View> 
        {signs.map((sign) => ( 
        <Button 
        key={sign} 
        title={sign}
        onPress={() => onSignSelected(sign)}>
        </Button>  
    ))}
    </View>  

    )


}