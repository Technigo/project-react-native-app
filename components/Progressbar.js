import React from 'react'
import ProgressCircle from 'react-native-progress-circle'

export default function Progessbar() {

  return (
    <ProgressCircle
      percent={30}
      radius={50}
      borderWidth={8}
      color="#3399FF"
      shadowColor="#999"
      bgColor="#fff"
    >
      <Text style={{ fontSize: 18 }}>{'30%'}</Text>
    </ProgressCircle>
  )
}


