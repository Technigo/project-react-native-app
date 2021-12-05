import React, { useState, useRef } from 'react'
import { Button, Text,  View, StyleSheet, TouchableOpacity  } from 'react-native'
import { Video } from 'expo-av'


export const RandomVideos = () => {
    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
      
        <View>
            <Video
              ref={video}
              style={styles.video}
              source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity 
              style={[styles.button, styles.shadowProp]} 
              onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                <Text style={styles.buttonText}> {status.isPlaying ? 'Pause' : 'Play'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#eee',

    },
    video: {
      alignSelf: 'center',
      minWidth: 343,
      height: 200,
      marginTop: 48,
    },
    button: {
        height: 56,
        backgroundColor: "#9BCBCB",
        borderRadius: 8,
        marginLeft: 32,
        marginRight: 32,
        marginTop: 16,
        justifyContent: 'center',
        display: 'flex',
    },
    buttonText: {
        fontSize: 18,
        color: '#1a1a1a',
        textAlign: 'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  })
