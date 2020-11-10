import React, { useState } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'




export const ChallengeButton = (props) => {
    const [challenge, setChallenge] = useState('Lets go!');
    const onIncrement = () => {
       setChallenge(challenge)

    }
    return (
        <View>
            <Text>
            </Text>  
        </View>
        
    )
    
}
