import React, { useState, useRef } from 'react'
import { Button, Text,  View, StyleSheet  } from 'react-native'
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
        {/* <View style={styles.buttons}>
            <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
            />
        </View> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
        height: 56,
        backgroundColor: "#87AAAA",
        padding: 16,
        marginBottom: 32,
        borderRadius: 8,
        minWidth: 343,
        fontSize: 18,
    },
  })
