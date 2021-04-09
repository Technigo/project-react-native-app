import React from 'react'
import { Share, Button } from 'react-native'

const LinkShare = ({ hompageUrl }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hey! You must see this movie!',
        url: hompageUrl,
      })
      } catch (error) {
        alert(error.message)
      } 
    }

  return (
    <Button onPress={onShare} title="Share" color="red"/>
  )
}

export default LinkShare