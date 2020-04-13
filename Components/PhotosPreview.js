import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

export const PhotosPreview = (props) => {
    const { photos, sizing, shuffled } = props
    const [preview, setPreview] = useState([])
    useEffect(() => {
        setPreview(photos)
    }, [photos])
    return (
        preview.map((item, index) => {
            return index % 2 === 0 ?
                <Animatable.View animation="rubberBand">
                    <Image key={index} source={{ uri: item }}
                        style={{ width: sizing, height: sizing, margin: 7 }} />
                </Animatable.View>
                :
                <Animatable.View animation="rubberBand">
                    <Image key={index} source={{ uri: item }} style={{
                        width: shuffled ? sizing : 0, height:
                            shuffled ? sizing : 0
                    }}>
                    </Image>
                </Animatable.View>
        })
    )
}