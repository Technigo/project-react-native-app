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
      margin-bottom: 20px;`

    const PhotoButtonOuter = styled.View`
      border: 2px solid white;
      border-radius: 50;
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    `
    const PhotoButtonInner = styled.View`
      border: 2px solid red;
      border-radius: 50;
      height: 40px;
      width: 40px;
      background-color: red;
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
                    <PhotoButtonOuter>
                        <PhotoButtonInner >
                        </PhotoButtonInner>
                    </PhotoButtonOuter>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setShowCamera(false)}>
                    <Text style={{ fontSize: 18, color: 'white', width: 65 }} >Hide Camera</Text>
                </TouchableOpacity>
            </CameraButtons>
        </Camera>
    )

}