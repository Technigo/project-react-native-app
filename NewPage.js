import React from "react"
import {Image, View} from 'react-native'
import styled from "styled-components/native"


export default function NewPage() {
  return (
    <View>
      <Image
          style={{width: 50, height: 50}}
          source={require('https://ctl.s6img.com/society6/img/4Ye35BewhbOweRHJwTDScsKn9Kw/w_700/posters/18x24/front/~artwork,fw_2721,fh_3625,fx_-377,iw_3790,ih_3618/s6-original-art-uploads/society6/uploads/misc/c7a2e55c88044a6eb6afb153811c6e4c/~~/baby-llama-blowing-bubble-gum-posters.jpg')}
        />
      
    </View>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  height: 50;
  width: 50;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

export default App
