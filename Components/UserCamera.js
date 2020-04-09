import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text, View } from 'react-native'
import { Camera } from 'expo-camera'
export const UserCamera = (props) => {
    const { photos, setPhotos, setShowCamera } = props
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);

    const CameraButtons = styled.View`
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 20px;
`

    return (
        <Camera style={{ flex: 1, justifyContent: 'flex-end' }} type={type} ref={ref => {
            setCameraRef(ref);
        }}>
            <CameraButtons>
                <TouchableOpacity
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <Text style={{ fontSize: 30, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignSelf: 'flex-end' }}
                    onPress={async () => {
                        if (cameraRef) {
                            let photo = await cameraRef.takePictureAsync();
                            if (!photo.cancelled && photos.length < 14) {
                                setPhotos(photos => [photo.uri, ...photos])
                                setPhotos(photos => [photo.uri, ...photos])
                            }
                        }
                    }}>
                    <View style={{
                        borderWidth: 2,
                        borderRadius: "50%",
                        borderColor: 'white',
                        height: 50,
                        width: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            borderWidth: 2,
                            borderRadius: "50%",
                            borderColor: 'red',
                            height: 40,
                            width: 40,
                            backgroundColor: 'red'
                        }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setShowCamera(false)}>
                    <Text style={{ fontSize: 18, color: 'white', width: 65 }} >Hide Camera</Text>
                </TouchableOpacity>
            </CameraButtons>
        </Camera>
    )

}