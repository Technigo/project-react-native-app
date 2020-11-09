import React, {useEffect, useState} from 'react'; 
import {View, Text} from 'react-native';


export const OracleMessage = () => { 

  const [message, setMessage] = useState({});

  useEffect (()=> { 
    fetch('https://api.adviceslip.com/advice')
      .then (response => response.json())
      .then ((json) => { 
        setMessage(json.slip) 
      });
  },[]);

  return (
    <>
      <View>
        <Text>{message.advice}</Text>
      </View>
    </>
  );
};