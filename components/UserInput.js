import React from 'react';
import { useState } from 'react'
import { TextInput } from 'react-native';
import styled from 'styled-components/native';


const UserInput = ({  }) => {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [nickName, setNickName] = useState()

  return ( 
    <>
      <TextInput
        style={{
            backgroundColor: '#e5e5e5',
            borderWidth: '1px',
            borderColor: '#023047',
            width: '50vw',
            padding: '8px',
            margin: '10px'
        }}
        placeholder='Your name, e.g. John Doe'
        onChangeText={name => setAge(name)}
        defaultValue=''
      />

      <TextInput
        style={{
          backgroundColor: '#e5e5e5',
          borderWidth: '1px',
          borderColor: '#023047',
          width: '50vw',
          padding: '8px',
          margin: '10px'
        }}
        placeholder='Your age, e.g. 30'
        onChangeText={age => setAge(age)}
        defaultValue=''
      />

      <TextInput
        style={{
          backgroundColor: '#e5e5e5',
          borderWidth: '1px',
          borderColor: '#023047',
          width: '50vw',
          padding: '8px',
          margin: '5px'
        }}
        placeholder='What should we call you?'
        onChangeText={nickName => setNickName(nickName)}
        defaultValue=''
      />
    </>        
     );
}
 
export default UserInput;