/* import React, {useState, useEffect } from 'react'
import { Text } from 'react-native'


export const FortuneMessage = () => {
    const [fortune, setFortune] = useState([])
    
    useEffect(() => {
        fetch('https://type.fit/api/quotes')
            .then((response) => response.json())
            .then((json) => {
                setFortune(json);
                console.log(json);
            })
    }, []);

    return (
        <Text> {fortune}</Text>
    )
}
 */